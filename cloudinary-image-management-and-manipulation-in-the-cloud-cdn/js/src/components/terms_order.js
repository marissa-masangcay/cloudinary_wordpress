/* global window wp wpAjax */

function getTaxonomy( el ) {
	return el.closest(jQuery('.hndle.ui-sortable-handle'))
}

const Terms_Order = {
	template: '',
	tags: jQuery( '#cld-tax-items' ),
	tagDelimiter: (window.tagsSuggestL10n && window.tagsSuggestL10n.tagDelimiter) || ',',
	_init: function() {
		// Check that we found the tax-items.
		if ( ! this.tags.length ) {
			return;
		}

		// Init sortables.
		this._sortable();

		let self = this;

		// Setup ajax overrides.
		if ( typeof wpAjax !== 'undefined' ) {
			wpAjax.procesParseAjaxResponse = wpAjax.parseAjaxResponse;
			wpAjax.parseAjaxResponse = function( response, settings_response, element ) {
				let new_response = wpAjax.procesParseAjaxResponse( response, settings_response, element );
				if ( !new_response.errors && new_response.responses[ 0 ] ) {
					if ( jQuery( '[data-taxonomy="' + new_response.responses[ 0 ].what + '"]' ).length ) {
						let data = jQuery( new_response.responses[ 0 ].data ),
							text = data.find( 'label' ).last().text().trim();
						self._pushItem( new_response.responses[ 0 ].what, text );
					}
				}
				return new_response;
			};
		}

		if ( typeof window.tagBox !== 'undefined' ) {
			window.tagBox.processflushTags = window.tagBox.flushTags;
			window.tagBox.flushTags = function( el, a, f ) {
				if ( typeof f === 'undefined' ) {
					let taxonomy = el.prop( 'id' ),
						text,
						list,
						newtag = jQuery( 'input.newtag', el );

					a = a || false;

					text = a ? jQuery( a ).text() : newtag.val();
					list = window.tagBox.clean( text ).split( self.tagDelimiter );

					new wp.api.collections.Tags()
						.fetch( { data: { orderby: 'id', order: 'desc', per_page: 1 } } )
						.done( tags => {
							for (let i in list) {
								let tag = taxonomy + ':' + ( tags[0].id + 1 );
								if ( ! jQuery( '[data-item="' + tag + '"]' ).length ) {
									self._pushItem( tag, list[ i ] );
								}
							}
						} );
				}

				return this.processflushTags( el, a, f );
			};

			window.tagBox.processTags = window.tagBox.parseTags;

			window.tagBox.parseTags = function( el ) {
				let id = el.id,
					num = id.split( '-check-num-' )[ 1 ],
					taxonomy = id.split( '-check-num-' )[ 0 ],
					taxbox = jQuery( el ).closest( '.tagsdiv' ),
					thetags = taxbox.find( '.the-tags' ),
					current_tags = window.tagBox.clean( thetags.val() ).split( self.tagDelimiter ),
					remove_tag = current_tags[ num ];

				new wp.api.collections.Tags()
					.fetch( { data: { slug: remove_tag } } )
					.done( ( tag ) => {
						if ( tag.length ) {
							jQuery( '[data-item="' + taxonomy + ':' + tag[0].id + '"]' ).remove();
						} else {
							jQuery( `.cld-tax-order-list-item:contains(${remove_tag})` ).remove();
						}

						this.processTags( el );
					} );
			};
		}

		jQuery( 'body' ).on( 'change', '.selectit input', function() {
			let clicked = jQuery( this ),
				text = clicked.parent().text().trim(),
				id = clicked.val(),
				checked = clicked.is( ':checked' );

			if ( true === checked ) {
				self._pushItem( `category:${id}`, text );
			} else {
				self.tags.find( `[data-item="category:${id}"]` ).remove();
			}
		} );
	},
	_createItem: function( id, name ) {
		let li = jQuery( '<li/>' ),
			input = jQuery( '<input/>' ),
			icon = jQuery( '<span/>' );

		li.addClass( 'cld-tax-order-list-item' ).attr( 'data-item', id );
		input.addClass( 'cld-tax-order-list-item-input' ).attr( 'type', 'hidden' ).attr( 'name', 'cld_tax_order[]' ).val( id );
		icon.addClass( 'dashicons dashicons-menu cld-tax-order-list-item-handle' );

		li.append( icon ).append( name ).append( input ); // phpcs:ignore WordPressVIPMinimum.JS.HTMLExecutingFunctions.append
		
		return li;
	},
	_pushItem: function( id, text ) {
		let item = this._createItem( id, text );
		this.tags.append( item ); // phpcs:ignore WordPressVIPMinimum.JS.HTMLExecutingFunctions.append
	},
	_sortable: function() {
		let items = jQuery( '.cld-tax-order-list' );

		items.sortable( {
			connectWith: '.cld-tax-order',
			axis: 'y',
			handle: '.cld-tax-order-list-item-handle',
			placeholder: 'cld-tax-order-list-item-placeholder',
			forcePlaceholderSize: true,
			helper: 'clone',
		} );
	}
};

export default Terms_Order;

// Init.
if ( typeof window.CLDN !== 'undefined' ) {
	Terms_Order._init();
}

// Gutenberg.
if ( wp.data && wp.data.select( 'core/editor' ) ) {
	let orderSet = {};
	wp.data.subscribe( function() {
		let taxonomies = wp.data.select( 'core' ).getTaxonomies();

		if ( taxonomies ) {
			for (let t in taxonomies) {
				let set = wp.data.select( 'core/editor' ).getEditedPostAttribute( taxonomies[ t ].rest_base );
				orderSet[ taxonomies[ t ].slug ] = set;
			}
		}
	} );

	const el = wp.element.createElement;
	const CustomizeTaxonomySelector = function( OriginalComponent ) {

		class CustomHandler extends OriginalComponent {
			constructor(props) {
				super(props)
				this.currentItems = jQuery( '.cld-tax-order-list-item' ).map( ( _, taxonomy ) => jQuery( taxonomy ).data( 'item' ) ).get()
			}

			componentDidUpdate() {
				console.log(this.state.availableTerms);
			}

			makeItem( item ) {
				// Prevent duplicates in the tax order box
				if (this.currentItems.includes( this.getId( item ) ) ) {
					return;
				}

				const row = this.makeElement( item );
				const box = jQuery( '#cld-tax-items' );
				box.append( row ); // phpcs:ignore WordPressVIPMinimum.JS.HTMLExecutingFunctions.append
			}

			removeItem( item ) {
				const elementWithId = jQuery( `[data-item="${this.getId(item)}"]` );

				if ( elementWithId.length ) {
					elementWithId.remove();

					this.currentItems = this.currentItems.filter( ( taxIdentifier ) => {
						return taxIdentifier !== this.getId(item)
					} );
				}
			}

			findOrCreateTerm( termName ) {
				termName = super.findOrCreateTerm( termName );
				termName.then( ( item ) => this.makeItem( item ) );

				return termName;
			}

			onChange( event ) {
				super.onChange( event );
				const item = this.pickItem( event );

				console.log(item)

				if ( item ) {
					if ( orderSet[ this.props.slug ].indexOf( item.id ) >= 0 ) {
						this.makeItem( item );
					} else {
						this.removeItem( item );
					}
				}
			}

			pickItem( event ) {
				if ( typeof event === 'object' ) {
					if ( event.target ) {
						for (let p in this.state.availableTerms) {
							if ( this.state.availableTerms[ p ].id === parseInt( event.target.value ) ) {
								return this.state.availableTerms[ p ];
							}
						}
					// Tags that are already registered need to be selected separately
					// as its expected that they return back with an "id" property.
					} else if ( Array.isArray( event ) ) {
						const existingTag = event[ event.length - 1 ];
						const term = this.state.availableTerms.find( ( item ) => item.name === existingTag );

						return !term && this.state.availableTerms.length === 1 ? this.state.availableTerms[0] : term
					}
				}
				else if ( typeof event === 'number' ) {
					for (let p in this.state.availableTerms) {
						if ( this.state.availableTerms[ p ].id === event ) {
							return this.state.availableTerms[ p ];
						}
					}
				}
				else {
					let text;
					// add or remove.
					if ( event.length > this.state.selectedTerms.length ) {
						// Added.
						for (let o in event) {
							if ( this.state.selectedTerms.indexOf( event[ o ] ) === -1 ) {
								text = event[ o ];
							}
						}
					}
					else {
						// removed.
						for (let o in this.state.selectedTerms) {
							if ( event.indexOf( this.state.selectedTerms[ o ] ) === -1 ) {
								text = this.state.selectedTerms[ o ];
							}
						}
					}

					for (let p in this.state.availableTerms) {
						if ( this.state.availableTerms[ p ].name === text ) {
							return this.state.availableTerms[ p ];
						}
					}
				}
			}

			getId(item) {
				return `${this.props.slug}:${item.id}`
			}

			makeElement( item ) {
				let li = jQuery( '<li/>' ),
					input = jQuery( '<input/>' ),
					icon = jQuery( '<span/>' );

				li.addClass( 'cld-tax-order-list-item' ).attr( 'data-item', this.getId(item) );
				input.addClass( 'cld-tax-order-list-item-input' ).attr( 'type', 'hidden' ).attr( 'name', 'cld_tax_order[]' ).val( this.getId(item) );
				icon.addClass( 'dashicons dashicons-menu cld-tax-order-list-item-handle' );

				li.append( icon ).append( item.name ).append( input ); // phpcs:ignore WordPressVIPMinimum.JS.HTMLExecutingFunctions.append

				return li;
			}
		}

		return ( props ) => el( CustomHandler, props );
	};

	wp.hooks.addFilter(
		'editor.PostTaxonomyType',
		'cld',
		CustomizeTaxonomySelector
	);
}
