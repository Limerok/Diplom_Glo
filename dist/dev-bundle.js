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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_EventFancyboxModal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/EventFancyboxModal */ \"./src/modules/EventFancyboxModal.js\");\n/* harmony import */ var _modules_ScrollTop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/ScrollTop */ \"./src/modules/ScrollTop.js\");\n/* harmony import */ var _modules_Timer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/Timer */ \"./src/modules/Timer.js\");\n/* harmony import */ var _modules_Slider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/Slider */ \"./src/modules/Slider.js\");\n/* harmony import */ var _modules_ertificate__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/Сertificate */ \"./src/modules/Сertificate.js\");\n\n\n\n\n\n\n //Обратный звонок и Вызов замерщика\n\n(0,_modules_EventFancyboxModal__WEBPACK_IMPORTED_MODULE_0__.default)(); //Плавная прокрутка\n\n(0,_modules_ScrollTop__WEBPACK_IMPORTED_MODULE_1__.default)(); //Таймер\n\n(0,_modules_Timer__WEBPACK_IMPORTED_MODULE_2__.default)('19 July 2021'); //Слайдер\n\n(0,_modules_Slider__WEBPACK_IMPORTED_MODULE_3__.default)(); //Сертификаты\n\n(0,_modules_ertificate__WEBPACK_IMPORTED_MODULE_4__.default)();\n\n//# sourceURL=webpack://middle_diplom/./src/index.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar Slider = function Slider() {\n  /* const benefitsSlide = document.querySelectorAll('.benefits__item'),\r\n      benefitsSlider = document.getElementById('benefits');\r\n  let prevCountBenefits = 0,\r\n      nextCountBenefits = 0,\r\n      interval;\r\n    const getCount = () => {\r\n      if (window.innerWidth <  576) {\r\n          const getCountBenefits = 2;\r\n          return getCountBenefits;\r\n      } else {\r\n          const getCountBenefits = 3;\r\n          return getCountBenefits;\r\n      }\r\n  };\r\n    const enumerationSlide = () => {\r\n      benefitsSlide.forEach((item, i) => {\r\n          if (i < nextCountBenefits && i >= prevCountBenefits) {\r\n              item.style.display = 'block';\r\n          } else {\r\n              item.style.display = 'none';\r\n          }\r\n      });\r\n  };\r\n    const getNextSlideDisplay = () => {\r\n      if (nextCountBenefits >= benefitsSlide.length) {\r\n          prevCountBenefits = 0;\r\n          nextCountBenefits = 0;\r\n      }\r\n      nextCountBenefits = nextCountBenefits + getCount();\r\n      enumerationSlide();\r\n      prevCountBenefits = nextCountBenefits;\r\n  };\r\n    const getPrevSlideDisplay = () => {\r\n      nextCountBenefits = nextCountBenefits - getCount();\r\n      prevCountBenefits = nextCountBenefits - getCount();\r\n      if (prevCountBenefits < 0) {\r\n          nextCountBenefits = benefitsSlide.length;\r\n            const remainder = benefitsSlide.length % getCount();\r\n          if (remainder === 1) {\r\n              prevCountBenefits = benefitsSlide.length - 1;\r\n          } else if (remainder  === 2) {\r\n              prevCountBenefits = benefitsSlide.length - 2;\r\n          } else {\r\n              prevCountBenefits = benefitsSlide.length - getCount();\r\n          }\r\n          \r\n      }\r\n      enumerationSlide();\r\n      prevCountBenefits = nextCountBenefits;\r\n  };\r\n    const autoPlay = () => {\r\n      getNextSlideDisplay();\r\n  };\r\n    const start = () => {\r\n      interval = setInterval(autoPlay, 5000);\r\n  };\r\n    benefitsSlider.addEventListener('click', event => {\r\n      let target = event.target;\r\n        if (target.closest('.benefits__arrow--left')) {\r\n          getPrevSlideDisplay();\r\n      } else if (target.closest('.benefits__arrow--right')) {\r\n          getNextSlideDisplay();\r\n      }\r\n    });\r\n    const stopSlide = () => {\r\n      clearInterval(interval);\r\n  };\r\n    benefitsSlider.addEventListener('mouseover', event => {\r\n      if (event.target.closest('.benefits__arrow') || event.target.closest('.benefits-wrap')) {\r\n          stopSlide();\r\n      }\r\n  });\r\n  benefitsSlider.addEventListener('mouseout', event => {\r\n      if (event.target.closest('.benefits__arrow') || event.target.closest('.benefits-wrap')) {\r\n          start();\r\n      }\r\n  });\r\n  \r\n  getNextSlideDisplay();\r\n  start(); */\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Slider);\n\n//# sourceURL=webpack://middle_diplom/./src/modules/Slider.js?");

/***/ }),

/***/ "./src/modules/Timer.js":
/*!******************************!*\
  !*** ./src/modules/Timer.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction Timer(deadline) {\n  var timerDay = document.querySelectorAll('.count_1 span'),\n      timerHours = document.querySelectorAll('.count_2 span'),\n      timerMinutes = document.querySelectorAll('.count_3 span'),\n      timerSeconds = document.querySelectorAll('.count_4 span');\n\n  function getTimeRemainning() {\n    var dataStop = new Date(deadline).getTime(),\n        dateNow = new Date().getTime(),\n        timeRemaining = (dataStop - dateNow) / 1000,\n        seconds = Math.floor(timeRemaining % 60),\n        minutes = Math.floor(timeRemaining / 60 % 60),\n        hours = Math.floor(timeRemaining / 60 / 60 % 24),\n        day = Math.floor(timeRemaining / 60 / 60 / 24);\n    return {\n      timeRemaining: timeRemaining,\n      seconds: seconds,\n      minutes: minutes,\n      hours: hours,\n      day: day\n    };\n  }\n\n  var idSetInt = setInterval(function () {\n    var timer = getTimeRemainning();\n    timerDay.forEach(function (item) {\n      if (timer.day < 10) {\n        item.textContent = '0' + timer.day;\n      } else {\n        item.textContent = timer.day;\n      }\n    });\n    timerHours.forEach(function (item) {\n      if (timer.hours < 10) {\n        item.textContent = '0' + timer.hours;\n      } else {\n        item.textContent = timer.hours;\n      }\n    });\n    timerMinutes.forEach(function (item) {\n      if (timer.minutes < 10) {\n        item.textContent = '0' + timer.minutes;\n      } else {\n        item.textContent = timer.minutes;\n      }\n    });\n    timerSeconds.forEach(function (item) {\n      if (timer.seconds < 10) {\n        item.textContent = '0' + timer.seconds;\n      } else {\n        item.textContent = timer.seconds;\n      }\n    });\n\n    if (timer.timeRemaining < 0) {\n      clearInterval(idSetInt);\n      timerDay.forEach(function (item) {\n        item.textContent = '00';\n      });\n      timerHours.forEach(function (item) {\n        item.textContent = '00';\n      });\n      timerMinutes.forEach(function (item) {\n        item.textContent = '00';\n      });\n      timerSeconds.forEach(function (item) {\n        item.textContent = '00';\n      });\n    }\n  }, 1000);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Timer);\n\n//# sourceURL=webpack://middle_diplom/./src/modules/Timer.js?");

/***/ }),

/***/ "./src/modules/Сertificate.js":
/*!************************************!*\
  !*** ./src/modules/Сertificate.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar Certificate = function Certificate() {\n  var blockSertificate = document.getElementById('documents'),\n      modalDocument = document.querySelector('.modal-documents'),\n      imgCertificat = document.querySelector('.img-modal'),\n      overlayDocument = document.querySelector('.overlay-document');\n  blockSertificate.addEventListener('click', function (event) {\n    event.preventDefault();\n    var target = event.target;\n\n    if (target.closest('.sertificate-document')) {\n      var href = target.closest('.sertificate-document').getAttribute('href');\n      console.log(href);\n      overlayDocument.style.display = 'block';\n      modalDocument.style.display = 'block';\n      imgCertificat.setAttribute('src', href);\n    }\n  });\n  modalDocument.addEventListener('click', function (event) {\n    event.preventDefault();\n    var target = event.target;\n\n    if (target.closest('.header-modal__close')) {\n      modalDocument.style.display = 'none';\n    } else if (target.matches('.overlay-document')) {\n      modalDocument.style.display = 'none';\n    }\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Certificate);\n\n//# sourceURL=webpack://middle_diplom/./src/modules/%D0%A1ertificate.js?");

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