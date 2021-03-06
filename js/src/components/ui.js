/* global */

import tippy from 'tippy.js';
import 'tippy.js/dist/tippy.css';

const UI = {
	_init() {
		const conditions = document.querySelectorAll( '[data-bind]' );
		const toggles = document.querySelectorAll( '[data-toggle]' );
		const aliases = document.querySelectorAll( '[data-for]' );
		const tooltips = document.querySelectorAll( '[data-tooltip]' );
		const self = this;
		conditions.forEach( self._bind );
		toggles.forEach( self._toggle );
		aliases.forEach( self._alias );

		tippy( tooltips, {
			theme: 'cloudinary',
			arrow: false,
			placement: 'bottom-start',
			aria: {
				content: 'auto',
				expanded: 'auto',
			},
			content: ( reference ) =>
				document.getElementById(
					reference.getAttribute( 'data-tooltip' )
				).innerHTML,
		} );
	},
	_bind( element ) {
		const condition = JSON.parse( element.dataset.condition );
		const input = document.querySelector(
			'input[data-bound="' +
				element.dataset.bind +
				'"],select[data-bound="' +
				element.dataset.bind +
				'"]'
		);
		input.addEventListener( 'change', function () {
			UI.compare( element, input, condition );
		} );
		input.addEventListener( 'input', function () {
			UI.compare( element, input, condition );
		} );
		// fire change event.
		input.dispatchEvent( new Event( 'change' ) );
	},
	_alias( element ) {
		element.addEventListener( 'click', function () {
			const aliasOf = document.getElementById( element.dataset.for );
			aliasOf.dispatchEvent( new Event( 'click' ) );
		} );
	},
	_toggle( element ) {
		element.addEventListener( 'click', function () {
			const wrap = document.querySelector(
				'[data-wrap="' + element.dataset.toggle + '"]'
			);
			const action = wrap.classList.contains( 'open' )
				? 'closed'
				: 'open';
			UI.toggle( wrap, element, action );
		} );
	},
	compare( element, input, condition ) {
		const id = input.id;
		let check = false;
		let action = 'closed';
		if ( input.type === 'checkbox' || input.type === 'radio' ) {
			check = input.checked === condition[ id ];
		} else {
			check = input.value === condition[ id ];
		}

		if ( true === check ) {
			action = 'open';
		}
		UI.toggle( element, input, action );
	},
	toggle( wrap, element, action ) {
		const inputs = wrap.getElementsByClassName( 'cld-ui-input' );
		if ( 'closed' === action ) {
			wrap.classList.remove( 'open' );
			wrap.classList.add( 'closed' );
			if ( element.classList.contains( 'dashicons' ) ) {
				element.classList.remove( 'dashicons-arrow-up-alt2' );
				element.classList.add( 'dashicons-arrow-down-alt2' );
			}
			[ ...inputs ].forEach( function ( input ) {
				input.dataset.disabled = true;
			} );
		} else {
			wrap.classList.remove( 'closed' );
			wrap.classList.add( 'open' );
			if ( element.classList.contains( 'dashicons' ) ) {
				element.classList.remove( 'dashicons-arrow-down-alt2' );
				element.classList.add( 'dashicons-arrow-up-alt2' );
			}
			[ ...inputs ].forEach( function ( input ) {
				input.dataset.disabled = false;
			} );
		}
	},
};
// Init.
window.addEventListener( 'load', UI._init() );

export default UI;
