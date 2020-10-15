module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/fixedPhoto/FixedPhoto.tsx":
/*!**********************************************!*\
  !*** ./components/fixedPhoto/FixedPhoto.tsx ***!
  \**********************************************/
/*! exports provided: FixedPhoto */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FixedPhoto\", function() { return FixedPhoto; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/styled */ \"@emotion/styled\");\n/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_emotion_styled__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _logo_Logo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../logo/Logo */ \"./components/logo/Logo.tsx\");\n/* harmony import */ var _justifyText_JustifyText__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../justifyText/JustifyText */ \"./components/justifyText/JustifyText.tsx\");\nvar _jsxFileName = \"/Users/yodra/desarrollo/adalovedev/adaloversconf-web/components/fixedPhoto/FixedPhoto.tsx\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\nconst Container = _emotion_styled__WEBPACK_IMPORTED_MODULE_1___default.a.div`\n   min-height: 100vh;\n   background: linear-gradient(rgba(92, 29, 83, 0.6), rgba(92, 29, 83, 0.6)), url(\"/intro-banner2_sm.png\");\n   background-position: center;\n   background-size: cover;\n   text-shadow: 0 0 4px rgba(0,0,0,0.5);\n   display: flex;\n   flex-direction: column;\n   align-items: center;\n   justify-content: center;\n   gap: 3rem;\n `;\nconst Img = _emotion_styled__WEBPACK_IMPORTED_MODULE_1___default.a.img`\n  max-width: 15vw;\n`;\nconst FixedPhoto = () => {\n  return __jsx(Container, {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 10\n    }\n  }, __jsx(_logo_Logo__WEBPACK_IMPORTED_MODULE_2__[\"Logo\"], {\n    urlImg: \"/logowhite-ADA-LOVERS-CONF.png\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 5\n    }\n  }), __jsx(_justifyText_JustifyText__WEBPACK_IMPORTED_MODULE_3__[\"JustifyText\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 5\n    }\n  }, __jsx(\"p\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 7\n    }\n  }, \"Lament\\xE1ndolo much\\xEDsimo, hemos decidido no celebrar la edici\\xF3n del #AdaLoversConf 2020.\"), __jsx(\"p\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 7\n    }\n  }, \"En todo momento hemos querido que la conferencia sea un punto de encuentro y reuni\\xF3n en el que estemos c\\xF3modos, dando mucha importancia a la calidad del propio evento, de su contenido y a los peque\\xF1os detalles que les hagan pasar un d\\xEDa inolvidable.\"), __jsx(\"p\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 7\n    }\n  }, \"De igual modo, sabemos las dificultades que podemos llegar tener, tanto a nivel personal como de empresas. Por lo que tampoco queremos poner en compromiso a los sponsors que han o les hubiera gustado colaborar.\"), __jsx(\"p\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 7\n    }\n  }, \"Es por todo esto que consideramos que la situaci\\xF3n actual perjudica que podamos organizar y disfrutar realmente del evento. Por lo tanto, esperamos que entiendan que todo esto nos ha llevado a tomar la decisi\\xF3n de no celebrar la edici\\xF3n del 2020.\"), __jsx(\"p\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 7\n    }\n  }, \"\\xA1\\xA1Pero esto es solo un hasta luego!! Aprovecharemos la situaci\\xF3n para coger fuerzas para que el pr\\xF3ximo 2021 tod@s l@s Adalovers disfrutemos el doble.\")), __jsx(\"a\", {\n    href: \"https://adalovedev.es\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 5\n    }\n  }, __jsx(Img, {\n    src: \"/logo_horizontal_white.png\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 37\n    }\n  })));\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2ZpeGVkUGhvdG8vRml4ZWRQaG90by50c3g/ZDIwYyJdLCJuYW1lcyI6WyJDb250YWluZXIiLCJzdHlsZWQiLCJkaXYiLCJJbWciLCJpbWciLCJGaXhlZFBob3RvIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQSxNQUFNQSxTQUFTLEdBQUdDLHNEQUFNLENBQUNDLEdBQUk7Ozs7Ozs7Ozs7O0VBQTdCO0FBYUEsTUFBTUMsR0FBRyxHQUFHRixzREFBTSxDQUFDRyxHQUFTOztDQUE1QjtBQUlPLE1BQU1DLFVBQWMsR0FBRyxNQUFNO0FBQ2xDLFNBQU8sTUFBQyxTQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDTCxNQUFDLCtDQUFEO0FBQU0sVUFBTSxFQUFDLGdDQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFESyxFQUVMLE1BQUMsb0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUdBREYsRUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDZRQUZGLEVBS0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwwTkFMRixFQVFFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdVFBUkYsRUFXRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDBLQVhGLENBRkssRUFnQkw7QUFBRyxRQUFJLEVBQUMsdUJBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFnQyxNQUFDLEdBQUQ7QUFBSyxPQUFHLEVBQUMsNEJBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUFoQyxDQWhCSyxDQUFQO0FBa0JELENBbkJNIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9maXhlZFBob3RvL0ZpeGVkUGhvdG8udHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IEZDIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnO1xuaW1wb3J0IHsgTG9nbyB9IGZyb20gJy4uL2xvZ28vTG9nbyc7XG5pbXBvcnQgeyBKdXN0aWZ5VGV4dCB9IGZyb20gJy4uL2p1c3RpZnlUZXh0L0p1c3RpZnlUZXh0JztcblxuY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHJnYmEoOTIsIDI5LCA4MywgMC42KSwgcmdiYSg5MiwgMjksIDgzLCAwLjYpKSwgdXJsKFwiL2ludHJvLWJhbm5lcjJfc20ucG5nXCIpO1xuICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgIHRleHQtc2hhZG93OiAwIDAgNHB4IHJnYmEoMCwwLDAsMC41KTtcbiAgIGRpc3BsYXk6IGZsZXg7XG4gICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgZ2FwOiAzcmVtO1xuIGA7XG5cbmNvbnN0IEltZyA9IHN0eWxlZC5pbWc8YW55PmBcbiAgbWF4LXdpZHRoOiAxNXZ3O1xuYDtcblxuZXhwb3J0IGNvbnN0IEZpeGVkUGhvdG86IEZDID0gKCkgPT4ge1xuICByZXR1cm4gPENvbnRhaW5lcj5cbiAgICA8TG9nbyB1cmxJbWc9XCIvbG9nb3doaXRlLUFEQS1MT1ZFUlMtQ09ORi5wbmdcIi8+XG4gICAgPEp1c3RpZnlUZXh0PlxuICAgICAgPHA+TGFtZW50w6FuZG9sbyBtdWNow61zaW1vLCBoZW1vcyBkZWNpZGlkbyBubyBjZWxlYnJhciBsYSBlZGljacOzbiBkZWwgI0FkYUxvdmVyc0NvbmYgMjAyMC48L3A+XG4gICAgICA8cD5FbiB0b2RvIG1vbWVudG8gaGVtb3MgcXVlcmlkbyBxdWUgbGEgY29uZmVyZW5jaWEgc2VhIHVuIHB1bnRvIGRlIGVuY3VlbnRybyB5IHJldW5pw7NuIGVuIGVsIHF1ZSBlc3RlbW9zXG4gICAgICAgIGPDs21vZG9zLCBkYW5kbyBtdWNoYSBpbXBvcnRhbmNpYSBhIGxhIGNhbGlkYWQgZGVsIHByb3BpbyBldmVudG8sIGRlIHN1IGNvbnRlbmlkbyB5IGEgbG9zIHBlcXVlw7Fvc1xuICAgICAgICBkZXRhbGxlcyBxdWUgbGVzIGhhZ2FuIHBhc2FyIHVuIGTDrWEgaW5vbHZpZGFibGUuPC9wPlxuICAgICAgPHA+RGUgaWd1YWwgbW9kbywgc2FiZW1vcyBsYXMgZGlmaWN1bHRhZGVzIHF1ZSBwb2RlbW9zIGxsZWdhciB0ZW5lciwgdGFudG8gYSBuaXZlbCBwZXJzb25hbCBjb21vIGRlXG4gICAgICAgIGVtcHJlc2FzLiBQb3IgbG8gcXVlIHRhbXBvY28gcXVlcmVtb3MgcG9uZXIgZW4gY29tcHJvbWlzbyBhIGxvcyBzcG9uc29ycyBxdWUgaGFuIG8gbGVzIGh1YmllcmEgZ3VzdGFkb1xuICAgICAgICBjb2xhYm9yYXIuPC9wPlxuICAgICAgPHA+RXMgcG9yIHRvZG8gZXN0byBxdWUgY29uc2lkZXJhbW9zIHF1ZSBsYSBzaXR1YWNpw7NuIGFjdHVhbCBwZXJqdWRpY2EgcXVlIHBvZGFtb3Mgb3JnYW5pemFyIHkgZGlzZnJ1dGFyXG4gICAgICAgIHJlYWxtZW50ZSBkZWwgZXZlbnRvLiBQb3IgbG8gdGFudG8sIGVzcGVyYW1vcyBxdWUgZW50aWVuZGFuIHF1ZSB0b2RvIGVzdG8gbm9zIGhhIGxsZXZhZG8gYSB0b21hciBsYVxuICAgICAgICBkZWNpc2nDs24gZGUgbm8gY2VsZWJyYXIgbGEgZWRpY2nDs24gZGVsIDIwMjAuPC9wPlxuICAgICAgPHA+wqHCoVBlcm8gZXN0byBlcyBzb2xvIHVuIGhhc3RhIGx1ZWdvISEgQXByb3ZlY2hhcmVtb3MgbGEgc2l0dWFjacOzbiBwYXJhIGNvZ2VyIGZ1ZXJ6YXMgcGFyYSBxdWUgZWwgcHLDs3hpbW9cbiAgICAgICAgMjAyMSB0b2RAcyBsQHMgQWRhbG92ZXJzIGRpc2ZydXRlbW9zIGVsIGRvYmxlLjwvcD5cbiAgICA8L0p1c3RpZnlUZXh0PlxuICAgIDxhIGhyZWY9XCJodHRwczovL2FkYWxvdmVkZXYuZXNcIj48SW1nIHNyYz1cIi9sb2dvX2hvcml6b250YWxfd2hpdGUucG5nXCIvPjwvYT5cbiAgPC9Db250YWluZXI+XG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/fixedPhoto/FixedPhoto.tsx\n");

/***/ }),

/***/ "./components/justifyText/JustifyText.tsx":
/*!************************************************!*\
  !*** ./components/justifyText/JustifyText.tsx ***!
  \************************************************/
/*! exports provided: JustifyText */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"JustifyText\", function() { return JustifyText; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/styled */ \"@emotion/styled\");\n/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_emotion_styled__WEBPACK_IMPORTED_MODULE_1__);\nvar _jsxFileName = \"/Users/yodra/desarrollo/adalovedev/adaloversconf-web/components/justifyText/JustifyText.tsx\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\nconst Container = _emotion_styled__WEBPACK_IMPORTED_MODULE_1___default.a.div`\n  width: 70vw;\n  text-align: justify;\n  font-size: 24px;\n  color: #FFF;\n  @media(max-width: 1024px) {\n    font-size: 20px;\n  }\n  @media(max-width: 540px) {\n    font-size: 16px;\n  }\n  @media(max-width: 280px) {\n    font-size: 12px;\n  }\n`;\nconst JustifyText = ({\n  children\n}) => {\n  return __jsx(Container, {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 10\n    }\n  }, children);\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2p1c3RpZnlUZXh0L0p1c3RpZnlUZXh0LnRzeD8yOGZiIl0sIm5hbWVzIjpbIkNvbnRhaW5lciIsInN0eWxlZCIsImRpdiIsIkp1c3RpZnlUZXh0IiwiY2hpbGRyZW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBLE1BQU1BLFNBQVMsR0FBR0Msc0RBQU0sQ0FBQ0MsR0FBSTs7Ozs7Ozs7Ozs7Ozs7Q0FBN0I7QUFnQk8sTUFBTUMsV0FBZSxHQUFHLENBQUM7QUFBRUM7QUFBRixDQUFELEtBQWtCO0FBQy9DLFNBQU8sTUFBQyxTQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBWUEsUUFBWixDQUFQO0FBQ0QsQ0FGTSIsImZpbGUiOiIuL2NvbXBvbmVudHMvanVzdGlmeVRleHQvSnVzdGlmeVRleHQudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IEZDIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnO1xuXG5jb25zdCBDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICB3aWR0aDogNzB2dztcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBjb2xvcjogI0ZGRjtcbiAgQG1lZGlhKG1heC13aWR0aDogMTAyNHB4KSB7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICB9XG4gIEBtZWRpYShtYXgtd2lkdGg6IDU0MHB4KSB7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICB9XG4gIEBtZWRpYShtYXgtd2lkdGg6IDI4MHB4KSB7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICB9XG5gO1xuXG5leHBvcnQgY29uc3QgSnVzdGlmeVRleHQ6IEZDID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xuICByZXR1cm4gPENvbnRhaW5lcj57Y2hpbGRyZW59PC9Db250YWluZXI+O1xufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/justifyText/JustifyText.tsx\n");

/***/ }),

/***/ "./components/logo/Logo.tsx":
/*!**********************************!*\
  !*** ./components/logo/Logo.tsx ***!
  \**********************************/
/*! exports provided: Logo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Logo\", function() { return Logo; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @emotion/styled */ \"@emotion/styled\");\n/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_emotion_styled__WEBPACK_IMPORTED_MODULE_1__);\nvar _jsxFileName = \"/Users/yodra/desarrollo/adalovedev/adaloversconf-web/components/logo/Logo.tsx\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\nconst Img = _emotion_styled__WEBPACK_IMPORTED_MODULE_1___default.a.img`\n  max-width: 30vw;\n`;\nconst Logo = ({\n  urlImg\n}) => {\n  return __jsx(Img, {\n    src: urlImg,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 10\n    }\n  });\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2xvZ28vTG9nby50c3g/YjRlZCJdLCJuYW1lcyI6WyJJbWciLCJzdHlsZWQiLCJpbWciLCJMb2dvIiwidXJsSW1nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBQ0E7QUFFQSxNQUFNQSxHQUFHLEdBQUdDLHNEQUFNLENBQUNDLEdBQVM7O0NBQTVCO0FBUU8sTUFBTUMsSUFBbUIsR0FBRyxDQUFDO0FBQUVDO0FBQUYsQ0FBRCxLQUFnQjtBQUNqRCxTQUFPLE1BQUMsR0FBRDtBQUFLLE9BQUcsRUFBRUEsTUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBQVA7QUFDRCxDQUZNIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9sb2dvL0xvZ28udHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IEZDIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnO1xuXG5jb25zdCBJbWcgPSBzdHlsZWQuaW1nPGFueT5gXG4gIG1heC13aWR0aDogMzB2dztcbmA7XG5cbmludGVyZmFjZSBMb2dvUHJvcHMge1xuICB1cmxJbWc6IHN0cmluZ1xufVxuXG5leHBvcnQgY29uc3QgTG9nbzogRkM8TG9nb1Byb3BzPiA9ICh7IHVybEltZyB9KSA9PiB7XG4gIHJldHVybiA8SW1nIHNyYz17dXJsSW1nfS8+O1xufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/logo/Logo.tsx\n");

/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: Container, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Container\", function() { return Container; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_fixedPhoto_FixedPhoto__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/fixedPhoto/FixedPhoto */ \"./components/fixedPhoto/FixedPhoto.tsx\");\nvar _jsxFileName = \"/Users/yodra/desarrollo/adalovedev/adaloversconf-web/pages/index.tsx\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\nconst Container = () => {\n  return __jsx(_components_fixedPhoto_FixedPhoto__WEBPACK_IMPORTED_MODULE_1__[\"FixedPhoto\"], {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 5,\n      columnNumber: 10\n    }\n  });\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Container);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC50c3g/ZGI3NiJdLCJuYW1lcyI6WyJDb250YWluZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTtBQUNBO0FBRU8sTUFBTUEsU0FBYSxHQUFHLE1BQU07QUFDakMsU0FBTyxNQUFDLDRFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFBUDtBQUNELENBRk07QUFJUUEsd0VBQWYiLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgRkMgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEZpeGVkUGhvdG8gfSBmcm9tIFwiLi4vY29tcG9uZW50cy9maXhlZFBob3RvL0ZpeGVkUGhvdG9cIjtcblxuZXhwb3J0IGNvbnN0IENvbnRhaW5lcjogRkMgPSAoKSA9PiB7XG4gIHJldHVybiA8Rml4ZWRQaG90by8+XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDb250YWluZXI7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ }),

/***/ "@emotion/styled":
/*!**********************************!*\
  !*** external "@emotion/styled" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@emotion/styled\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAZW1vdGlvbi9zdHlsZWRcIj9hYjA5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6IkBlbW90aW9uL3N0eWxlZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBlbW90aW9uL3N0eWxlZFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@emotion/styled\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ })

/******/ });