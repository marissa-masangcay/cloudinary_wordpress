!function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=6)}([function(e,t){!function(){e.exports=this.wp.element}()},function(e,t){!function(){e.exports=this.wp.i18n}()},function(e,t){!function(){e.exports=this.wp.components}()},function(e,t,r){var n=r(5);e.exports=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?Object(arguments[t]):{},o=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),o.forEach((function(t){n(e,t,r[t])}))}return e}},function(e,t){!function(){e.exports=this.wp.data}()},function(e,t){e.exports=function(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}},function(e,t,r){"use strict";r.r(t);var n=r(3),o=r.n(n),i=r(0),c=r(1),a=r(4),l=r(2),u={_init:function(){"undefined"!=typeof CLD_VIDEO_PLAYER&&wp.hooks.addFilter("blocks.registerBlockType","Cloudinary/Media/Video",(function(e,t){return"core/video"===t&&("off"!==CLD_VIDEO_PLAYER.video_autoplay_mode&&(e.attributes.autoplay.default=!0),"on"===CLD_VIDEO_PLAYER.video_loop&&(e.attributes.loop.default=!0),"off"===CLD_VIDEO_PLAYER.video_controls&&(e.attributes.controls.default=!1)),e}))}},s=u;u._init();wp.hooks.addFilter("blocks.registerBlockType","cloudinary/addAttributes",(function(e,t){return"core/image"!==t&&"core/video"!==t||(e.attributes||(e.attributes={}),e.attributes.overwrite_transformations={type:"boolean"},e.attributes.transformations={type:"boolean"}),e}));var f=function(e){var t=e.attributes,r=t.overwrite_transformations,n=t.transformations,o=e.setAttributes;return n?Object(i.createElement)(l.PanelBody,{title:Object(c.__)("Transformations","cloudinary")},Object(i.createElement)(l.ToggleControl,{label:Object(c.__)("Overwrite Transformations","cloudinary"),checked:r,onChange:function(e){o({overwrite_transformations:e})}})):null},d=function(e){var t=e.setAttributes,r=e.media,n=wp.editor.InspectorControls;return r&&r.transformations&&t({transformations:!0}),Object(i.createElement)(n,null,Object(i.createElement)(f,e))};d=Object(a.withSelect)((function(e,t){return o()({},t,{media:t.attributes.id?e("core").getMedia(t.attributes.id):null})}))(d);wp.hooks.addFilter("editor.BlockEdit","cloudinary/filterEdit",(function(e){return function(t){var r=t.name,n="core/image"===r||"core/video"===r;return Object(i.createElement)(i.Fragment,null,n?Object(i.createElement)(d,t):null,Object(i.createElement)(e,t))}}),20);wp.hooks.addFilter("blocks.getSaveElement","cloudinary/filterSave",(function(e,t,r){if("core/image"===t.name&&r.overwrite_transformations){var n=Object(i.cloneElement)(e.props.children),o=n.props.children[0].props.className?n.props.children[0].props.className:"",c=Object(i.cloneElement)(n.props.children[0],{className:o+" cld-overwrite"}),a=Object(i.cloneElement)(n,{children:[c,!1]});return Object(i.cloneElement)(e,{children:a})}if("core/video"===t.name&&r.overwrite_transformations){var l=Object(i.cloneElement)(e.props.children[0],{className:" cld-overwrite"});return Object(i.cloneElement)(e,{children:l})}return e})),r.d(t,"cloudinaryBlocks",(function(){return p}));window.$=window.jQuery;var p={Video:s}}]);