/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/src/gallery-block/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./css/src/gallery.scss":
/*!******************************!*\
  !*** ./css/src/gallery.scss ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/@wordpress/scripts/node_modules/mini-css-extract-plugin/dist/loader.js):\nModuleBuildError: Module build failed: Error: ENOENT: no such file or directory, open '/Users/dugi/Code/xwp/cloudinary-plugin/node_modules/@wordpress/scripts/node_modules/css-loader/dist/runtime/api.js'\n    at /Users/dugi/Code/xwp/cloudinary-plugin/node_modules/webpack/lib/NormalModule.js:316:20\n    at /Users/dugi/Code/xwp/cloudinary-plugin/node_modules/loader-runner/lib/LoaderRunner.js:367:11\n    at Array.<anonymous> (/Users/dugi/Code/xwp/cloudinary-plugin/node_modules/loader-runner/lib/LoaderRunner.js:203:19)\n    at Storage.finished (/Users/dugi/Code/xwp/cloudinary-plugin/node_modules/enhanced-resolve/lib/CachedInputFileSystem.js:55:16)\n    at ReadFileContext.<anonymous> (/Users/dugi/Code/xwp/cloudinary-plugin/node_modules/enhanced-resolve/lib/CachedInputFileSystem.js:91:9)\n    at ReadFileContext.callback (/Users/dugi/Code/xwp/cloudinary-plugin/node_modules/graceful-fs/graceful-fs.js:123:16)\n    at FSReqCallback.readFileAfterOpen [as oncomplete] (fs.js:264:13)");

/***/ }),

/***/ "./js/src/gallery-block/defaults.json":
/*!********************************************!*\
  !*** ./js/src/gallery-block/defaults.json ***!
  \********************************************/
/*! exports provided: displayProps, transformation, bgColor, thumbnailProps, navigationButtonProps, zoomProps, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"displayProps\":{\"spacing\":15},\"transformation\":{\"crop\":\"fill\"},\"bgColor\":\"transparent\",\"thumbnailProps\":{\"mediaSymbolSize\":42,\"spacing\":20,\"navigationFloat\":true,\"navigationSize\":40,\"navigationColor\":\"#ffffff\"},\"navigationButtonProps\":{\"shape\":\"rectangle\",\"iconColor\":\"#ffffff\",\"color\":\"#000\",\"size\":52,\"navigationPosition\":\"offset\",\"navigationOffset\":12},\"zoomProps\":{\"showLens\":true}}");

/***/ }),

/***/ "./js/src/gallery-block/edit.js":
/*!**************************************!*\
  !*** ./js/src/gallery-block/edit.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var dot_object__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! dot-object */ "./node_modules/dot-object/index.js");
/* harmony import */ var dot_object__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(dot_object__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash/cloneDeep */ "./node_modules/lodash/cloneDeep.js");
/* harmony import */ var lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_components_build_style_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/components/build-style/style.css */ "@wordpress/components/build-style/style.css");
/* harmony import */ var _wordpress_components_build_style_style_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components_build_style_style_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _css_src_gallery_scss__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../css/src/gallery.scss */ "./css/src/gallery.scss");
/* harmony import */ var _css_src_gallery_scss__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_css_src_gallery_scss__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _defaults_json__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./defaults.json */ "./js/src/gallery-block/defaults.json");
var _defaults_json__WEBPACK_IMPORTED_MODULE_11___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./defaults.json */ "./js/src/gallery-block/defaults.json", 1);
/* harmony import */ var _radio__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./radio */ "./js/src/gallery-block/radio.js");
/* harmony import */ var _options__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./options */ "./js/src/gallery-block/options.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./utils */ "./js/src/gallery-block/utils.js");





function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/* global cloudinaryGalleryApi */

/**
 * External dependencies
 */



/**
 * WordPress dependencies
 */





/**
 * Internal dependencies
 */






var dot = new dot_object__WEBPACK_IMPORTED_MODULE_4___default.a('_');

var ColorPaletteLabel = function ColorPaletteLabel(_ref) {
  var children = _ref.children,
      value = _ref.value;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "colorpalette-color-label"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", null, children), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", {
    className: "component-color-indicator",
    "aria-label": "Color: ".concat(value),
    style: {
      background: value
    }
  }));
};

var Edit = function Edit(_ref2) {
  var setAttributes = _ref2.setAttributes,
      attributes = _ref2.attributes,
      className = _ref2.className;

  var onSelect = function onSelect(images) {
    fetch(cloudinaryGalleryApi.endpoint, {
      method: 'POST',
      body: JSON.stringify({
        images: images
      }),
      headers: {
        'X-WP-Nonce': cloudinaryGalleryApi.nonce
      }
    }).then(function (res) {
      return res.json();
    }).then(function (selectedImages) {
      return setAttributes({
        selectedImages: selectedImages
      });
    });
  };

  Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    if (attributes.selectedImages.length) {
      var attributesClone = lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_5___default()(attributes);

      var _dot$object = dot.object(attributesClone, {}),
          selectedImages = _dot$object.selectedImages,
          config = _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default()(_dot$object, ["selectedImages"]);

      if (config.displayProps.mode !== 'classic') {
        delete config.transition;
      } else {
        delete config.displayProps.columns;
      }

      if (!attributes.container) {
        setAttributes({
          container: "".concat(className).concat(Object(_utils__WEBPACK_IMPORTED_MODULE_14__["generateId"])(15))
        });
      }

      var gallery = cloudinary.galleryWidget(_objectSpread(_objectSpread(_objectSpread({
        cloudName: CLDN.mloptions.cloud_name,
        mediaAssets: selectedImages
      }, _defaults_json__WEBPACK_IMPORTED_MODULE_11__), config), {}, {
        container: '.' + attributes.container
      }));
      gallery.render();
      return function () {
        return gallery.destroy();
      };
    }
  });
  var hasImages = !!attributes.selectedImages.length;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: attributes.container || className
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_8__["MediaPlaceholder"], {
    labels: {
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('Cloudinary Gallery', 'cloudinary')
    },
    icon: "format-gallery",
    allowedTypes: _options__WEBPACK_IMPORTED_MODULE_13__["ALLOWED_MEDIA_TYPES"],
    multiple: true,
    isAppender: hasImages,
    onSelect: onSelect
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_8__["InspectorControls"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_9__["PanelBody"], {
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('Layout', 'cloudinary')
  }, _options__WEBPACK_IMPORTED_MODULE_13__["LAYOUT_OPTIONS"].map(function (item) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_radio__WEBPACK_IMPORTED_MODULE_12__["default"], {
      key: item.value.type + '-layout',
      value: item.value,
      onChange: function onChange(value) {
        setAttributes({
          displayProps_mode: value.type,
          displayProps_columns: value.columns
        });
      },
      icon: item.icon,
      current: {
        type: attributes.displayProps_mode,
        columns: attributes.displayProps_columns
      }
    }, item.label);
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_9__["PanelBody"], {
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('Color Palette', 'cloudinary')
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(ColorPaletteLabel, {
    value: attributes.themeProps_primary
  }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('Primary', 'cloudinary')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_8__["ColorPalette"], {
    value: attributes.themeProps_primary,
    onChange: function onChange(value) {
      return setAttributes({
        themeProps_primary: value
      });
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(ColorPaletteLabel, {
    value: attributes.themeProps_onPrimary
  }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('On Primary', 'cloudinary')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_8__["ColorPalette"], {
    value: attributes.themeProps_onPrimary,
    onChange: function onChange(value) {
      return setAttributes({
        themeProps_onPrimary: value
      });
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(ColorPaletteLabel, {
    value: attributes.themeProps_active
  }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('Active', 'cloudinary')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_8__["ColorPalette"], {
    value: attributes.themeProps_active,
    onChange: function onChange(value) {
      return setAttributes({
        themeProps_active: value
      });
    }
  })), attributes.displayProps_mode === 'classic' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_9__["PanelBody"], {
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('Fade Transition', 'cloudinary')
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_9__["SelectControl"], {
    value: attributes.transition,
    options: _options__WEBPACK_IMPORTED_MODULE_13__["FADE_TRANSITIONS"],
    onChange: function onChange(value) {
      return setAttributes({
        transition: value
      });
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_9__["PanelBody"], {
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('Main Viewer Parameters', 'cloudinary')
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_9__["SelectControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('Aspect Ratio', 'cloudinary'),
    value: attributes.aspectRatio,
    options: _options__WEBPACK_IMPORTED_MODULE_13__["ASPECT_RATIOS"],
    onChange: function onChange(value) {
      return setAttributes({
        aspectRatio: value
      });
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("p", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('Navigation', 'cloudinary')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_9__["ButtonGroup"], null, _options__WEBPACK_IMPORTED_MODULE_13__["NAVIGATION"].map(function (navType) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_9__["Button"], {
      key: navType.value + '-navigation',
      isDefault: true,
      isPressed: navType.value === attributes.navigation,
      onClick: function onClick() {
        return setAttributes({
          navigation: navType.value
        });
      }
    }, navType.label);
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    style: {
      marginTop: '30px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_9__["ToggleControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('Show Zoom', 'cloudinary'),
    checked: attributes.zoom,
    onChange: function onChange() {
      return setAttributes({
        zoom: !attributes.zoom
      });
    }
  }), attributes.zoom && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("p", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('Zoom Type', 'cloudinary')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_9__["ButtonGroup"], null, _options__WEBPACK_IMPORTED_MODULE_13__["ZOOM_TYPE"].map(function (item) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_9__["Button"], {
      key: item.value + '-zoom-type',
      isDefault: true,
      isPressed: item.value === attributes.zoomProps_type,
      onClick: function onClick() {
        return setAttributes({
          zoomProps_type: item.value
        });
      }
    }, item.label);
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_9__["SelectControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('Zoom Viewer Position', 'cloudinary'),
    value: attributes.zoomProps_viewerPosition,
    options: _options__WEBPACK_IMPORTED_MODULE_13__["ZOOM_VIEWER_POSITION"],
    onChange: function onChange(value) {
      return setAttributes({
        zoomProps_viewerPosition: value
      });
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("p", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('Zoom Trigger', 'cloudinary')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_9__["ButtonGroup"], null, _options__WEBPACK_IMPORTED_MODULE_13__["ZOOM_TRIGGER"].map(function (item) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_9__["Button"], {
      key: item.value + '-zoom-trigger',
      isDefault: true,
      isPressed: item.value === attributes.zoomProps_trigger,
      onClick: function onClick() {
        return setAttributes({
          zoomProps_trigger: item.value
        });
      }
    }, item.label);
  })))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_9__["PanelBody"], {
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('Carousel Parameters', 'cloudinary')
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("p", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('Carousel Location', 'cloudinary')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_9__["ButtonGroup"], null, _options__WEBPACK_IMPORTED_MODULE_13__["CAROUSEL_LOCATION"].map(function (item) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_9__["Button"], {
      key: item.value + '-carousel-location',
      isDefault: true,
      isPressed: item.value === attributes.carouselLocation,
      onClick: function onClick() {
        return setAttributes({
          carouselLocation: item.value
        });
      }
    }, item.label);
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_9__["RangeControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('Carousel Offset', 'cloudinary'),
    value: attributes.carouselOffset,
    onChange: function onChange(offset) {
      return setAttributes({
        carouselOffset: offset
      });
    },
    min: 0,
    max: 100
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("p", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('Carousel Style', 'cloudinary')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_9__["ButtonGroup"], null, _options__WEBPACK_IMPORTED_MODULE_13__["CAROUSEL_STYLE"].map(function (item) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_9__["Button"], {
      key: item.value + '-carousel-style',
      isDefault: true,
      isPressed: item.value === attributes.carouselStyle,
      onClick: function onClick() {
        return setAttributes({
          carouselStyle: item.value
        });
      }
    }, item.label);
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_9__["RangeControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('Width', 'cloudinary'),
    value: attributes.thumbnailProps_width,
    onChange: function onChange(newWidth) {
      return setAttributes({
        thumbnailProps_width: newWidth
      });
    },
    min: 5,
    max: 300
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_9__["RangeControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('Height', 'cloudinary'),
    value: attributes.thumbnailProps_height,
    onChange: function onChange(newHeight) {
      return setAttributes({
        thumbnailProps_height: newHeight
      });
    },
    min: 5,
    max: 300
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("p", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('Navigation Button Shape', 'cloudinary')), _options__WEBPACK_IMPORTED_MODULE_13__["NAVIGATION_BUTTON_SHAPE"].map(function (item) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_radio__WEBPACK_IMPORTED_MODULE_12__["default"], {
      key: item.value + '-navigation-button-shape',
      value: item.value,
      onChange: function onChange(value) {
        return setAttributes({
          thumbnailProps_navigationShape: value
        });
      },
      icon: item.icon,
      current: attributes.thumbnailProps_navigationShape
    }, item.label);
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("p", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('Selected Style', 'cloudinary')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_9__["ButtonGroup"], null, _options__WEBPACK_IMPORTED_MODULE_13__["SELECTED_STYLE"].map(function (item) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_9__["Button"], {
      key: item.value + '-selected-style',
      isDefault: true,
      isPressed: item.value === attributes.thumbnailProps_selectedStyle,
      onClick: function onClick() {
        return setAttributes({
          thumbnailProps_selectedStyle: item.value
        });
      }
    }, item.label);
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_9__["SelectControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('Selected Border Position', 'cloudinary'),
    value: attributes.thumbnailProps_selectedBorderPosition,
    options: _options__WEBPACK_IMPORTED_MODULE_13__["SELECTED_BORDER_POSITION"],
    onChange: function onChange(value) {
      return setAttributes({
        thumbnailProps_selectedBorderPosition: value
      });
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_9__["RangeControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('Selected Border Width', 'cloudinary'),
    value: attributes.thumbnailProps_selectedBorderWidth,
    onChange: function onChange(newBw) {
      return setAttributes({
        thumbnailProps_selectedBorderWidth: newBw
      });
    },
    min: 0,
    max: 10
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("p", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_7__["__"])('Media Shape Icon', 'cloudinary')), _options__WEBPACK_IMPORTED_MODULE_13__["MEDIA_ICON_SHAPE"].map(function (item) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_radio__WEBPACK_IMPORTED_MODULE_12__["default"], {
      key: item.value + '-media',
      value: item.value,
      onChange: function onChange(value) {
        return setAttributes({
          thumbnailProps_mediaSymbolShape: value
        });
      },
      icon: item.icon,
      current: attributes.thumbnailProps_mediaSymbolShape
    }, item.label);
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (Edit);

/***/ }),

/***/ "./js/src/gallery-block/icons.js":
/*!***************************************!*\
  !*** ./js/src/gallery-block/icons.js ***!
  \***************************************/
/*! exports provided: LayoutGridOneColumn, LayoutGridTwoColumn, LayoutGridThreeColumn, LayoutClassic, ShapeRound, ShapeSquare, ShapeRadius, ShapeRectangle, ShapeNone */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutGridOneColumn", function() { return LayoutGridOneColumn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutGridTwoColumn", function() { return LayoutGridTwoColumn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutGridThreeColumn", function() { return LayoutGridThreeColumn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutClassic", function() { return LayoutClassic; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShapeRound", function() { return ShapeRound; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShapeSquare", function() { return ShapeSquare; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShapeRadius", function() { return ShapeRadius; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShapeRectangle", function() { return ShapeRectangle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShapeNone", function() { return ShapeNone; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


var LayoutGridOneColumn = function LayoutGridOneColumn() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
    width: "17px",
    height: "20px",
    viewBox: "0 0 17 20",
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("title", null, "layout-modern"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("desc", null, "Created with Sketch."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("g", {
    id: "Desktop-0.4",
    stroke: "none",
    strokeWidth: "1",
    fill: "none",
    fillRule: "evenodd"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("g", {
    id: "widgets/layout-modern",
    transform: "translate(-2.000000, -3.000000)",
    fill: "#000000"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    d: "M2,10 L5,10 L5,7 L2,7 L2,10 Z M2,14 L5,14 L5,11 L2,11 L2,14 Z M2,6 L5,6 L5,3 L2,3 L2,6 Z M6,3 L6,17 L19,17 L19,3 L6,3 Z M8,5 L8,15 L17,15 L17,5 L8,5 Z M6,18 L6,23 L19,23 L19,18 L6,18 Z M8,20 L8,23 L17,23 L17,20 L8,20 Z",
    id: "shape"
  }))));
};
var LayoutGridTwoColumn = function LayoutGridTwoColumn() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
    width: "18px",
    height: "17px",
    viewBox: "0 0 18 17",
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("title", null, "layout-grid-2-column"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("desc", null, "Created with Sketch."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("g", {
    id: "Desktop-0.4",
    stroke: "none",
    strokeWidth: "1",
    fill: "none",
    fillRule: "evenodd"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("g", {
    id: "widgets/layout-gird-2-col",
    transform: "translate(-3.000000, -3.000000)",
    fill: "#000000"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    d: "M11,12 L11,20 L3,20 L3,12 L11,12 Z M21,12 L21,20 L13,20 L13,12 L21,12 Z M9,14 L5,14 L5,18 L9,18 L9,14 Z M19,14 L15,14 L15,18 L19,18 L19,14 Z M11,3 L11,11 L3,11 L3,3 L11,3 Z M21,3 L21,11 L13,11 L13,3 L21,3 Z M9,5 L5,5 L5,9 L9,9 L9,5 Z M19,5 L15,5 L15,9 L19,9 L19,5 Z",
    id: "Shape"
  }))));
};
var LayoutGridThreeColumn = function LayoutGridThreeColumn() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
    width: "20px",
    height: "13px",
    viewBox: "0 0 20 13",
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("title", null, "layout-grid-3-column"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("desc", null, "Created with Sketch."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("g", {
    id: "Desktop-0.4",
    stroke: "none",
    strokeWidth: "1",
    fill: "none",
    fillRule: "evenodd"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("g", {
    id: "widgets/layout-gird-3-col",
    transform: "translate(-2.000000, -5.000000)",
    fill: "#000000"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    d: "M8,12 L8,18 L2,18 L2,12 L8,12 Z M15,12 L15,18 L9,18 L9,12 L15,12 Z M22,12 L22,18 L16,18 L16,12 L22,12 Z M6,14 L4,14 L4,16 L6,16 L6,14 Z M13,14 L11,14 L11,16 L13,16 L13,14 Z M20,14 L18,14 L18,16 L20,16 L20,14 Z M8,5 L8,11 L2,11 L2,5 L8,5 Z M15,5 L15,11 L9,11 L9,5 L15,5 Z M22,5 L22,11 L16,11 L16,5 L22,5 Z M6,7 L4,7 L4,9 L6,9 L6,7 Z M13,7 L11,7 L11,9 L13,9 L13,7 Z M20,7 L18,7 L18,9 L20,9 L20,7 Z",
    id: "Combined-Shape"
  }))));
};
var LayoutClassic = function LayoutClassic() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
    width: "17px",
    height: "14px",
    viewBox: "0 0 17 14",
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("title", null, "layout-classic"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("desc", null, "Created with Sketch."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("g", {
    id: "Desktop-0.4",
    stroke: "none",
    strokeWidth: "1",
    fill: "none",
    fillRule: "evenodd"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("g", {
    id: "widgets/layout-classic",
    transform: "translate(-3.000000, -5.000000)",
    fill: "#000000"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    d: "M3,12 L6,12 L6,9 L3,9 L3,12 Z M3,16 L6,16 L6,13 L3,13 L3,16 Z M3,8 L6,8 L6,5 L3,5 L3,8 Z M7,5 L7,19 L20,19 L20,5 L7,5 Z M9,7 L9,17 L18,17 L18,7 L9,7 Z",
    id: "shape"
  }))));
};
var ShapeRound = function ShapeRound() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
    width: "18px",
    height: "18px",
    viewBox: "0 0 18 18",
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("title", null, "shape-round"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("desc", null, "Created with Sketch."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("g", {
    id: "Desktop-0.4",
    stroke: "none",
    strokeWidth: "1",
    fill: "none",
    fillRule: "evenodd"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("g", {
    id: "widgets/shape-round",
    transform: "translate(-3.000000, -3.000000)",
    fill: "#000000"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    d: "M12,3 C16.9705627,3 21,7.02943725 21,12 C21,16.9705627 16.9705627,21 12,21 C7.02943725,21 3,16.9705627 3,12 C3,7.02943725 7.02943725,3 12,3 Z M12,5 C8.13400675,5 5,8.13400675 5,12 C5,15.8659932 8.13400675,19 12,19 C15.8659932,19 19,15.8659932 19,12 C19,8.13400675 15.8659932,5 12,5 Z",
    id: "Combined-Shape"
  }))));
};
var ShapeSquare = function ShapeSquare() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
    width: "18px",
    height: "18px",
    viewBox: "0 0 18 18",
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("title", null, "ratio-square"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("desc", null, "Created with Sketch."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("g", {
    id: "Desktop-0.4",
    stroke: "none",
    strokeWidth: "1",
    fill: "none",
    fillRule: "evenodd"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("g", {
    id: "widgets/shape-square",
    transform: "translate(-3.000000, -3.000000)",
    fill: "#000000"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    d: "M3,3 L3,21 L21,21 L21,3 L3,3 Z M5,5 L5,19 L19,19 L19,5 L5,5 Z",
    id: "shape"
  }))));
};
var ShapeRadius = function ShapeRadius() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
    width: "18px",
    height: "18px",
    viewBox: "0 0 18 18",
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("title", null, "shape-radius"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("desc", null, "Created with Sketch."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("g", {
    id: "Desktop-0.4",
    stroke: "none",
    strokeWidth: "1",
    fill: "none",
    fillRule: "evenodd"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("g", {
    id: "widgets/shape-radius",
    transform: "translate(-3.000000, -3.000000)",
    fill: "#000000"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    d: "M17,3 C19.209139,3 21,4.790861 21,7 L21,17 C21,19.209139 19.209139,21 17,21 L7,21 C4.790861,21 3,19.209139 3,17 L3,7 C3,4.790861 4.790861,3 7,3 L17,3 Z M17,5 L7,5 C5.9456382,5 5.08183488,5.81587779 5.00548574,6.85073766 L5,7 L5,17 C5,18.0543618 5.81587779,18.9181651 6.85073766,18.9945143 L7,19 L17,19 C18.0543618,19 18.9181651,18.1841222 18.9945143,17.1492623 L19,17 L19,7 C19,5.9456382 18.1841222,5.08183488 17.1492623,5.00548574 L17,5 Z",
    id: "Rectangle"
  }))));
};
var ShapeRectangle = function ShapeRectangle() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
    width: "14px",
    height: "20px",
    viewBox: "0 0 14 20",
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("title", null, "ratio-9-16"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("desc", null, "Created with Sketch."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("g", {
    id: "Desktop-0.4",
    stroke: "none",
    strokeWidth: "1",
    fill: "none",
    fillRule: "evenodd"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("g", {
    id: "ratio/9-16",
    transform: "translate(-5.000000, -2.000000)",
    fill: "#000000"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    d: "M22,5.5 L22,18.5 L2,18.5 L2,5.5 L22,5.5 Z M20,7.5 L4,7.5 L4,16.5 L20,16.5 L20,7.5 Z",
    id: "Combined-Shape",
    transform: "translate(12.000000, 12.000000) rotate(-90.000000) translate(-12.000000, -12.000000) "
  }))));
};
var ShapeNone = function ShapeNone() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
    width: "18px",
    height: "18px",
    viewBox: "0 0 18 18",
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("title", null, "shape-none"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("desc", null, "Created with Sketch."), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("g", {
    id: "Desktop-0.4",
    stroke: "none",
    strokeWidth: "1",
    fill: "none",
    fillRule: "evenodd"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("g", {
    id: "widgets/shape-none",
    transform: "translate(-3.000000, -3.000000)",
    fill: "#000000"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
    d: "M5,19 L5,21 L3,21 L3,19 L5,19 Z M21,19 L21,21 L19,21 L19,19 L21,19 Z M13,19 L13,21 L11,21 L11,19 L13,19 Z M9,19 L9,21 L7,21 L7,19 L9,19 Z M17,19 L17,21 L15,21 L15,19 L17,19 Z M21,15 L21,17 L19,17 L19,15 L21,15 Z M21,11 L21,13 L19,13 L19,11 L21,11 Z M5,11 L5,13 L3,13 L3,11 L5,11 Z M21,7 L21,9 L19,9 L19,7 L21,7 Z M5,7 L5,9 L3,9 L3,7 L5,7 Z M13,3 L13,5 L11,5 L11,3 L13,3 Z M9,3 L9,5 L7,5 L7,3 L9,3 Z M17,3 L17,5 L15,5 L15,3 L17,3 Z M21,3 L21,5 L19,5 L19,3 L21,3 Z M5,3 L5,5 L3,5 L3,3 L5,3 Z M3,15 L5,15 L5,17 L3,17 L3,15 Z",
    id: "Shape"
  }))));
};

/***/ }),

/***/ "./js/src/gallery-block/index.js":
/*!***************************************!*\
  !*** ./js/src/gallery-block/index.js ***!
  \***************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit */ "./js/src/gallery-block/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./save */ "./js/src/gallery-block/save.js");
/* global cloudinaryGallery */

/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */



cloudinaryGallery = JSON.parse(cloudinaryGallery.config);
var _cloudinaryGallery = cloudinaryGallery,
    _cloudinaryGallery$as = _cloudinaryGallery.aspectRatio,
    aspectRatio = _cloudinaryGallery$as === void 0 ? '1:1' : _cloudinaryGallery$as,
    _cloudinaryGallery$ca = _cloudinaryGallery.carouselLocation,
    carouselLocation = _cloudinaryGallery$ca === void 0 ? 'left' : _cloudinaryGallery$ca,
    _cloudinaryGallery$ca2 = _cloudinaryGallery.carouselOffset,
    carouselOffset = _cloudinaryGallery$ca2 === void 0 ? 0 : _cloudinaryGallery$ca2,
    _cloudinaryGallery$ca3 = _cloudinaryGallery.carouselThumbnailHeight,
    carouselThumbnailHeight = _cloudinaryGallery$ca3 === void 0 ? 1 : _cloudinaryGallery$ca3,
    _cloudinaryGallery$ca4 = _cloudinaryGallery.carouselThumbnailSelectedStyle,
    carouselThumbnailSelectedStyle = _cloudinaryGallery$ca4 === void 0 ? 'all' : _cloudinaryGallery$ca4,
    _cloudinaryGallery$ca5 = _cloudinaryGallery.carouselThumbnailWidth,
    carouselThumbnailWidth = _cloudinaryGallery$ca5 === void 0 ? 1 : _cloudinaryGallery$ca5,
    _cloudinaryGallery$ca6 = _cloudinaryGallery.carouselButtonShape,
    carouselButtonShape = _cloudinaryGallery$ca6 === void 0 ? 'round' : _cloudinaryGallery$ca6,
    zoomTrigger = _cloudinaryGallery.zoomTrigger,
    _cloudinaryGallery$zo = _cloudinaryGallery.zoomType,
    zoomType = _cloudinaryGallery$zo === void 0 ? 'inline' : _cloudinaryGallery$zo,
    _cloudinaryGallery$zo2 = _cloudinaryGallery.zoomViewerPosition,
    zoomViewerPosition = _cloudinaryGallery$zo2 === void 0 ? 'top' : _cloudinaryGallery$zo2,
    _cloudinaryGallery$ac = _cloudinaryGallery.activeColor,
    activeColor = _cloudinaryGallery$ac === void 0 ? '#FFF' : _cloudinaryGallery$ac,
    _cloudinaryGallery$on = _cloudinaryGallery.onPrimaryColor,
    onPrimaryColor = _cloudinaryGallery$on === void 0 ? '#FFF' : _cloudinaryGallery$on,
    _cloudinaryGallery$pr = _cloudinaryGallery.primaryColor,
    primaryColor = _cloudinaryGallery$pr === void 0 ? '#FFF' : _cloudinaryGallery$pr,
    _cloudinaryGallery$tr = _cloudinaryGallery.transition,
    transition = _cloudinaryGallery$tr === void 0 ? 'fade' : _cloudinaryGallery$tr,
    _cloudinaryGallery$ca7 = _cloudinaryGallery.carouselStyle,
    carouselStyle = _cloudinaryGallery$ca7 === void 0 ? 'thumbnails' : _cloudinaryGallery$ca7;
Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__["registerBlockType"])('cloudinary/gallery', {
  title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Cloudinary Gallery', 'cloudinary'),
  description: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Add a gallery powered by the Cloudinary Gallery Widget to your post.', 'cloudinary'),
  category: 'widgets',
  icon: 'format-gallery',
  attributes: {
    displayProps_mode: {
      type: 'string',
      "default": 'classic'
    },
    displayProps_columns: {
      type: 'number',
      "default": 1
    },
    themeProps_primary: {
      type: 'string',
      "default": primaryColor
    },
    themeProps_onPrimary: {
      type: 'string',
      "default": onPrimaryColor
    },
    themeProps_active: {
      type: 'string',
      "default": activeColor
    },
    transition: {
      type: 'string',
      "default": transition
    },
    aspectRatio: {
      type: 'string',
      "default": aspectRatio
    },
    navigation: {
      type: 'string',
      "default": 'always'
    },
    zoom: {
      type: 'boolean',
      "default": zoomTrigger && zoomTrigger !== 'none'
    },
    zoomProps_type: {
      type: 'string',
      "default": zoomType
    },
    zoomProps_viewerPosition: {
      type: 'string',
      "default": zoomViewerPosition
    },
    zoomProps_trigger: {
      type: 'string',
      "default": zoomTrigger !== 'none' ? zoomTrigger : 'click'
    },
    carouselLocation: {
      type: 'string',
      "default": carouselLocation
    },
    carouselOffset: {
      type: 'number',
      "default": carouselOffset
    },
    carouselStyle: {
      type: 'string',
      "default": carouselStyle
    },
    thumbnailProps_width: {
      type: 'number',
      "default": carouselThumbnailWidth
    },
    thumbnailProps_height: {
      type: 'number',
      "default": carouselThumbnailHeight
    },
    thumbnailProps_navigationShape: {
      type: 'string',
      "default": carouselButtonShape
    },
    thumbnailProps_selectedStyle: {
      type: 'string',
      "default": carouselThumbnailSelectedStyle
    },
    thumbnailProps_selectedBorderPosition: {
      type: 'string',
      "default": 'all'
    },
    thumbnailProps_selectedBorderWidth: {
      type: 'number',
      "default": 4
    },
    thumbnailProps_mediaSymbolShape: {
      type: 'string',
      "default": 'round'
    },
    selectedImages: {
      type: 'array',
      "default": []
    },
    container: {
      type: 'string'
    }
  },
  edit: _edit__WEBPACK_IMPORTED_MODULE_2__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_3__["default"]
});

/***/ }),

/***/ "./js/src/gallery-block/options.js":
/*!*****************************************!*\
  !*** ./js/src/gallery-block/options.js ***!
  \*****************************************/
/*! exports provided: LAYOUT_OPTIONS, ALLOWED_MEDIA_TYPES, COLORS, ASPECT_RATIOS, FADE_TRANSITIONS, NAVIGATION, ZOOM_TYPE, ZOOM_VIEWER_POSITION, ZOOM_TRIGGER, CAROUSEL_LOCATION, CAROUSEL_STYLE, NAVIGATION_BUTTON_SHAPE, SELECTED_STYLE, SELECTED_BORDER_POSITION, MEDIA_ICON_SHAPE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LAYOUT_OPTIONS", function() { return LAYOUT_OPTIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ALLOWED_MEDIA_TYPES", function() { return ALLOWED_MEDIA_TYPES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COLORS", function() { return COLORS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ASPECT_RATIOS", function() { return ASPECT_RATIOS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FADE_TRANSITIONS", function() { return FADE_TRANSITIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NAVIGATION", function() { return NAVIGATION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZOOM_TYPE", function() { return ZOOM_TYPE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZOOM_VIEWER_POSITION", function() { return ZOOM_VIEWER_POSITION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZOOM_TRIGGER", function() { return ZOOM_TRIGGER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CAROUSEL_LOCATION", function() { return CAROUSEL_LOCATION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CAROUSEL_STYLE", function() { return CAROUSEL_STYLE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NAVIGATION_BUTTON_SHAPE", function() { return NAVIGATION_BUTTON_SHAPE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SELECTED_STYLE", function() { return SELECTED_STYLE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SELECTED_BORDER_POSITION", function() { return SELECTED_BORDER_POSITION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MEDIA_ICON_SHAPE", function() { return MEDIA_ICON_SHAPE; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./icons */ "./js/src/gallery-block/icons.js");



/**
 * WordPress dependencies
 */

/**
 * Internal dependencies
 */


var LAYOUT_OPTIONS = [{
  value: {
    type: 'expanded',
    columns: 1
  },
  icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_icons__WEBPACK_IMPORTED_MODULE_3__["LayoutGridOneColumn"], null),
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Expanded - 1 Column', 'cloudinary')
}, {
  value: {
    type: 'expanded',
    columns: 2
  },
  icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_icons__WEBPACK_IMPORTED_MODULE_3__["LayoutGridTwoColumn"], null),
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Expanded - 2 Column', 'cloudinary')
}, {
  value: {
    type: 'expanded',
    columns: 3
  },
  icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_icons__WEBPACK_IMPORTED_MODULE_3__["LayoutGridThreeColumn"], null),
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Expanded - 3 Column', 'cloudinary')
}, {
  value: {
    type: 'classic',
    columns: 1
  },
  icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_icons__WEBPACK_IMPORTED_MODULE_3__["LayoutClassic"], null),
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Classic', 'cloudinary')
}];
var ALLOWED_MEDIA_TYPES = ['image'];
var COLORS = [{
  value: 'red',
  color: '#f00'
}, {
  value: 'white',
  color: '#fff'
}, {
  value: 'blue',
  color: '#00f'
}];
var ASPECT_RATIOS = [{
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('1:1', 'cloudinary'),
  value: '1:1'
}, {
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('3:4', 'cloudinary'),
  value: '3:4'
}, {
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('4:3', 'cloudinary'),
  value: '4:3'
}, {
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('4:6', 'cloudinary'),
  value: '4:6'
}, {
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('6:4', 'cloudinary'),
  value: '6:4'
}, {
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('5:7', 'cloudinary'),
  value: '5:7'
}, {
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('7:5', 'cloudinary'),
  value: '7:5'
}, {
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('8:5', 'cloudinary'),
  value: '8:5'
}, {
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('5:8', 'cloudinary'),
  value: '5:8'
}, {
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('9:16', 'cloudinary'),
  value: '9:16'
}, {
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('16:9', 'cloudinary'),
  value: '16:9'
}];
var FADE_TRANSITIONS = [{
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('None', 'cloudinary'),
  value: 'none'
}, {
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Fade', 'cloudinary'),
  value: 'fade'
}, {
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Slide', 'cloudinary'),
  value: 'slide'
}];
var NAVIGATION = [{
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Always', 'cloudinary'),
  value: 'always'
}, {
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('None', 'cloudinary'),
  value: 'none'
}, {
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('MouseOver', 'cloudinary'),
  value: 'mouseover'
}];
var ZOOM_TYPE = [{
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Inline', 'cloudinary'),
  value: 'inline'
}, {
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Flyout', 'cloudinary'),
  value: 'flyout'
}, {
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Popup', 'cloudinary'),
  value: 'popup'
}];
var ZOOM_VIEWER_POSITION = [{
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Top', 'cloudinary'),
  value: 'top'
}, {
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Bottom', 'cloudinary'),
  value: 'bottom'
}, {
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Left', 'cloudinary'),
  value: 'left'
}, {
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Right', 'cloudinary'),
  value: 'right'
}];
var ZOOM_TRIGGER = [{
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Click', 'cloudinary'),
  value: 'click'
}, {
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Hover', 'cloudinary'),
  value: 'hover'
}];
var CAROUSEL_LOCATION = [{
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Left', 'cloudinary'),
  value: 'left'
}, {
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Right', 'cloudinary'),
  value: 'right'
}, {
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Top', 'cloudinary'),
  value: 'top'
}];
var CAROUSEL_STYLE = [{
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Thumbnails', 'cloudinary'),
  value: 'thumbnails'
}, {
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Indicators', 'cloudinary'),
  value: 'indicators'
}, {
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('None', 'cloudinary'),
  value: 'none'
}];
var NAVIGATION_BUTTON_SHAPE = [{
  value: 'round',
  icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_icons__WEBPACK_IMPORTED_MODULE_3__["ShapeRound"], null),
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Round', 'cloudinary')
}, {
  value: 'radius',
  icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_icons__WEBPACK_IMPORTED_MODULE_3__["ShapeRadius"], null),
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Radius', 'cloudinary')
}, {
  value: 'none',
  icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_icons__WEBPACK_IMPORTED_MODULE_3__["ShapeNone"], null),
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('None', 'cloudinary')
}, {
  value: 'square',
  icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_icons__WEBPACK_IMPORTED_MODULE_3__["ShapeSquare"], null),
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Square', 'cloudinary')
}, {
  value: 'rectangle',
  icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_icons__WEBPACK_IMPORTED_MODULE_3__["ShapeRectangle"], null),
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Rectangle', 'cloudinary')
}];
var SELECTED_STYLE = [{
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('All', 'cloudinary'),
  value: 'all'
}, {
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Border', 'cloudinary'),
  value: 'border'
}, {
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Gradient', 'cloudinary'),
  value: 'gradient'
}];
var SELECTED_BORDER_POSITION = [{
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('All', 'cloudinary'),
  value: 'all'
}, {
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Top', 'cloudinary'),
  value: 'top'
}, {
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Top-Bottom', 'cloudinary'),
  value: 'top-bottom'
}, {
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Left-Right', 'cloudinary'),
  value: 'left-right'
}, {
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Bottom', 'cloudinary'),
  value: 'bottom'
}, {
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Left', 'cloudinary'),
  value: 'left'
}, {
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Right', 'cloudinary'),
  value: 'right'
}];
var MEDIA_ICON_SHAPE = [{
  value: 'round',
  icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_icons__WEBPACK_IMPORTED_MODULE_3__["ShapeRound"], null),
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Round', 'cloudinary')
}, {
  value: 'radius',
  icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_icons__WEBPACK_IMPORTED_MODULE_3__["ShapeRadius"], null),
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Radius', 'cloudinary')
}, {
  value: 'none',
  icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_icons__WEBPACK_IMPORTED_MODULE_3__["ShapeNone"], null),
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('None', 'cloudinary')
}, {
  value: 'square',
  icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_icons__WEBPACK_IMPORTED_MODULE_3__["ShapeSquare"], null),
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Square', 'cloudinary')
}];

/***/ }),

/***/ "./js/src/gallery-block/radio.js":
/*!***************************************!*\
  !*** ./js/src/gallery-block/radio.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);




/**
 * External dependencies
 */

/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var value = _ref.value,
      children = _ref.children,
      icon = _ref.icon,
      onChange = _ref.onChange,
      current = _ref.current;
  var isActive = _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(value) === 'object' ? JSON.stringify(value) === JSON.stringify(current) : current === value;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("button", {
    onClick: function onClick() {
      return onChange(value);
    },
    className: classnames__WEBPACK_IMPORTED_MODULE_3___default()('radio-select', {
      'radio-select--active': isActive
    })
  }, icon, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "radio-select__label"
  }, children));
});

/***/ }),

/***/ "./js/src/gallery-block/save.js":
/*!**************************************!*\
  !*** ./js/src/gallery-block/save.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var dot_object__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! dot-object */ "./node_modules/dot-object/index.js");
/* harmony import */ var dot_object__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(dot_object__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash/cloneDeep */ "./node_modules/lodash/cloneDeep.js");
/* harmony import */ var lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _defaults_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./defaults.json */ "./js/src/gallery-block/defaults.json");
var _defaults_json__WEBPACK_IMPORTED_MODULE_6___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./defaults.json */ "./js/src/gallery-block/defaults.json", 1);





function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/**
 * External dependencies
 */


/**
 * Internal dependencies
 */


var dot = new dot_object__WEBPACK_IMPORTED_MODULE_4___default.a('_');

var Save = function Save(_ref) {
  var attributes = _ref.attributes;
  var configString = '';

  if (attributes.selectedImages.length) {
    var _config$displayProps;

    var attributesClone = lodash_cloneDeep__WEBPACK_IMPORTED_MODULE_5___default()(attributes);

    var _dot$object = dot.object(attributesClone, {}),
        selectedImages = _dot$object.selectedImages,
        config = _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default()(_dot$object, ["selectedImages"]);

    if ((config === null || config === void 0 ? void 0 : (_config$displayProps = config.displayProps) === null || _config$displayProps === void 0 ? void 0 : _config$displayProps.mode) !== 'classic') {
      delete config.transition;
    } else {
      delete config.displayProps.columns;
    }

    configString = JSON.stringify(_objectSpread(_objectSpread({
      cloudName: CLDN.mloptions.cloud_name,
      mediaAssets: selectedImages
    }, _defaults_json__WEBPACK_IMPORTED_MODULE_6__), config));
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: attributes.container,
    "data-cloudinary-gallery-config": configString
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Save);

/***/ }),

/***/ "./js/src/gallery-block/utils.js":
/*!***************************************!*\
  !*** ./js/src/gallery-block/utils.js ***!
  \***************************************/
/*! exports provided: generateId */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateId", function() { return generateId; });
var dec2hex = function dec2hex(dec) {
  return dec < 10 ? '0' + String(dec) : dec.toString(16);
};

var generateId = function generateId(len) {
  var arr = new Uint8Array((len || 40) / 2);
  window.crypto.getRandomValues(arr);
  return Array.from(arr, dec2hex).join('');
};

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/defineProperty.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/dugi/Code/xwp/cloudinary-plugin/node_modules/@babel/runtime/helpers/defineProperty.js'");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/objectWithoutProperties.js":
/*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/objectWithoutProperties.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/dugi/Code/xwp/cloudinary-plugin/node_modules/@babel/runtime/helpers/objectWithoutProperties.js'");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/dugi/Code/xwp/cloudinary-plugin/node_modules/@babel/runtime/helpers/typeof.js'");

/***/ }),

/***/ "./node_modules/classnames/index.js":
/*!******************************************!*\
  !*** ./node_modules/classnames/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/dugi/Code/xwp/cloudinary-plugin/node_modules/classnames/index.js'");

/***/ }),

/***/ "./node_modules/dot-object/index.js":
/*!******************************************!*\
  !*** ./node_modules/dot-object/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/dugi/Code/xwp/cloudinary-plugin/node_modules/dot-object/index.js'");

/***/ }),

/***/ "./node_modules/lodash/cloneDeep.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/cloneDeep.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/dugi/Code/xwp/cloudinary-plugin/node_modules/lodash/cloneDeep.js'");

/***/ }),

/***/ "@wordpress/block-editor":
/*!**********************************************!*\
  !*** external {"this":["wp","blockEditor"]} ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["blockEditor"]; }());

/***/ }),

/***/ "@wordpress/blocks":
/*!*****************************************!*\
  !*** external {"this":["wp","blocks"]} ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["blocks"]; }());

/***/ }),

/***/ "@wordpress/components":
/*!*********************************************!*\
  !*** external {"this":["wp","components"]} ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["components"]; }());

/***/ }),

/***/ "@wordpress/components/build-style/style.css":
/*!******************************************************************!*\
  !*** external {"this":["wp","components/buildStyle/style.css"]} ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["components/buildStyle/style.css"]; }());

/***/ }),

/***/ "@wordpress/element":
/*!******************************************!*\
  !*** external {"this":["wp","element"]} ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["element"]; }());

/***/ }),

/***/ "@wordpress/i18n":
/*!***************************************!*\
  !*** external {"this":["wp","i18n"]} ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["i18n"]; }());

/***/ }),

/***/ "react":
/*!*********************************!*\
  !*** external {"this":"React"} ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["React"]; }());

/***/ })

/******/ });
//# sourceMappingURL=gallery-block.js.map