/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/scripts/sections/header.js":
/*!****************************************!*\
  !*** ./src/scripts/sections/header.js ***!
  \****************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_sections_header_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../styles/sections/header.scss */ \"./src/styles/sections/header.scss\");\n/* harmony import */ var _utils_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/index.js */ \"./src/scripts/utils/index.js\");\n/* harmony import */ var _snippets_drop_menu_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../snippets/drop-menu.js */ \"./src/scripts/snippets/drop-menu.js\");\n\n\n\nconst SELECTORS = {\n  header: '.js-header',\n  menuTrigger: '.js-header-trigger'\n};\nconst CLASSNAMES = {\n  bodyOpenMenuState: 'body--open_menu_state',\n  headerScrollState: 'header--scroll_state',\n  bodyScrollPos: 'header--pos_state'\n};\nconst header = () => {\n  const $body = document.body;\n  const $header = document.querySelector(SELECTORS.header);\n  const $announcementBar = document.querySelector('[data-announcement-bar]');\n  const $menuTriggers = document.querySelectorAll(SELECTORS.menuTrigger);\n  const $mainWrap = document.querySelector('.main');\n  let isMenuOpen = false;\n  let prevScrollPos = window.scrollY;\n  const headerHeight = $header.clientHeight;\n  const annonsmentBarHeight = $announcementBar.clientHeight;\n  const headerGroup = headerHeight + annonsmentBarHeight;\n\n  // console.log(headerGroup);\n\n  const handleTriggerClick = () => {\n    if (!isMenuOpen) {\n      $body.classList.add(CLASSNAMES.bodyOpenMenuState);\n      isMenuOpen = true;\n    } else {\n      $body.classList.remove(CLASSNAMES.bodyOpenMenuState);\n      isMenuOpen = false;\n    }\n  };\n  const headerScroll = scrollY => {\n    if (scrollY > headerGroup && !$header.classList.contains(CLASSNAMES.headerScrollState)) {\n      $header.classList.add(CLASSNAMES.headerScrollState);\n      $mainWrap.classList.add(CLASSNAMES.headerScrollState);\n      $header.style.opacity = 0;\n      setTimeout(() => {\n        $header.style.opacity = 1;\n      }, 300);\n    } else if (scrollY <= annonsmentBarHeight && $header.classList.contains(CLASSNAMES.headerScrollState) || scrollY == 0) {\n      $header.classList.remove(CLASSNAMES.headerScrollState);\n      $mainWrap.classList.remove(CLASSNAMES.headerScrollState);\n    }\n    if (prevScrollPos < window.scrollY && scrollY > headerGroup) {\n      $header.classList.add(CLASSNAMES.bodyScrollPos);\n    } else {\n      $header.classList.remove(CLASSNAMES.bodyScrollPos);\n    }\n    prevScrollPos = window.scrollY;\n  };\n  const initializeEventListeners = () => {\n    if (!(0,_utils_index_js__WEBPACK_IMPORTED_MODULE_1__.exist)($menuTriggers)) return;\n    $menuTriggers.forEach($trigger => {\n      $trigger.addEventListener('click', () => {\n        handleTriggerClick();\n      });\n    });\n  };\n  if (!$header) return;\n  (0,_utils_index_js__WEBPACK_IMPORTED_MODULE_1__.onWindowScroll)(headerScroll);\n  initializeEventListeners();\n};\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n  header();\n  (0,_snippets_drop_menu_js__WEBPACK_IMPORTED_MODULE_2__.drop)();\n});\n\n//# sourceURL=webpack://project_name/./src/scripts/sections/header.js?\n}");

/***/ }),

/***/ "./src/scripts/snippets/drop-menu.js":
/*!*******************************************!*\
  !*** ./src/scripts/snippets/drop-menu.js ***!
  \*******************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   drop: function() { return /* binding */ drop; }\n/* harmony export */ });\n/* harmony import */ var _utils_constants_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/constants.js */ \"./src/scripts/utils/constants.js\");\n/* harmony import */ var _utils_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/index.js */ \"./src/scripts/utils/index.js\");\n\n\nconst drop = () => {\n  const SELECTORS = {\n    drop: '.js-drop-menu'\n  };\n  let isClick = false;\n  const handleStyleBody = dropBody => {\n    (0,_utils_index_js__WEBPACK_IMPORTED_MODULE_1__.onWindowResize)(() => {\n      if (_utils_constants_js__WEBPACK_IMPORTED_MODULE_0__.BREAKPOINTS.mediaPoint2 > window.innerWidth) {\n        dropBody.style.maxHeight = dropBody.scrollHeight + 'px';\n      }\n    });\n  };\n  const handleRemoveActiveState = dropBody => {\n    const $drops = document.querySelectorAll(SELECTORS.drop);\n    if (!$drops.length) return;\n    $drops.forEach($drop => {\n      $drop.classList.remove('active');\n      const $spoilerBody = $drop.children[$drop.children.length - 1];\n      $spoilerBody.style.maxHeight = null;\n    });\n  };\n  const handleActiveState = e => {\n    const targetEl = e.target;\n    const $drop = targetEl.closest(SELECTORS.drop);\n    if (!$drop) {\n      handleRemoveActiveState();\n      isClick = false;\n      return;\n    }\n    const $spoilerBody = $drop.children[$drop.children.length - 1];\n    const $spoilerHead = $drop.children[0];\n    handleRemoveActiveState();\n    if (!isClick) {\n      $drop.classList.add('active');\n      handleStyleBody($spoilerBody);\n      isClick = true;\n    } else {\n      handleRemoveActiveState();\n      $spoilerBody.style.maxHeight = null;\n      isClick = false;\n    }\n  };\n  window.addEventListener('click', handleActiveState);\n};\n\n\n//# sourceURL=webpack://project_name/./src/scripts/snippets/drop-menu.js?\n}");

/***/ }),

/***/ "./src/scripts/utils/constants.js":
/*!****************************************!*\
  !*** ./src/scripts/utils/constants.js ***!
  \****************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   BREAKPOINTS: function() { return /* binding */ BREAKPOINTS; }\n/* harmony export */ });\nconst BREAKPOINTS = {\n  mediaPoint1: 1024,\n  mediaPoint2: 768,\n  mediaPoint3: 480,\n  mediaPoint4: 375\n};\n\n//# sourceURL=webpack://project_name/./src/scripts/utils/constants.js?\n}");

/***/ }),

/***/ "./src/scripts/utils/index.js":
/*!************************************!*\
  !*** ./src/scripts/utils/index.js ***!
  \************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   calcMobileRemValue: function() { return /* binding */ calcMobileRemValue; },\n/* harmony export */   calcRemValue: function() { return /* binding */ calcRemValue; },\n/* harmony export */   changeElementClassByClassContains: function() { return /* binding */ changeElementClassByClassContains; },\n/* harmony export */   changeElementClassByStatus: function() { return /* binding */ changeElementClassByStatus; },\n/* harmony export */   debounce: function() { return /* binding */ debounce; },\n/* harmony export */   debounceImmediate: function() { return /* binding */ debounceImmediate; },\n/* harmony export */   detectUsersOS: function() { return /* binding */ detectUsersOS; },\n/* harmony export */   documentReady: function() { return /* binding */ documentReady; },\n/* harmony export */   exist: function() { return /* binding */ exist; },\n/* harmony export */   getObjectOfElements: function() { return /* binding */ getObjectOfElements; },\n/* harmony export */   getRandom: function() { return /* binding */ getRandom; },\n/* harmony export */   getRandomInt: function() { return /* binding */ getRandomInt; },\n/* harmony export */   getWindowSize: function() { return /* binding */ getWindowSize; },\n/* harmony export */   isFunction: function() { return /* binding */ isFunction; },\n/* harmony export */   isTouchDevice: function() { return /* binding */ isTouchDevice; },\n/* harmony export */   onWindowChangeOrientation: function() { return /* binding */ onWindowChangeOrientation; },\n/* harmony export */   onWindowResize: function() { return /* binding */ onWindowResize; },\n/* harmony export */   onWindowScroll: function() { return /* binding */ onWindowScroll; },\n/* harmony export */   page: function() { return /* binding */ page; },\n/* harmony export */   pageLoad: function() { return /* binding */ pageLoad; },\n/* harmony export */   priceTransform: function() { return /* binding */ priceTransform; }\n/* harmony export */ });\nconst exist = elementOrArray => {\n  if (!elementOrArray && elementOrArray !== 0) return false;\n  if (elementOrArray.length === 0) {\n    return false;\n  }\n  return true;\n};\nfunction debounce(delay, fn) {\n  let timerId;\n  return (...args) => {\n    if (timerId) {\n      clearTimeout(timerId);\n    }\n    timerId = setTimeout(() => {\n      fn(...args);\n      timerId = null;\n    }, delay);\n  };\n}\nfunction debounceImmediate(delay, fn) {\n  let fired = false;\n  return (...args) => {\n    if (!fired) {\n      fn(...args);\n      fired = true;\n      setTimeout(() => {\n        fired = false;\n      }, delay);\n    }\n  };\n}\nconst isTouchDevice = () => {\n  return 'ontouchstart' in window || window.navigator.maxTouchPoints > 0 || window.navigator.msMaxTouchPoints > 0;\n};\nconst calcRemValue = ({\n  windowWidth,\n  windowHeight\n}) => {\n  const remValue = windowWidth * 0.5625 > windowHeight ? windowHeight / 800 * 10 : windowWidth / 1440 * 10;\n  document.documentElement.style.setProperty('--rem', `${remValue}px`);\n};\nconst calcMobileRemValue = ({\n  windowHeight\n}) => {\n  const mobileRemValue = windowHeight / 800 * 10;\n  document.documentElement.style.setProperty('--mobile-rem', `${mobileRemValue}px`);\n};\nconst getRandomInt = (min, max) => {\n  return Math.floor(Math.random() * (max - min)) + min;\n};\nconst getRandom = (min, max) => {\n  return Math.random() * (max - min) + min;\n};\nfunction isFunction(func) {\n  return func instanceof Function;\n}\nfunction getWindowSize() {\n  const windowWidth = window.innerWidth;\n  const windowHeight = window.innerHeight;\n  return {\n    windowWidth,\n    windowHeight\n  };\n}\nconst onWindowResize = (cb, delay = 15) => {\n  if (!cb || typeof cb !== 'function') return;\n  const handleResize = debounce(delay, () => {\n    cb();\n  });\n  window.addEventListener('resize', handleResize);\n  handleResize();\n};\nconst detectUsersOS = () => {\n  if (window.navigator.userAgent.indexOf('Win') !== -1) return 'Windows OS';\n  if (window.navigator.userAgent.indexOf('Mac') !== -1) return 'Macintosh';\n  if (window.navigator.userAgent.indexOf('Linux') !== -1) return 'Linux OS';\n  if (window.navigator.userAgent.indexOf('Android') !== -1) return 'Android OS';\n  if (window.navigator.userAgent.indexOf('like Mac') !== -1) return 'iOS';\n  return null;\n};\nconst onWindowChangeOrientation = cb => {\n  if (!cb && !isFunction(cb) || !isTouchDevice()) return;\n  let {\n    windowWidth\n  } = getWindowSize();\n  const handleResize = () => {\n    const {\n      windowWidth: newWindowWidth\n    } = getWindowSize();\n    if (windowWidth !== newWindowWidth) cb();\n    windowWidth = newWindowWidth;\n  };\n  window.addEventListener('resize', debounce(100, handleResize));\n};\nconst onWindowScroll = cb => {\n  if (!cb && !isFunction(cb)) return;\n  const handleScroll = () => {\n    cb(window.pageYOffset);\n  };\n  window.addEventListener('scroll', debounce(15, handleScroll));\n  handleScroll();\n};\nconst documentReady = cb => {\n  if (!cb && !isFunction(cb)) return;\n  document.addEventListener('DOMContentLoaded', cb);\n};\nconst pageLoad = cb => {\n  if (!cb && !isFunction(cb)) return;\n  window.addEventListener('load', () => {\n    window.loaded = true;\n    cb();\n    window.onWindowLoadCallbacks?.forEach(cbLocal => {\n      if (!cbLocal && !isFunction(cbLocal)) return;\n      cbLocal();\n    });\n    window.onWindowLoadCallbacks = [];\n  });\n};\nconst page = cb => {\n  return cb;\n  // if (!cb && !isFunction(cb)) return;\n\n  // if (window.loaded) {\n  // \tcb();\n  // } else {\n  // \tif (!window.onWindowLoadCallbacks) window.onWindowLoadCallbacks = [];\n  // \twindow.onWindowLoadCallbacks.push(cb);\n  // }\n};\nconst changeElementClassByStatus = (element, status, useClass) => {\n  if (!element) return console.log(element, \"changeElementClassByStatus, element's use class is \" + useClass);\n  if (status) element.classList.add(useClass);else element.classList.remove(useClass);\n};\nconst changeElementClassByClassContains = (element, useClass) => {\n  if (!element) return console.log(element, \"changeElementClassByClassContains, element's use class is \" + useClass);\n  if (element.classList.contains(useClass)) element.classList.remove(useClass);else element.classList.add(useClass);\n};\nconst getObjectOfElements = (objectOfSelectors, byParent = false) => {\n  let fountByElement = document;\n  let parentKey;\n  const getResult = key => {\n    const result = document.querySelectorAll(objectOfSelectors[key]);\n    return result.length > 1 ? result : result[0];\n  };\n  if (byParent && Object.values(objectOfSelectors)[0]) {\n    fountByElement = document.querySelector(Object.values(objectOfSelectors)[0]);\n    parentKey = Object.keys(objectOfSelectors)[0];\n    Object.values(objectOfSelectors)[0] = fountByElement;\n  }\n  Object.keys(objectOfSelectors).forEach(key => {\n    if (key === parentKey) objectOfSelectors[key] = getResult(key);else objectOfSelectors[key] = getResult(key);\n  });\n  return objectOfSelectors;\n};\nconst priceTransform = (price, withoutCents = false) => {\n  if (withoutCents) return \"€\" + (price / 100).toFixed(0).replace(\".\", \",\");else return \"€\" + (price / 100).toFixed(2).replace(\".\", \",\");\n};\n\n//# sourceURL=webpack://project_name/./src/scripts/utils/index.js?\n}");

/***/ }),

/***/ "./src/styles/sections/header.scss":
/*!*****************************************!*\
  !*** ./src/styles/sections/header.scss ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://project_name/./src/styles/sections/header.scss?\n}");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/scripts/sections/header.js");
/******/ 	
/******/ })()
;