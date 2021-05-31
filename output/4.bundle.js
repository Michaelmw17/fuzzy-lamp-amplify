(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

/***/ "./src/common/Button/index.js":
/*!************************************!*\
  !*** ./src/common/Button/index.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles */ \"./src/common/Button/styles.js\");\n\n\nvar Button = function Button(_ref) {\n  var color = _ref.color,\n      width = _ref.width,\n      children = _ref.children,\n      onClick = _ref.onClick;\n  return /*#__PURE__*/React.createElement(_styles__WEBPACK_IMPORTED_MODULE_0__[\"Button\"], {\n    color: color,\n    width: width,\n    onClick: onClick\n  }, children);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Button);\n\n//# sourceURL=webpack:///./src/common/Button/index.js?");

/***/ }),

/***/ "./src/common/Button/styles.js":
/*!*************************************!*\
  !*** ./src/common/Button/styles.js ***!
  \*************************************/
/*! exports provided: Button */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Button\", function() { return Button; });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\nvar _templateObject;\n\nfunction _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }\n\n\nvar Button = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].button(_templateObject || (_templateObject = _taggedTemplateLiteral([\"\\n  background: \", \";\\n  color: \", \";\\n  font-size: 1rem;\\n  font-weight: 700;\\n  width: 100%;\\n  border: \", \";\\n  border-radius: 8px;\\n  height: 60px;\\n  outline: none;\\n  cursor: pointer;\\n  margin-top: 0.625rem;\\n  max-width: 180px;\\n\\n  @media only screen and (max-width: 1024px) {\\n    width: \", \";\\n  }\\n\\n  @media only screen and (max-width: 768px) {\\n    width: \", \";\\n  }\\n\\n  @media only screen and (max-width: 480px) {\\n    width: \", \";\\n    margin-left: 0rem;\\n  }\\n  \\n\"])), function (props) {\n  return props.color || 'rgb(209, 29, 50)';\n}, function (props) {\n  return props.color ? 'rgb(209, 29, 50)' : '#fff';\n}, function (props) {\n  return props.color ? '1px solid #687864' : '0px';\n}, function (props) {\n  return props.width ? '160px' : '100%';\n}, function (props) {\n  return props.width ? '160px' : '100%';\n}, function (props) {\n  return props.width ? '160px' : '100%';\n});\n\n//# sourceURL=webpack:///./src/common/Button/styles.js?");

/***/ })

}]);