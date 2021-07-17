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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\n\nfunction _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== \"undefined\" && o[Symbol.iterator] || o[\"@@iterator\"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === \"number\") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it[\"return\"] != null) it[\"return\"](); } finally { if (didErr) throw err; } } }; }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar Slider = function Slider() {\n  var SliderCarousel = /*#__PURE__*/function () {\n    function SliderCarousel(_ref) {\n      var main = _ref.main,\n          wrap = _ref.wrap,\n          prev = _ref.prev,\n          _ref$infinity = _ref.infinity,\n          infinity = _ref$infinity === void 0 ? false : _ref$infinity,\n          next = _ref.next,\n          _ref$position = _ref.position,\n          position = _ref$position === void 0 ? 0 : _ref$position,\n          _ref$slidesToShow = _ref.slidesToShow,\n          slidesToShow = _ref$slidesToShow === void 0 ? 3 : _ref$slidesToShow,\n          _ref$responsive = _ref.responsive,\n          responsive = _ref$responsive === void 0 ? [] : _ref$responsive;\n\n      _classCallCheck(this, SliderCarousel);\n\n      if (!main || !wrap) {\n        console.warn('slider: необходимо 2 свойства, \"main\" и \"wrap\"');\n      }\n\n      this.main = document.querySelector(main);\n      this.wrap = document.querySelector(wrap);\n      this.slides = document.querySelector(wrap).children;\n      this.next = document.querySelector(next);\n      this.prev = document.querySelector(prev);\n      this.slidesToShow = slidesToShow;\n      this.options = {\n        position: position,\n        infinity: infinity,\n        widthSlide: Math.floor(100 / this.slidesToShow)\n      };\n      this.responsive = responsive;\n    }\n\n    _createClass(SliderCarousel, [{\n      key: \"init\",\n      value: function init() {\n        this.addCarouselClass();\n        this.addCarouselStyle();\n\n        if (this.prev && this.next) {\n          this.controlSlider();\n        } else {\n          this.addArrow();\n          this.controlSlider();\n        }\n\n        if (this.responsive) {\n          this.responseInit();\n        }\n      }\n    }, {\n      key: \"addCarouselClass\",\n      value: function addCarouselClass() {\n        this.main.classList.add('carousel-slider');\n        this.wrap.classList.add('carousel-slider__wrap');\n\n        var _iterator = _createForOfIteratorHelper(this.slides),\n            _step;\n\n        try {\n          for (_iterator.s(); !(_step = _iterator.n()).done;) {\n            var item = _step.value;\n            item.classList.add('carousel-slider__item');\n          }\n        } catch (err) {\n          _iterator.e(err);\n        } finally {\n          _iterator.f();\n        }\n      }\n    }, {\n      key: \"addCarouselStyle\",\n      value: function addCarouselStyle() {\n        console.log(this.main.classList[0]);\n        this.main.style.overflow = 'hidden';\n        this.wrap.style.cssText = \"\\n                display: flex !important;\\n                transition: transform 0.5s !important;\\n                will-change: transform !important;\\n            \";\n        /* this.slides.forEach((item) => {\r\n            item.style.cssText = `\r\n                flex: 0 0 ${this.options.widthSlide}% !important;\r\n                margin: auto 0 !important;\r\n            `;\r\n        }); */\n\n        var _iterator2 = _createForOfIteratorHelper(this.slides),\n            _step2;\n\n        try {\n          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {\n            var item = _step2.value;\n            item.style.cssText = \"\\n                    flex: 0 0 \".concat(this.options.widthSlide, \"% !important;\\n                    margin: auto 0 !important;\\n                \");\n          }\n          /* this.slides.style.cssText = `\r\n              flex: 0 0 ${this.options.widthSlide}% !important;\r\n              margin: auto 0 !important;\r\n          `; */\n\n          /* let style = document.getElementById('sliderCarousel-style');\r\n          if (!style) {\r\n              style = document.createElement('style');\r\n              style.id = 'sliderCarousel-style';\r\n          }\r\n          style.textContent = `\r\n              .${this.main.classList[0]}{\r\n                  overflow: hidden !important;\r\n              }\r\n              .carousel-slider__wrap {\r\n                  display: flex !important;\r\n                  transition: transform 0.5s !important;\r\n                  will-change: transform !important;\r\n              }\r\n              .carousel-slider__item {\r\n                  flex: 0 0 ${this.options.widthSlide}% !important;\r\n                  margin: auto 0 !important;\r\n              }\r\n          `;\r\n          document.head.appendChild(style); */\n\n        } catch (err) {\n          _iterator2.e(err);\n        } finally {\n          _iterator2.f();\n        }\n      }\n    }, {\n      key: \"controlSlider\",\n      value: function controlSlider() {\n        this.prev.addEventListener('click', this.prevSlider.bind(this));\n        this.next.addEventListener('click', this.nextSlider.bind(this));\n      }\n    }, {\n      key: \"prevSlider\",\n      value: function prevSlider() {\n        if (this.options.infinity || this.options.position > 0) {\n          --this.options.position;\n          console.log(this.options.position);\n\n          if (this.options.position < 0) {\n            this.options.position = this.slides.length - this.slidesToShow;\n          }\n\n          this.wrap.style.transform = \"translateX(-\".concat(this.options.position * this.options.widthSlide, \"%)\");\n        }\n      }\n    }, {\n      key: \"nextSlider\",\n      value: function nextSlider() {\n        if (this.options.infinity || this.options.position < this.slides.length - this.slidesToShow) {\n          ++this.options.position;\n          console.log(this.options.position);\n\n          if (this.options.position > this.slides.length - this.slidesToShow) {\n            this.options.position = 0;\n          }\n\n          this.wrap.style.transform = \"translateX(-\".concat(this.options.position * this.options.widthSlide, \"%)\");\n        }\n      }\n    }, {\n      key: \"addArrow\",\n      value: function addArrow() {\n        this.prev = document.createElement('button');\n        this.next = document.createElement('button');\n        this.prev.className = 'carousel-slider__prev';\n        this.next.className = 'carousel-slider__next';\n        this.main.appendChild(this.prev);\n        this.main.appendChild(this.next);\n        var style = document.createElement('style');\n        style.textContent = \"\\n               .carousel-slider__prev {\\n                margin: 0 10px;\\n                   border: 20px solid transparent;\\n                   background: transparent;\\n                   border-right-color: #19b5fe;\\n\\n               }\\n               .carousel-slider__next{\\n                   margin: 0 10px;\\n                   border: 20px solid transparent;\\n                   background: transparent;\\n                   border-left-color: #19b5fe\\n               }\\n               .carousel-slider__prev:hover,\\n               .carousel-slider__prev:focus,\\n               .carousel-slider__next:hover,\\n               .carousel-slider__next:focus {\\n                    background: transparent;\\n                    outline: transparent;\\n               }\\n            \";\n        document.head.appendChild(style);\n      }\n    }, {\n      key: \"responseInit\",\n      value: function responseInit() {\n        var _this = this;\n\n        var slidesToShowDefault = this.slidesToShow;\n        var allRespone = this.responsive.map(function (item) {\n          return item.breakPoint;\n        });\n        var mmaxResponse = Math.max.apply(Math, _toConsumableArray(allRespone));\n\n        var checkResponse = function checkResponse() {\n          var widthWindow = document.documentElement.clientWidth;\n\n          if (widthWindow < mmaxResponse) {\n            for (var i = 0; i < allRespone.length; i++) {\n              if (widthWindow < allRespone[i]) {\n                _this.slidesToShow = _this.responsive[i].slidesToShow;\n                _this.options.widthSlide = Math.floor(100 / _this.slidesToShow);\n\n                _this.addCarouselStyle();\n              }\n            }\n          } else {\n            _this.slidesToShow = slidesToShowDefault;\n            _this.options.widthSlide = Math.floor(100 / _this.slidesToShow);\n\n            _this.addCarouselStyle();\n          }\n        };\n\n        checkResponse();\n        window.addEventListener('resize', checkResponse);\n      }\n    }]);\n\n    return SliderCarousel;\n  }();\n\n  var carouselBenefits = new SliderCarousel({\n    main: '.benefits-inner',\n    wrap: '.benefits-wrap',\n    prev: '.benefits__arrow--left',\n    next: '.benefits__arrow--right',\n    slidesToShow: 3,\n    infinity: true,\n    responsive: [{\n      breakPoint: 768,\n      slidesToShow: 2\n    }, {\n      breakPoint: 576,\n      slidesToShow: 1\n    }]\n  });\n  carouselBenefits.init();\n  var carouselService = new SliderCarousel({\n    main: '.service-slider-contant',\n    wrap: '.service-slider',\n    prev: '.services__arrow--left',\n    next: '.services__arrow--right',\n    slidesToShow: 2,\n    infinity: true,\n    responsive: [{\n      breakPoint: 1200,\n      slidesToShow: 1\n    }]\n  });\n  carouselService.init();\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Slider);\n\n//# sourceURL=webpack://middle_diplom/./src/modules/Slider.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar Certificate = function Certificate() {\n  var blockSertificate = document.getElementById('documents'),\n      modalDocument = document.querySelector('.modal-documents'),\n      imgCertificat = document.querySelector('.img-modal'),\n      overlayDocument = document.querySelector('.overlay-document');\n  blockSertificate.addEventListener('click', function (event) {\n    event.preventDefault();\n    var target = event.target;\n\n    if (target.closest('.sertificate-document')) {\n      var href = target.closest('.sertificate-document').getAttribute('href');\n      overlayDocument.style.display = 'block';\n      modalDocument.style.display = 'block';\n      imgCertificat.setAttribute('src', href);\n    }\n  });\n  modalDocument.addEventListener('click', function (event) {\n    event.preventDefault();\n    var target = event.target;\n\n    if (target.closest('.header-modal__close')) {\n      modalDocument.style.display = 'none';\n    } else if (target.matches('.overlay-document')) {\n      modalDocument.style.display = 'none';\n    }\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Certificate);\n\n//# sourceURL=webpack://middle_diplom/./src/modules/%D0%A1ertificate.js?");

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