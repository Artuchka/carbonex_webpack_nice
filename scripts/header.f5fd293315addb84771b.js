"use strict";
(self["webpackChunkcarbonex_webpack_3"] = self["webpackChunkcarbonex_webpack_3"] || []).push([["header"],{

/***/ "./src/pages/partials/header.html":
/*!****************************************!*\
  !*** ./src/pages/partials/header.html ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/html-loader/dist/runtime/getUrl.js */ "./node_modules/html-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___HTML_LOADER_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../../img/logo.png */ "./src/img/logo.png"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../../img/hamburger.svg */ "./src/img/hamburger.svg"), __webpack_require__.b);
// Module
var ___HTML_LOADER_REPLACEMENT_0___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_0___);
var ___HTML_LOADER_REPLACEMENT_1___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_1___);
var code = "<div class=\"logo\">\n    <img src=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\" alt=\"\" data-header-logo-image>\n    <div class=\"text\">carbonex</div>\n</div>\n<nav class=\"nav\" data-nav>\n    <div class=\"nav-list\">\n        <div class=\"nav-link\"><a href=\"https://artuchka.github.io/carbonex_webpack/pages/index.html\"\n                data-main>Главная</a></div>\n        <div class=\"nav-link\"><a href=\"https://artuchka.github.io/carbonex_webpack/pages/brunches.html\">Отрасли</a>\n        </div>\n        <div class=\"nav-link\"><a href=\"https://artuchka.github.io/carbonex_webpack/pages/products.html\">Продукция</a>\n        </div>\n        <div class=\"nav-link\"><a href=\"https://artuchka.github.io/carbonex_webpack/pages/about.html\" data-about>О\n                компании</a></div>\n        <div class=\"nav-link\"><a href=\"https://artuchka.github.io/carbonex_webpack/pages/news.html\">Новости</a></div>\n        <div class=\"nav-link\"><a href=\"https://artuchka.github.io/carbonex_webpack/pages/contact.html\">Контакты</a>\n        </div>\n    </div>\n</nav>\n<div class=\"hamburger\" data-header-hamburger>\n    <img src=\"" + ___HTML_LOADER_REPLACEMENT_1___ + "\" alt=\"\" data-header-hamburger-image>\n</div>";
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

/***/ "./src/pages/partials/header.js":
/*!**************************************!*\
  !*** ./src/pages/partials/header.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _img_logo_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../img/logo.png */ "./src/img/logo.png");
/* harmony import */ var _img_hamburger_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../img/hamburger.svg */ "./src/img/hamburger.svg");
/* harmony import */ var _header_html__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./header.html */ "./src/pages/partials/header.html");




document.querySelector("[data-header-logo-image]").src = _img_logo_png__WEBPACK_IMPORTED_MODULE_0__
document.querySelector("[data-header-hamburger-image]").src = _img_hamburger_svg__WEBPACK_IMPORTED_MODULE_1__
const hamburger = document.querySelector("[data-header-hamburger]")
const nav = document.querySelector("[data-nav]")

hamburger.addEventListener("click", (e) => {
	console.log("clicked")
	nav.classList.toggle("show")
})


/***/ }),

/***/ "./src/img/hamburger.svg":
/*!*******************************!*\
  !*** ./src/img/hamburger.svg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/hamburger.ce7fd22278cd3580face.svg";

/***/ }),

/***/ "./src/img/logo.png":
/*!**************************!*\
  !*** ./src/img/logo.png ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/logo.975bf05a8199e7aa50f2.png";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/pages/partials/header.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NyaXB0cy9oZWFkZXIuZjVmZDI5MzMxNWFkZGI4NDc3MWIuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDZ0g7QUFDaEgseUNBQXlDLDZHQUFxQztBQUM5RSx5Q0FBeUMsdUhBQTBDO0FBQ25GO0FBQ0Esc0NBQXNDLHVGQUF3QztBQUM5RSxzQ0FBc0MsdUZBQXdDO0FBQzlFO0FBQ0E7QUFDQSxpRUFBZSxJQUFJOzs7Ozs7Ozs7O0FDVE47O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSTs7O0FBR0o7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDekIwQztBQUNVO0FBQ3BCOztBQUVoQyx5REFBeUQsMENBQVM7QUFDbEUsOERBQThELCtDQUFjO0FBQzVFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2NhcmJvbmV4X3dlYnBhY2tfMy8uL3NyYy9wYWdlcy9wYXJ0aWFscy9oZWFkZXIuaHRtbCIsIndlYnBhY2s6Ly9jYXJib25leF93ZWJwYWNrXzMvLi9ub2RlX21vZHVsZXMvaHRtbC1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9jYXJib25leF93ZWJwYWNrXzMvLi9zcmMvcGFnZXMvcGFydGlhbHMvaGVhZGVyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19IVE1MX0xPQURFUl9HRVRfU09VUkNFX0ZST01fSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvaHRtbC1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0hUTUxfTE9BREVSX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4uLy4uL2ltZy9sb2dvLnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0hUTUxfTE9BREVSX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4uLy4uL2ltZy9oYW1idXJnZXIuc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG4vLyBNb2R1bGVcbnZhciBfX19IVE1MX0xPQURFUl9SRVBMQUNFTUVOVF8wX19fID0gX19fSFRNTF9MT0FERVJfR0VUX1NPVVJDRV9GUk9NX0lNUE9SVF9fXyhfX19IVE1MX0xPQURFUl9JTVBPUlRfMF9fXyk7XG52YXIgX19fSFRNTF9MT0FERVJfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0hUTUxfTE9BREVSX0dFVF9TT1VSQ0VfRlJPTV9JTVBPUlRfX18oX19fSFRNTF9MT0FERVJfSU1QT1JUXzFfX18pO1xudmFyIGNvZGUgPSBcIjxkaXYgY2xhc3M9XFxcImxvZ29cXFwiPlxcbiAgICA8aW1nIHNyYz1cXFwiXCIgKyBfX19IVE1MX0xPQURFUl9SRVBMQUNFTUVOVF8wX19fICsgXCJcXFwiIGFsdD1cXFwiXFxcIiBkYXRhLWhlYWRlci1sb2dvLWltYWdlPlxcbiAgICA8ZGl2IGNsYXNzPVxcXCJ0ZXh0XFxcIj5jYXJib25leDwvZGl2PlxcbjwvZGl2PlxcbjxuYXYgY2xhc3M9XFxcIm5hdlxcXCIgZGF0YS1uYXY+XFxuICAgIDxkaXYgY2xhc3M9XFxcIm5hdi1saXN0XFxcIj5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcIm5hdi1saW5rXFxcIj48YSBocmVmPVxcXCJodHRwczovL2FydHVjaGthLmdpdGh1Yi5pby9jYXJib25leF93ZWJwYWNrL3BhZ2VzL2luZGV4Lmh0bWxcXFwiXFxuICAgICAgICAgICAgICAgIGRhdGEtbWFpbj7Qk9C70LDQstC90LDRjzwvYT48L2Rpdj5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcIm5hdi1saW5rXFxcIj48YSBocmVmPVxcXCJodHRwczovL2FydHVjaGthLmdpdGh1Yi5pby9jYXJib25leF93ZWJwYWNrL3BhZ2VzL2JydW5jaGVzLmh0bWxcXFwiPtCe0YLRgNCw0YHQu9C4PC9hPlxcbiAgICAgICAgPC9kaXY+XFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJuYXYtbGlua1xcXCI+PGEgaHJlZj1cXFwiaHR0cHM6Ly9hcnR1Y2hrYS5naXRodWIuaW8vY2FyYm9uZXhfd2VicGFjay9wYWdlcy9wcm9kdWN0cy5odG1sXFxcIj7Qn9GA0L7QtNGD0LrRhtC40Y88L2E+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcIm5hdi1saW5rXFxcIj48YSBocmVmPVxcXCJodHRwczovL2FydHVjaGthLmdpdGh1Yi5pby9jYXJib25leF93ZWJwYWNrL3BhZ2VzL2Fib3V0Lmh0bWxcXFwiIGRhdGEtYWJvdXQ+0J5cXG4gICAgICAgICAgICAgICAg0LrQvtC80L/QsNC90LjQuDwvYT48L2Rpdj5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcIm5hdi1saW5rXFxcIj48YSBocmVmPVxcXCJodHRwczovL2FydHVjaGthLmdpdGh1Yi5pby9jYXJib25leF93ZWJwYWNrL3BhZ2VzL25ld3MuaHRtbFxcXCI+0J3QvtCy0L7RgdGC0Lg8L2E+PC9kaXY+XFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJuYXYtbGlua1xcXCI+PGEgaHJlZj1cXFwiaHR0cHM6Ly9hcnR1Y2hrYS5naXRodWIuaW8vY2FyYm9uZXhfd2VicGFjay9wYWdlcy9jb250YWN0Lmh0bWxcXFwiPtCa0L7QvdGC0LDQutGC0Ys8L2E+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgPC9kaXY+XFxuPC9uYXY+XFxuPGRpdiBjbGFzcz1cXFwiaGFtYnVyZ2VyXFxcIiBkYXRhLWhlYWRlci1oYW1idXJnZXI+XFxuICAgIDxpbWcgc3JjPVxcXCJcIiArIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzFfX18gKyBcIlxcXCIgYWx0PVxcXCJcXFwiIGRhdGEtaGVhZGVyLWhhbWJ1cmdlci1pbWFnZT5cXG48L2Rpdj5cIjtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IGNvZGU7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICBvcHRpb25zID0ge307XG4gIH1cblxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH0gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVyc2NvcmUtZGFuZ2xlLCBuby1wYXJhbS1yZWFzc2lnblxuXG5cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMubWF5YmVOZWVkUXVvdGVzICYmIC9bXFx0XFxuXFxmXFxyIFwiJz08PmBdLy50ZXN0KHVybCkpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybCwgXCJcXFwiXCIpO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07IiwiaW1wb3J0IGxvZ29JbWFnZSBmcm9tIFwiLi4vLi4vaW1nL2xvZ28ucG5nXCJcbmltcG9ydCBoYW1idXJnZXJJbWFnZSBmcm9tIFwiLi4vLi4vaW1nL2hhbWJ1cmdlci5zdmdcIlxuaW1wb3J0IGh0bWwgZnJvbSBcIi4vaGVhZGVyLmh0bWxcIlxuXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiW2RhdGEtaGVhZGVyLWxvZ28taW1hZ2VdXCIpLnNyYyA9IGxvZ29JbWFnZVxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIltkYXRhLWhlYWRlci1oYW1idXJnZXItaW1hZ2VdXCIpLnNyYyA9IGhhbWJ1cmdlckltYWdlXG5jb25zdCBoYW1idXJnZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiW2RhdGEtaGVhZGVyLWhhbWJ1cmdlcl1cIilcbmNvbnN0IG5hdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJbZGF0YS1uYXZdXCIpXG5cbmhhbWJ1cmdlci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcblx0Y29uc29sZS5sb2coXCJjbGlja2VkXCIpXG5cdG5hdi5jbGFzc0xpc3QudG9nZ2xlKFwic2hvd1wiKVxufSlcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==