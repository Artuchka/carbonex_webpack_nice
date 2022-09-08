"use strict";
(self["webpackChunkcarbonex_webpack_3"] = self["webpackChunkcarbonex_webpack_3"] || []).push([["about"],{

/***/ "./src/pages/about/about.html":
/*!************************************!*\
  !*** ./src/pages/about/about.html ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/html-loader/dist/runtime/getUrl.js */ "./node_modules/html-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___HTML_LOADER_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../../img/about.png */ "./src/img/about.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../../img/about_2.png */ "./src/img/about_2.png"), __webpack_require__.b);
// Module
var ___HTML_LOADER_REPLACEMENT_0___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_0___);
var ___HTML_LOADER_REPLACEMENT_1___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_1___);
var code = "<!DOCTYPE html>\n<html lang=\"en\">\n\n<head>\n    <meta charset=\"UTF-8\">\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n    <title>about</title>\n</head>\n\n<body>\n\n    <header class=\"header\"></header>\n\n    <main class=\"main\">\n\n        <section class=\"section section-about\">\n            <div class=\"section__title\">О компании</div>\n            <div class=\"section__image\">\n                <img src=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\" alt=\"\">\n                <div class=\"bg\"></div>\n            </div>\n            <div class=\"section__text\">\n                <p>\n                    Имеется спорная точка зрения, гласящая примерно следующее: действия представителей оппозиции\n                    набирают популярность среди определенных слоев населения, а значит, должны быть заблокированы в\n                    рамках своих собственных рациональных ограничений!\n                </p>\n                <p>Сложно сказать, почему активно развивающиеся страны третьего мира формируют глобальную экономическую\n                    сеть и при этом — ассоциативно распределены по отраслям.</p>\n                <p> Однозначно, сделанные на базе интернет-аналитики выводы, которые представляют собой яркий пример\n                    континентально-европейского типа политической культуры, будут объявлены нарушающими общечеловеческие\n                    нормы этики и морали.</p>\n            </div>\n            <div class=\"section__image\">\n                <img src=\"" + ___HTML_LOADER_REPLACEMENT_1___ + "\" alt=\"\">\n                <div class=\"bg\"></div>\n            </div>\n            <div class=\"section__text\">\n                <p>\n                    Имеется спорная точка зрения, гласящая примерно следующее: действия представителей оппозиции\n                    набирают популярность среди определенных слоев населения, а значит, должны быть заблокированы в\n                    рамках своих собственных рациональных ограничений!\n                </p>\n                <p>Сложно сказать, почему активно развивающиеся страны третьего мира формируют глобальную экономическую\n                    сеть и при этом — ассоциативно распределены по отраслям.</p>\n                <p> Однозначно, сделанные на базе интернет-аналитики выводы, которые представляют собой яркий пример\n                    континентально-европейского типа политической культуры, будут объявлены нарушающими общечеловеческие\n                    нормы этики и морали.</p>\n            </div>\n        </section>\n\n        <section class=\"section section-about\">\n            <div class=\"section__title\">сОТРУДНИЧЕСТВО</div>\n            <div class=\"section__text\">\n                CARBONEX - является лидером в области фитрованных материалов. Наши передовые материалы используются\n                практически во всех отраслях промышленности.\n            </div>\n            <div class=\"slider\" data-slider>\n            </div>\n\n        </section>\n\n    </main>\n\n    <footer class=\"footer\"></footer>\n</body>\n\n</html>";
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);

/***/ }),

/***/ "./node_modules/html-loader/dist/runtime/getUrl.js":
/*!*********************************************************!*\
  !*** ./node_modules/html-loader/dist/runtime/getUrl.js ***!
  \*********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  }

  if (!url) {
    return url;
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = String(url.__esModule ? url.default : url);

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  }

  if (options.maybeNeedQuotes && /[\t\n\f\r "'=<>`]/.test(url)) {
    return "\"".concat(url, "\"");
  }

  return url;
};

/***/ }),

/***/ "./src/pages/about/about.js":
/*!**********************************!*\
  !*** ./src/pages/about/about.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_about_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/about.scss */ "./src/pages/styles/about.scss");
/* harmony import */ var _about_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./about.html */ "./src/pages/about/about.html");
/* harmony import */ var _img_lada_logo_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../img/lada_logo.png */ "./src/img/lada_logo.png");




const slider = document.querySelector("[data-slider]")
const animationDuration = 5000
const slideAmount = 4
console.log(_img_lada_logo_png__WEBPACK_IMPORTED_MODULE_2__)

startSlider()

function startSlider() {
	for (let i = 0; i < 4; i++) {
		setTimeout(() => {
			addEl(_img_lada_logo_png__WEBPACK_IMPORTED_MODULE_2__)
		}, (i * animationDuration) / slideAmount)
	}
}

function addEl(src) {
	const slideEl = document.createElement("div")
	slideEl.classList.add("slider__element")
	slideEl.innerHTML = `<img src="${src}" alt="">`

	slider.appendChild(slideEl)
}


/***/ }),

/***/ "./src/pages/styles/about.scss":
/*!*************************************!*\
  !*** ./src/pages/styles/about.scss ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "styles/about.341a7e448bf61b5774a1.scss";

/***/ }),

/***/ "./src/img/about.png":
/*!***************************!*\
  !*** ./src/img/about.png ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/about.c9e349ac87c25ea60360.png";

/***/ }),

/***/ "./src/img/about_2.png":
/*!*****************************!*\
  !*** ./src/img/about_2.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/about_2.d9228f617309b83c2ba9.png";

/***/ }),

/***/ "./src/img/lada_logo.png":
/*!*******************************!*\
  !*** ./src/img/lada_logo.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/lada_logo.751c79fbe24c06a6c6fa.png";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/pages/about/about.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyaXB0cy9hYm91dC40Y2E4ZjgyYTc1Y2VmNzgzMjYyYS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNnSDtBQUNoSCx5Q0FBeUMsK0dBQXNDO0FBQy9FLHlDQUF5QyxtSEFBd0M7QUFDakY7QUFDQSxzQ0FBc0MsdUZBQXdDO0FBQzlFLHNDQUFzQyx1RkFBd0M7QUFDOUU7QUFDQTtBQUNBLGlFQUFlLElBQUk7Ozs7Ozs7Ozs7QUNUTjs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFJOzs7QUFHSjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUN6QjZCO0FBQ1I7QUFDeUI7O0FBRTlDO0FBQ0E7QUFDQTtBQUNBLFlBQVksK0NBQVE7O0FBRXBCOztBQUVBO0FBQ0EsaUJBQWlCLE9BQU87QUFDeEI7QUFDQSxTQUFTLCtDQUFRO0FBQ2pCLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQyxJQUFJOztBQUV0QztBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2FyYm9uZXhfd2VicGFja18zLy4vc3JjL3BhZ2VzL2Fib3V0L2Fib3V0Lmh0bWwiLCJ3ZWJwYWNrOi8vY2FyYm9uZXhfd2VicGFja18zLy4vbm9kZV9tb2R1bGVzL2h0bWwtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vY2FyYm9uZXhfd2VicGFja18zLy4vc3JjL3BhZ2VzL2Fib3V0L2Fib3V0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19IVE1MX0xPQURFUl9HRVRfU09VUkNFX0ZST01fSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvaHRtbC1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0hUTUxfTE9BREVSX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4uLy4uL2ltZy9hYm91dC5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19IVE1MX0xPQURFUl9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuLi8uLi9pbWcvYWJvdXRfMi5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbi8vIE1vZHVsZVxudmFyIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzBfX18gPSBfX19IVE1MX0xPQURFUl9HRVRfU09VUkNFX0ZST01fSU1QT1JUX19fKF9fX0hUTUxfTE9BREVSX0lNUE9SVF8wX19fKTtcbnZhciBfX19IVE1MX0xPQURFUl9SRVBMQUNFTUVOVF8xX19fID0gX19fSFRNTF9MT0FERVJfR0VUX1NPVVJDRV9GUk9NX0lNUE9SVF9fXyhfX19IVE1MX0xPQURFUl9JTVBPUlRfMV9fXyk7XG52YXIgY29kZSA9IFwiPCFET0NUWVBFIGh0bWw+XFxuPGh0bWwgbGFuZz1cXFwiZW5cXFwiPlxcblxcbjxoZWFkPlxcbiAgICA8bWV0YSBjaGFyc2V0PVxcXCJVVEYtOFxcXCI+XFxuICAgIDxtZXRhIGh0dHAtZXF1aXY9XFxcIlgtVUEtQ29tcGF0aWJsZVxcXCIgY29udGVudD1cXFwiSUU9ZWRnZVxcXCI+XFxuICAgIDxtZXRhIG5hbWU9XFxcInZpZXdwb3J0XFxcIiBjb250ZW50PVxcXCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MS4wXFxcIj5cXG4gICAgPHRpdGxlPmFib3V0PC90aXRsZT5cXG48L2hlYWQ+XFxuXFxuPGJvZHk+XFxuXFxuICAgIDxoZWFkZXIgY2xhc3M9XFxcImhlYWRlclxcXCI+PC9oZWFkZXI+XFxuXFxuICAgIDxtYWluIGNsYXNzPVxcXCJtYWluXFxcIj5cXG5cXG4gICAgICAgIDxzZWN0aW9uIGNsYXNzPVxcXCJzZWN0aW9uIHNlY3Rpb24tYWJvdXRcXFwiPlxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInNlY3Rpb25fX3RpdGxlXFxcIj7QniDQutC+0LzQv9Cw0L3QuNC4PC9kaXY+XFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwic2VjdGlvbl9faW1hZ2VcXFwiPlxcbiAgICAgICAgICAgICAgICA8aW1nIHNyYz1cXFwiXCIgKyBfX19IVE1MX0xPQURFUl9SRVBMQUNFTUVOVF8wX19fICsgXCJcXFwiIGFsdD1cXFwiXFxcIj5cXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiYmdcXFwiPjwvZGl2PlxcbiAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInNlY3Rpb25fX3RleHRcXFwiPlxcbiAgICAgICAgICAgICAgICA8cD5cXG4gICAgICAgICAgICAgICAgICAgINCY0LzQtdC10YLRgdGPINGB0L/QvtGA0L3QsNGPINGC0L7Rh9C60LAg0LfRgNC10L3QuNGPLCDQs9C70LDRgdGP0YnQsNGPINC/0YDQuNC80LXRgNC90L4g0YHQu9C10LTRg9GO0YnQtdC1OiDQtNC10LnRgdGC0LLQuNGPINC/0YDQtdC00YHRgtCw0LLQuNGC0LXQu9C10Lkg0L7Qv9C/0L7Qt9C40YbQuNC4XFxuICAgICAgICAgICAgICAgICAgICDQvdCw0LHQuNGA0LDRjtGCINC/0L7Qv9GD0LvRj9GA0L3QvtGB0YLRjCDRgdGA0LXQtNC4INC+0L/RgNC10LTQtdC70LXQvdC90YvRhSDRgdC70L7QtdCyINC90LDRgdC10LvQtdC90LjRjywg0LAg0LfQvdCw0YfQuNGCLCDQtNC+0LvQttC90Ysg0LHRi9GC0Ywg0LfQsNCx0LvQvtC60LjRgNC+0LLQsNC90Ysg0LJcXG4gICAgICAgICAgICAgICAgICAgINGA0LDQvNC60LDRhSDRgdCy0L7QuNGFINGB0L7QsdGB0YLQstC10L3QvdGL0YUg0YDQsNGG0LjQvtC90LDQu9GM0L3Ri9GFINC+0LPRgNCw0L3QuNGH0LXQvdC40LkhXFxuICAgICAgICAgICAgICAgIDwvcD5cXG4gICAgICAgICAgICAgICAgPHA+0KHQu9C+0LbQvdC+INGB0LrQsNC30LDRgtGMLCDQv9C+0YfQtdC80YMg0LDQutGC0LjQstC90L4g0YDQsNC30LLQuNCy0LDRjtGJ0LjQtdGB0Y8g0YHRgtGA0LDQvdGLINGC0YDQtdGC0YzQtdCz0L4g0LzQuNGA0LAg0YTQvtGA0LzQuNGA0YPRjtGCINCz0LvQvtCx0LDQu9GM0L3Rg9GOINGN0LrQvtC90L7QvNC40YfQtdGB0LrRg9GOXFxuICAgICAgICAgICAgICAgICAgICDRgdC10YLRjCDQuCDQv9GA0Lgg0Y3RgtC+0Lwg4oCUINCw0YHRgdC+0YbQuNCw0YLQuNCy0L3QviDRgNCw0YHQv9GA0LXQtNC10LvQtdC90Ysg0L/QviDQvtGC0YDQsNGB0LvRj9C8LjwvcD5cXG4gICAgICAgICAgICAgICAgPHA+INCe0LTQvdC+0LfQvdCw0YfQvdC+LCDRgdC00LXQu9Cw0L3QvdGL0LUg0L3QsCDQsdCw0LfQtSDQuNC90YLQtdGA0L3QtdGCLdCw0L3QsNC70LjRgtC40LrQuCDQstGL0LLQvtC00YssINC60L7RgtC+0YDRi9C1INC/0YDQtdC00YHRgtCw0LLQu9GP0Y7RgiDRgdC+0LHQvtC5INGP0YDQutC40Lkg0L/RgNC40LzQtdGAXFxuICAgICAgICAgICAgICAgICAgICDQutC+0L3RgtC40L3QtdC90YLQsNC70YzQvdC+LdC10LLRgNC+0L/QtdC50YHQutC+0LPQviDRgtC40L/QsCDQv9C+0LvQuNGC0LjRh9C10YHQutC+0Lkg0LrRg9C70YzRgtGD0YDRiywg0LHRg9C00YPRgiDQvtCx0YrRj9Cy0LvQtdC90Ysg0L3QsNGA0YPRiNCw0Y7RidC40LzQuCDQvtCx0YnQtdGH0LXQu9C+0LLQtdGH0LXRgdC60LjQtVxcbiAgICAgICAgICAgICAgICAgICAg0L3QvtGA0LzRiyDRjdGC0LjQutC4INC4INC80L7RgNCw0LvQuC48L3A+XFxuICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwic2VjdGlvbl9faW1hZ2VcXFwiPlxcbiAgICAgICAgICAgICAgICA8aW1nIHNyYz1cXFwiXCIgKyBfX19IVE1MX0xPQURFUl9SRVBMQUNFTUVOVF8xX19fICsgXCJcXFwiIGFsdD1cXFwiXFxcIj5cXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiYmdcXFwiPjwvZGl2PlxcbiAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInNlY3Rpb25fX3RleHRcXFwiPlxcbiAgICAgICAgICAgICAgICA8cD5cXG4gICAgICAgICAgICAgICAgICAgINCY0LzQtdC10YLRgdGPINGB0L/QvtGA0L3QsNGPINGC0L7Rh9C60LAg0LfRgNC10L3QuNGPLCDQs9C70LDRgdGP0YnQsNGPINC/0YDQuNC80LXRgNC90L4g0YHQu9C10LTRg9GO0YnQtdC1OiDQtNC10LnRgdGC0LLQuNGPINC/0YDQtdC00YHRgtCw0LLQuNGC0LXQu9C10Lkg0L7Qv9C/0L7Qt9C40YbQuNC4XFxuICAgICAgICAgICAgICAgICAgICDQvdCw0LHQuNGA0LDRjtGCINC/0L7Qv9GD0LvRj9GA0L3QvtGB0YLRjCDRgdGA0LXQtNC4INC+0L/RgNC10LTQtdC70LXQvdC90YvRhSDRgdC70L7QtdCyINC90LDRgdC10LvQtdC90LjRjywg0LAg0LfQvdCw0YfQuNGCLCDQtNC+0LvQttC90Ysg0LHRi9GC0Ywg0LfQsNCx0LvQvtC60LjRgNC+0LLQsNC90Ysg0LJcXG4gICAgICAgICAgICAgICAgICAgINGA0LDQvNC60LDRhSDRgdCy0L7QuNGFINGB0L7QsdGB0YLQstC10L3QvdGL0YUg0YDQsNGG0LjQvtC90LDQu9GM0L3Ri9GFINC+0LPRgNCw0L3QuNGH0LXQvdC40LkhXFxuICAgICAgICAgICAgICAgIDwvcD5cXG4gICAgICAgICAgICAgICAgPHA+0KHQu9C+0LbQvdC+INGB0LrQsNC30LDRgtGMLCDQv9C+0YfQtdC80YMg0LDQutGC0LjQstC90L4g0YDQsNC30LLQuNCy0LDRjtGJ0LjQtdGB0Y8g0YHRgtGA0LDQvdGLINGC0YDQtdGC0YzQtdCz0L4g0LzQuNGA0LAg0YTQvtGA0LzQuNGA0YPRjtGCINCz0LvQvtCx0LDQu9GM0L3Rg9GOINGN0LrQvtC90L7QvNC40YfQtdGB0LrRg9GOXFxuICAgICAgICAgICAgICAgICAgICDRgdC10YLRjCDQuCDQv9GA0Lgg0Y3RgtC+0Lwg4oCUINCw0YHRgdC+0YbQuNCw0YLQuNCy0L3QviDRgNCw0YHQv9GA0LXQtNC10LvQtdC90Ysg0L/QviDQvtGC0YDQsNGB0LvRj9C8LjwvcD5cXG4gICAgICAgICAgICAgICAgPHA+INCe0LTQvdC+0LfQvdCw0YfQvdC+LCDRgdC00LXQu9Cw0L3QvdGL0LUg0L3QsCDQsdCw0LfQtSDQuNC90YLQtdGA0L3QtdGCLdCw0L3QsNC70LjRgtC40LrQuCDQstGL0LLQvtC00YssINC60L7RgtC+0YDRi9C1INC/0YDQtdC00YHRgtCw0LLQu9GP0Y7RgiDRgdC+0LHQvtC5INGP0YDQutC40Lkg0L/RgNC40LzQtdGAXFxuICAgICAgICAgICAgICAgICAgICDQutC+0L3RgtC40L3QtdC90YLQsNC70YzQvdC+LdC10LLRgNC+0L/QtdC50YHQutC+0LPQviDRgtC40L/QsCDQv9C+0LvQuNGC0LjRh9C10YHQutC+0Lkg0LrRg9C70YzRgtGD0YDRiywg0LHRg9C00YPRgiDQvtCx0YrRj9Cy0LvQtdC90Ysg0L3QsNGA0YPRiNCw0Y7RidC40LzQuCDQvtCx0YnQtdGH0LXQu9C+0LLQtdGH0LXRgdC60LjQtVxcbiAgICAgICAgICAgICAgICAgICAg0L3QvtGA0LzRiyDRjdGC0LjQutC4INC4INC80L7RgNCw0LvQuC48L3A+XFxuICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICA8L3NlY3Rpb24+XFxuXFxuICAgICAgICA8c2VjdGlvbiBjbGFzcz1cXFwic2VjdGlvbiBzZWN0aW9uLWFib3V0XFxcIj5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJzZWN0aW9uX190aXRsZVxcXCI+0YHQntCi0KDQo9CU0J3QmNCn0JXQodCi0JLQnjwvZGl2PlxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInNlY3Rpb25fX3RleHRcXFwiPlxcbiAgICAgICAgICAgICAgICBDQVJCT05FWCAtINGP0LLQu9GP0LXRgtGB0Y8g0LvQuNC00LXRgNC+0Lwg0LIg0L7QsdC70LDRgdGC0Lgg0YTQuNGC0YDQvtCy0LDQvdC90YvRhSDQvNCw0YLQtdGA0LjQsNC70L7Qsi4g0J3QsNGI0Lgg0L/QtdGA0LXQtNC+0LLRi9C1INC80LDRgtC10YDQuNCw0LvRiyDQuNGB0L/QvtC70YzQt9GD0Y7RgtGB0Y9cXG4gICAgICAgICAgICAgICAg0L/RgNCw0LrRgtC40YfQtdGB0LrQuCDQstC+INCy0YHQtdGFINC+0YLRgNCw0YHQu9GP0YUg0L/RgNC+0LzRi9GI0LvQtdC90L3QvtGB0YLQuC5cXG4gICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJzbGlkZXJcXFwiIGRhdGEtc2xpZGVyPlxcbiAgICAgICAgICAgIDwvZGl2PlxcblxcbiAgICAgICAgPC9zZWN0aW9uPlxcblxcbiAgICA8L21haW4+XFxuXFxuICAgIDxmb290ZXIgY2xhc3M9XFxcImZvb3RlclxcXCI+PC9mb290ZXI+XFxuPC9ib2R5PlxcblxcbjwvaHRtbD5cIjtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IGNvZGU7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICBvcHRpb25zID0ge307XG4gIH1cblxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH0gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVyc2NvcmUtZGFuZ2xlLCBuby1wYXJhbS1yZWFzc2lnblxuXG5cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMubWF5YmVOZWVkUXVvdGVzICYmIC9bXFx0XFxuXFxmXFxyIFwiJz08PmBdLy50ZXN0KHVybCkpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybCwgXCJcXFwiXCIpO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07IiwiaW1wb3J0IFwiLi4vc3R5bGVzL2Fib3V0LnNjc3NcIlxuaW1wb3J0IFwiLi9hYm91dC5odG1sXCJcbmltcG9ydCBpbWFnZVNyYyBmcm9tIFwiLi4vLi4vaW1nL2xhZGFfbG9nby5wbmdcIlxuXG5jb25zdCBzbGlkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiW2RhdGEtc2xpZGVyXVwiKVxuY29uc3QgYW5pbWF0aW9uRHVyYXRpb24gPSA1MDAwXG5jb25zdCBzbGlkZUFtb3VudCA9IDRcbmNvbnNvbGUubG9nKGltYWdlU3JjKVxuXG5zdGFydFNsaWRlcigpXG5cbmZ1bmN0aW9uIHN0YXJ0U2xpZGVyKCkge1xuXHRmb3IgKGxldCBpID0gMDsgaSA8IDQ7IGkrKykge1xuXHRcdHNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdFx0YWRkRWwoaW1hZ2VTcmMpXG5cdFx0fSwgKGkgKiBhbmltYXRpb25EdXJhdGlvbikgLyBzbGlkZUFtb3VudClcblx0fVxufVxuXG5mdW5jdGlvbiBhZGRFbChzcmMpIHtcblx0Y29uc3Qgc2xpZGVFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcblx0c2xpZGVFbC5jbGFzc0xpc3QuYWRkKFwic2xpZGVyX19lbGVtZW50XCIpXG5cdHNsaWRlRWwuaW5uZXJIVE1MID0gYDxpbWcgc3JjPVwiJHtzcmN9XCIgYWx0PVwiXCI+YFxuXG5cdHNsaWRlci5hcHBlbmRDaGlsZChzbGlkZUVsKVxufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9