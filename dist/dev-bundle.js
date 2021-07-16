/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_EventFancyboxModal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/EventFancyboxModal */ \"./src/modules/EventFancyboxModal.js\");\n/* harmony import */ var _modules_ScrollTop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/ScrollTop */ \"./src/modules/ScrollTop.js\");\n/* harmony import */ var _modules_Timer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/Timer */ \"./src/modules/Timer.js\");\n/* harmony import */ var _modules_Slider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/Slider */ \"./src/modules/Slider.js\");\n\n\n\n\n\n //Обратный звонок и Вызов замерщика\n\n(0,_modules_EventFancyboxModal__WEBPACK_IMPORTED_MODULE_0__.default)(); //Плавная прокрутка\n\n(0,_modules_ScrollTop__WEBPACK_IMPORTED_MODULE_1__.default)(); //Таймер\n\n(0,_modules_Timer__WEBPACK_IMPORTED_MODULE_2__.default)('19 July 2021'); //Слайдер\n\n(0,_modules_Slider__WEBPACK_IMPORTED_MODULE_3__.default)();\n\n//# sourceURL=webpack://middle_diplom/./src/index.js?");

/***/ }),

/***/ "./src/modules/EventFancyboxModal.js":
/*!*******************************************!*\
  !*** ./src/modules/EventFancyboxModal.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar EventFancyboxModal = function EventFancyboxModal() {\n  var overlay = document.querySelector('.overlay'),\n      headerModal = document.querySelector('.header-modal'),\n      serviceModal = document.querySelector('.services-modal'),\n      blockModal = document.querySelector('.block-modal'),\n      buttonFancyboxModal = document.querySelectorAll('.fancyboxModal');\n  buttonFancyboxModal.forEach(function (item) {\n    var href = item.getAttribute('href');\n\n    if (href === '#callback' || href === '#order') {\n      item.addEventListener('click', function (event) {\n        event.preventDefault();\n        overlay.style.display = 'block';\n        headerModal.style.display = 'block';\n      });\n    } else if (href === '#application') {\n      item.addEventListener('click', function (event) {\n        event.preventDefault();\n        overlay.style.display = 'block';\n        serviceModal.style.display = 'block';\n      });\n    }\n  });\n  blockModal.addEventListener('click', function (event) {\n    var target = event.target;\n\n    if (target.classList.contains('header-modal__close')) {\n      overlay.style.display = 'none';\n      headerModal.style.display = 'none';\n    } else if (target.classList.contains('services-modal__close')) {\n      overlay.style.display = 'none';\n      serviceModal.style.display = 'none';\n    } else {\n      var targetCall = target.closest('.header-modal'),\n          targetService = target.closest('.services-modal');\n\n      if (!targetCall && !targetService) {\n        overlay.style.display = 'none';\n        headerModal.style.display = 'none';\n        serviceModal.style.display = 'none';\n      }\n    }\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EventFancyboxModal);\n\n//# sourceURL=webpack://middle_diplom/./src/modules/EventFancyboxModal.js?");

/***/ }),

/***/ "./src/modules/ScrollTop.js":
/*!**********************************!*\
  !*** ./src/modules/ScrollTop.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar ScrollTop = function ScrollTop() {\n  var scrollToTop = document.querySelector('.smooth-scroll'),\n      heightHead = document.getElementById('header').clientHeight,\n      heightNavigation = document.getElementById('navigation').clientHeight,\n      heightOffer = document.getElementById('offer').clientHeight,\n      height = heightHead + heightNavigation + heightOffer;\n\n  var blockScroll = function blockScroll() {\n    var scroll = window.pageYOffset;\n\n    if (scroll > height) {\n      scrollToTop.style.display = 'block';\n    } else if (scroll <= height) {\n      scrollToTop.style.display = 'none';\n    }\n  };\n\n  window.addEventListener('scroll', blockScroll);\n  scrollToTop.addEventListener('click', function () {\n    window.scrollTo({\n      top: 0,\n      behavior: \"smooth\"\n    });\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ScrollTop);\n\n//# sourceURL=webpack://middle_diplom/./src/modules/ScrollTop.js?");

/***/ }),

/***/ "./src/modules/Slider.js":
/*!*******************************!*\
  !*** ./src/modules/Slider.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar Slider = function Slider() {\n  var benefitsSlide = document.querySelectorAll('.benefits__item'),\n      benefitsSlider = document.getElementById('benefits');\n  var prevCountBenefits = 0,\n      nextCountBenefits = 0,\n      interval;\n\n  var getCount = function getCount() {\n    if (window.innerWidth < 576) {\n      var getCountBenefits = 2;\n      return getCountBenefits;\n    } else {\n      var _getCountBenefits = 3;\n      return _getCountBenefits;\n    }\n  };\n\n  var enumerationSlide = function enumerationSlide() {\n    benefitsSlide.forEach(function (item, i) {\n      if (i < nextCountBenefits && i >= prevCountBenefits) {\n        item.style.display = 'block';\n      } else {\n        item.style.display = 'none';\n      }\n    });\n  };\n\n  var getNextSlideDisplay = function getNextSlideDisplay() {\n    if (nextCountBenefits >= benefitsSlide.length) {\n      prevCountBenefits = 0;\n      nextCountBenefits = 0;\n    }\n\n    nextCountBenefits = nextCountBenefits + getCount();\n    enumerationSlide();\n    prevCountBenefits = nextCountBenefits;\n  };\n\n  var getPrevSlideDisplay = function getPrevSlideDisplay() {\n    nextCountBenefits = nextCountBenefits - getCount();\n    prevCountBenefits = nextCountBenefits - getCount();\n\n    if (prevCountBenefits < 0) {\n      nextCountBenefits = benefitsSlide.length;\n      var remainder = benefitsSlide.length % getCount();\n\n      if (remainder === 1) {\n        prevCountBenefits = benefitsSlide.length - 1;\n      } else if (remainder === 2) {\n        prevCountBenefits = benefitsSlide.length - 2;\n      } else {\n        prevCountBenefits = benefitsSlide.length - getCount();\n      }\n    }\n\n    enumerationSlide();\n    prevCountBenefits = nextCountBenefits;\n  };\n\n  var autoPlay = function autoPlay() {\n    getNextSlideDisplay();\n  };\n\n  var start = function start() {\n    interval = setInterval(autoPlay, 5000);\n  };\n\n  benefitsSlider.addEventListener('click', function (event) {\n    var target = event.target;\n\n    if (target.closest('.benefits__arrow--left')) {\n      getPrevSlideDisplay();\n    } else if (target.closest('.benefits__arrow--right')) {\n      getNextSlideDisplay();\n    }\n  });\n\n  var stopSlide = function stopSlide() {\n    clearInterval(interval);\n  };\n\n  benefitsSlider.addEventListener('mouseover', function (event) {\n    if (event.target.closest('.benefits__arrow') || event.target.closest('.benefits-wrap')) {\n      stopSlide();\n    }\n  });\n  benefitsSlider.addEventListener('mouseout', function (event) {\n    if (event.target.closest('.benefits__arrow') || event.target.closest('.benefits-wrap')) {\n      start();\n    }\n  });\n  getNextSlideDisplay();\n  start();\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Slider);\n\n//# sourceURL=webpack://middle_diplom/./src/modules/Slider.js?");

/***/ }),

/***/ "./src/modules/Timer.js":
/*!******************************!*\
  !*** ./src/modules/Timer.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction Timer(deadline) {\n  var timerDay = document.querySelectorAll('.count_1 span'),\n      timerHours = document.querySelectorAll('.count_2 span'),\n      timerMinutes = document.querySelectorAll('.count_3 span'),\n      timerSeconds = document.querySelectorAll('.count_4 span');\n\n  function getTimeRemainning() {\n    var dataStop = new Date(deadline).getTime(),\n        dateNow = new Date().getTime(),\n        timeRemaining = (dataStop - dateNow) / 1000,\n        seconds = Math.floor(timeRemaining % 60),\n        minutes = Math.floor(timeRemaining / 60 % 60),\n        hours = Math.floor(timeRemaining / 60 / 60 % 24),\n        day = Math.floor(timeRemaining / 60 / 60 / 24);\n    return {\n      timeRemaining: timeRemaining,\n      seconds: seconds,\n      minutes: minutes,\n      hours: hours,\n      day: day\n    };\n  }\n\n  var idSetInt = setInterval(function () {\n    var timer = getTimeRemainning();\n    timerDay.forEach(function (item) {\n      if (timer.day < 10) {\n        item.textContent = '0' + timer.day;\n      } else {\n        item.textContent = timer.day;\n      }\n    });\n    timerHours.forEach(function (item) {\n      if (timer.hours < 10) {\n        item.textContent = '0' + timer.hours;\n      } else {\n        item.textContent = timer.hours;\n      }\n    });\n    timerMinutes.forEach(function (item) {\n      if (timer.minutes < 10) {\n        item.textContent = '0' + timer.minutes;\n      } else {\n        item.textContent = timer.minutes;\n      }\n    });\n    timerSeconds.forEach(function (item) {\n      if (timer.seconds < 10) {\n        item.textContent = '0' + timer.seconds;\n      } else {\n        item.textContent = timer.seconds;\n      }\n    });\n\n    if (timer.timeRemaining < 0) {\n      clearInterval(idSetInt);\n      timerDay.forEach(function (item) {\n        item.textContent = '00';\n      });\n      timerHours.forEach(function (item) {\n        item.textContent = '00';\n      });\n      timerMinutes.forEach(function (item) {\n        item.textContent = '00';\n      });\n      timerSeconds.forEach(function (item) {\n        item.textContent = '00';\n      });\n    }\n  }, 1000);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Timer);\n\n//# sourceURL=webpack://middle_diplom/./src/modules/Timer.js?");

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
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;