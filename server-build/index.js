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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/server/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Components_Home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Components/Home */ \"./src/Components/Home.js\");\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (props => {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Switch\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Route\"], {\n    exact: true,\n    path: \"*\",\n    render: props => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_Home__WEBPACK_IMPORTED_MODULE_2__[\"default\"], props)\n  })));\n});\n\n//# sourceURL=webpack:///./src/App.js?");

/***/ }),

/***/ "./src/Components/Card/Card.css":
/*!**************************************!*\
  !*** ./src/Components/Card/Card.css ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/Components/Card/Card.css?");

/***/ }),

/***/ "./src/Components/Card/Card.js":
/*!*************************************!*\
  !*** ./src/Components/Card/Card.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Card_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Card.css */ \"./src/Components/Card/Card.css\");\n/* harmony import */ var _Card_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Card_css__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\nconst Card = ({\n  data: {\n    mission_name,\n    flight_number,\n    mission_id,\n    launch_year,\n    launch_success,\n    links: {\n      mission_patch_small\n    }\n  }\n}) => {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"card-container\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"img\", {\n    alt: mission_name,\n    src: mission_patch_small\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", {\n    className: \"mission-label\"\n  }, mission_name, \"#\", flight_number), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"mission-info\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", {\n    className: \"label\"\n  }, \"Mission Ids:\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, mission_id)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"mission-info\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", {\n    className: \"label\"\n  }, \"Launch Year:\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, launch_year)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"mission-info\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", {\n    className: \"label\"\n  }, \"Successful Launch:\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, launch_success))));\n};\n\nCard.propTypes = {\n  data: prop_types__WEBPACK_IMPORTED_MODULE_1__[\"object\"]\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Card);\n\n//# sourceURL=webpack:///./src/Components/Card/Card.js?");

/***/ }),

/***/ "./src/Components/CardWrapper/CardWrapper.css":
/*!****************************************************!*\
  !*** ./src/Components/CardWrapper/CardWrapper.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/Components/CardWrapper/CardWrapper.css?");

/***/ }),

/***/ "./src/Components/CardWrapper/CardWrapper.js":
/*!***************************************************!*\
  !*** ./src/Components/CardWrapper/CardWrapper.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Card_Card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Card/Card */ \"./src/Components/Card/Card.js\");\n/* harmony import */ var _CardWrapper_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./CardWrapper.css */ \"./src/Components/CardWrapper/CardWrapper.css\");\n/* harmony import */ var _CardWrapper_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_CardWrapper_css__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\n\nconst CardWrapper = ({\n  list\n}) => {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"card-wrapper\"\n  }, list.map((item, index) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Card_Card__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    key: index,\n    data: item\n  })));\n};\n\nCardWrapper.propTypes = {\n  list: prop_types__WEBPACK_IMPORTED_MODULE_1__[\"array\"]\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (CardWrapper);\n\n//# sourceURL=webpack:///./src/Components/CardWrapper/CardWrapper.js?");

/***/ }),

/***/ "./src/Components/Filter/Filter.js":
/*!*****************************************!*\
  !*** ./src/Components/Filter/Filter.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Tile_Tile__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Tile/Tile */ \"./src/Components/Tile/Tile.js\");\nfunction _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\n\n\n\n\nconst Filter = ({\n  type,\n  title,\n  subCategories,\n  ...props\n}) => {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"filter-section\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h3\", null, title), subCategories.map(({\n    id,\n    value\n  }) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Tile_Tile__WEBPACK_IMPORTED_MODULE_2__[\"default\"], _extends({\n    key: id,\n    value: value,\n    id: id,\n    type: type\n  }, props))));\n};\n\nFilter.propTypes = {\n  title: prop_types__WEBPACK_IMPORTED_MODULE_1__[\"string\"],\n  subCategories: prop_types__WEBPACK_IMPORTED_MODULE_1__[\"array\"],\n  type: prop_types__WEBPACK_IMPORTED_MODULE_1__[\"string\"]\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Filter);\n\n//# sourceURL=webpack:///./src/Components/Filter/Filter.js?");

/***/ }),

/***/ "./src/Components/FilterWrapper/FilterWrapper.css":
/*!********************************************************!*\
  !*** ./src/Components/FilterWrapper/FilterWrapper.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/Components/FilterWrapper/FilterWrapper.css?");

/***/ }),

/***/ "./src/Components/FilterWrapper/FilterWrapper.js":
/*!*******************************************************!*\
  !*** ./src/Components/FilterWrapper/FilterWrapper.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Filter_Filter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Filter/Filter */ \"./src/Components/Filter/Filter.js\");\n/* harmony import */ var _FilterWrapper_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FilterWrapper.css */ \"./src/Components/FilterWrapper/FilterWrapper.css\");\n/* harmony import */ var _FilterWrapper_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_FilterWrapper_css__WEBPACK_IMPORTED_MODULE_2__);\nfunction _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\n\n\n\nconst filterCategories = [{\n  title: 'Launch Year',\n  type: 'launch_year',\n  subCategories: [{\n    id: 1,\n    value: 2006\n  }, {\n    id: 2,\n    value: 2007\n  }, {\n    id: 3,\n    value: 2008\n  }, {\n    id: 4,\n    value: 2009\n  }, {\n    id: 5,\n    value: 2010\n  }, {\n    id: 6,\n    value: 2011\n  }, {\n    id: 7,\n    value: 2012\n  }, {\n    id: 8,\n    value: 2013\n  }, {\n    id: 9,\n    value: 2014\n  }, {\n    id: 10,\n    value: 2015\n  }, {\n    id: 11,\n    value: 2016\n  }, {\n    id: 12,\n    value: 2017\n  }, {\n    id: 13,\n    value: 2018\n  }, {\n    id: 14,\n    value: 2019\n  }, {\n    id: 15,\n    value: 2020\n  }]\n}, {\n  title: 'Successful Launch',\n  type: 'launch_success',\n  subCategories: [{\n    id: 16,\n    value: true\n  }, {\n    id: 17,\n    value: false\n  }]\n}, {\n  title: 'Successful Landing',\n  type: 'land_success',\n  subCategories: [{\n    id: 18,\n    value: true\n  }, {\n    id: 19,\n    value: false\n  }]\n}];\n\nconst FilterWrapper = props => {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"filter-wrapper\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"filter-wrapper-container\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h2\", null, \"Filters\"), filterCategories.map(({\n    type,\n    title,\n    subCategories\n  }) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Filter_Filter__WEBPACK_IMPORTED_MODULE_1__[\"default\"], _extends({\n    key: title,\n    type: type,\n    title: title,\n    subCategories: subCategories\n  }, props)))));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (FilterWrapper);\n\n//# sourceURL=webpack:///./src/Components/FilterWrapper/FilterWrapper.js?");

/***/ }),

/***/ "./src/Components/Footer.js":
/*!**********************************!*\
  !*** ./src/Components/Footer.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n\nconst Footer = () => {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"footer\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", null, \"Developed by:\"), \"Arpit Jain\");\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Footer);\n\n//# sourceURL=webpack:///./src/Components/Footer.js?");

/***/ }),

/***/ "./src/Components/Header.js":
/*!**********************************!*\
  !*** ./src/Components/Header.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n\nconst Header = () => {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h1\", null, \"SpaceX Launch Programs\");\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);\n\n//# sourceURL=webpack:///./src/Components/Header.js?");

/***/ }),

/***/ "./src/Components/Home.css":
/*!*********************************!*\
  !*** ./src/Components/Home.css ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/Components/Home.css?");

/***/ }),

/***/ "./src/Components/Home.js":
/*!********************************!*\
  !*** ./src/Components/Home.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Header */ \"./src/Components/Header.js\");\n/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Footer */ \"./src/Components/Footer.js\");\n/* harmony import */ var _FilterWrapper_FilterWrapper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./FilterWrapper/FilterWrapper */ \"./src/Components/FilterWrapper/FilterWrapper.js\");\n/* harmony import */ var _CardWrapper_CardWrapper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./CardWrapper/CardWrapper */ \"./src/Components/CardWrapper/CardWrapper.js\");\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../helpers */ \"./src/helpers/index.js\");\n/* harmony import */ var _Home_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Home.css */ \"./src/Components/Home.css\");\n/* harmony import */ var _Home_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_Home_css__WEBPACK_IMPORTED_MODULE_6__);\n\n\n\n\n\n\n\n\nconst filterData = (filterKey, filterValue, data) => {\n  if (filterKey === 'launch_year') {\n    filterValue = filterValue.toString();\n  }\n\n  return data.filter(item => item[filterKey] === filterValue);\n};\n\nclass Home extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {\n  constructor(props) {\n    super(props);\n\n    if (props.staticContext && props.staticContext.data) {\n      this.state = {\n        data: props.staticContext.data,\n        params: {}\n      };\n    } else {\n      this.state = {\n        data: [],\n        params: {}\n      };\n    }\n\n    this.filterHandler = this.filterHandler.bind(this);\n  }\n\n  filterHandler(type, value) {\n    let currentUrl = window.location.href;\n    let staticUrl = currentUrl.split('?')[0];\n    const prefix = '?';\n    let urlParams = `${type}=${value}`;\n    let url = `${staticUrl}${prefix}${urlParams}`;\n    window.history.pushState('', '', url);\n    Object(_helpers__WEBPACK_IMPORTED_MODULE_5__[\"default\"])().then(data => {\n      this.setState({\n        data: filterData(type, value, data),\n        params: { ...this.state.params,\n          [type]: value\n        }\n      });\n    });\n  }\n\n  componentDidMount() {\n    setTimeout(() => {\n      if (window.__INITIAL_DATA__) {\n        this.setState({\n          data: window.__INITIAL_DATA__\n        });\n        delete window.__INITIAL_DATA__;\n      } else {\n        if (window.location.href.indexOf('?') > -1) {\n          let url = window.location.href;\n          let urlParams = url.split('?')[1].split('=');\n\n          if (urlParams.length) {\n            let type = urlParams[0];\n            let value = !isNaN(urlParams[1]) ? parseInt(urlParams[1]) : urlParams[1];\n            Object(_helpers__WEBPACK_IMPORTED_MODULE_5__[\"default\"])().then(data => {\n              this.setState({\n                data: filterData(type, value, data),\n                params: { ...this.state.params,\n                  [type]: value\n                }\n              });\n            });\n          }\n        } else {\n          Object(_helpers__WEBPACK_IMPORTED_MODULE_5__[\"default\"])().then(data => {\n            this.setState({\n              data\n            });\n          });\n        }\n      }\n    }, 0);\n  }\n\n  render() {\n    const {\n      data,\n      params\n    } = this.state;\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"main\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Header__WEBPACK_IMPORTED_MODULE_1__[\"default\"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"container\"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_FilterWrapper_FilterWrapper__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n      clickHandler: this.filterHandler,\n      selectedFilters: params\n    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_CardWrapper_CardWrapper__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n      list: data\n    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Footer__WEBPACK_IMPORTED_MODULE_2__[\"default\"], null));\n  }\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\n\n//# sourceURL=webpack:///./src/Components/Home.js?");

/***/ }),

/***/ "./src/Components/Tile/Tile.css":
/*!**************************************!*\
  !*** ./src/Components/Tile/Tile.css ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/Components/Tile/Tile.css?");

/***/ }),

/***/ "./src/Components/Tile/Tile.js":
/*!*************************************!*\
  !*** ./src/Components/Tile/Tile.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Tile_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Tile.css */ \"./src/Components/Tile/Tile.css\");\n/* harmony import */ var _Tile_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Tile_css__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\nconst Tile = ({\n  value,\n  id,\n  type,\n  clickHandler,\n  selectedFilters\n}) => {\n  const handleOnClick = () => clickHandler(type, value);\n\n  let className = 'tile';\n\n  if (selectedFilters[type] && selectedFilters[type] === value) {\n    className += ' active';\n  }\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n    className: className,\n    \"test-id\": `test-${id}`,\n    id: id,\n    onClick: handleOnClick\n  }, type === 'launch_success' || type === 'land_success' ? value.toString() : value);\n};\n\nTile.propTypes = {\n  value: Object(prop_types__WEBPACK_IMPORTED_MODULE_1__[\"oneOfType\"])([prop_types__WEBPACK_IMPORTED_MODULE_1__[\"number\"], prop_types__WEBPACK_IMPORTED_MODULE_1__[\"bool\"]]),\n  id: prop_types__WEBPACK_IMPORTED_MODULE_1__[\"number\"],\n  type: prop_types__WEBPACK_IMPORTED_MODULE_1__[\"string\"],\n  clickHandler: prop_types__WEBPACK_IMPORTED_MODULE_1__[\"func\"],\n  selectedFilters: prop_types__WEBPACK_IMPORTED_MODULE_1__[\"object\"]\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Tile);\n\n//# sourceURL=webpack:///./src/Components/Tile/Tile.js?");

/***/ }),

/***/ "./src/helpers/index.js":
/*!******************************!*\
  !*** ./src/helpers/index.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! isomorphic-fetch */ \"isomorphic-fetch\");\n/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0__);\n\n\nconst loadData = param => {\n  return fetch(`https://api.spacexdata.com/v3/launches?limit=100${param}`).then(res => {\n    return res.json();\n  });\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (loadData);\n\n//# sourceURL=webpack:///./src/helpers/index.js?");

/***/ }),

/***/ "./src/routes.js":
/*!***********************!*\
  !*** ./src/routes.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Components_Home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Components/Home */ \"./src/Components/Home.js\");\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpers */ \"./src/helpers/index.js\");\n\n\nconst Routes = [{\n  path: '*',\n  component: _Components_Home__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n  loadData: () => Object(_helpers__WEBPACK_IMPORTED_MODULE_1__[\"default\"])()\n}];\n/* harmony default export */ __webpack_exports__[\"default\"] = (Routes);\n\n//# sourceURL=webpack:///./src/routes.js?");

/***/ }),

/***/ "./src/server/index.js":
/*!*****************************!*\
  !*** ./src/server/index.js ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var serialize_javascript__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! serialize-javascript */ \"serialize-javascript\");\n/* harmony import */ var serialize_javascript__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(serialize_javascript__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../App */ \"./src/App.js\");\n/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../routes */ \"./src/routes.js\");\n\n\n\n\n\n\n\n\n\nconst PORT = process.env.PORT || 3006;\nconst app = express__WEBPACK_IMPORTED_MODULE_3___default()();\napp.use(express__WEBPACK_IMPORTED_MODULE_3___default.a.static('./build'));\napp.get('*.js', function (req, res, next) {\n  req.url = req.url + '.gz';\n  res.set('Content-Encoding', 'gzip');\n  next();\n});\napp.get('/*', (req, res) => {\n  const currentRoute = _routes__WEBPACK_IMPORTED_MODULE_8__[\"default\"].find(route => Object(react_router_dom__WEBPACK_IMPORTED_MODULE_6__[\"matchPath\"])(req.url, route)) || {};\n  let promise;\n\n  if (currentRoute.loadData) {\n    promise = currentRoute.loadData();\n  } else {\n    promise = Promise.resolve(null);\n  }\n\n  promise.then(data => {\n    const context = {\n      data\n    };\n    const app = react_dom_server__WEBPACK_IMPORTED_MODULE_4___default.a.renderToString( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__[\"StaticRouter\"], {\n      location: req.url,\n      context: context\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_App__WEBPACK_IMPORTED_MODULE_7__[\"default\"], null)));\n    const indexFile = path__WEBPACK_IMPORTED_MODULE_0___default.a.resolve('./build/index.html');\n    fs__WEBPACK_IMPORTED_MODULE_1___default.a.readFile(indexFile, 'utf8', (err, indexData) => {\n      if (err) {\n        console.error('Something went wrong:', err);\n        return res.status(500).send('Oops, better luck next time!');\n      }\n\n      if (context.status === 404) {\n        res.status(404);\n      }\n\n      if (context.url) {\n        return res.redirect(301, context.url);\n      }\n\n      return res.send(indexData.replace('<div id=\"root\"></div>', `<div id=\"root\">${app}</div>`).replace('</body>', `<script>window.__INITIAL_DATA__ = ${serialize_javascript__WEBPACK_IMPORTED_MODULE_5___default()(data)}</script></body>`));\n    });\n  });\n});\napp.listen(PORT, () => {\n  console.log(`Server is listening on port ${PORT}`);\n});\n\n//# sourceURL=webpack:///./src/server/index.js?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"fs\");\n\n//# sourceURL=webpack:///external_%22fs%22?");

/***/ }),

/***/ "isomorphic-fetch":
/*!***********************************!*\
  !*** external "isomorphic-fetch" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"isomorphic-fetch\");\n\n//# sourceURL=webpack:///external_%22isomorphic-fetch%22?");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");\n\n//# sourceURL=webpack:///external_%22path%22?");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"prop-types\");\n\n//# sourceURL=webpack:///external_%22prop-types%22?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");\n\n//# sourceURL=webpack:///external_%22react%22?");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom/server\");\n\n//# sourceURL=webpack:///external_%22react-dom/server%22?");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router-dom\");\n\n//# sourceURL=webpack:///external_%22react-router-dom%22?");

/***/ }),

/***/ "serialize-javascript":
/*!***************************************!*\
  !*** external "serialize-javascript" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"serialize-javascript\");\n\n//# sourceURL=webpack:///external_%22serialize-javascript%22?");

/***/ })

/******/ });