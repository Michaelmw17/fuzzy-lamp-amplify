(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/common/ButtonMains/button.css":
/*!*********************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/common/ButtonMains/button.css ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(false);\n// Module\n___CSS_LOADER_EXPORT___.push([module.i, \"\\n#MainButton::before,\\n#MainButton::after\\n {\\n    content: '';\\n    position: absolute;\\n    border-left: inherit;\\n    z-index: -1;\\n}\\n\\n#MainButton::after {\\n    height: 100%;\\n    top: 10%;\\n    filter: brightness(0.8);\\n}\\n#MainButton:hover {\\n   \\n    background-color: red;\\n}\\n\\n#MainButton::before{\\n    height: 100%;\\n    top: 20%;\\n    filter: brightness(0.6);\\n}\\n\\n#MainButton span {\\n    position: relative;\\n    height: 120%;\\n    top: -10%;\\n    width:150%;\\n    margin-left: -5px;\\n    box-sizing: border-box;\\n    display: flex;\\n    align-items: center;\\n    justify-content: center;\\n    font-family: sans-serif;\\n    text-transform: capitalize;\\n    transition: 0.5s;\\n}\\n\\n.App:hover span {\\n    transform: translateY(0.3em);\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack:///./src/common/ButtonMains/button.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/pages/Home/homeStyles.css":
/*!*****************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/pages/Home/homeStyles.css ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(false);\n// Module\n___CSS_LOADER_EXPORT___.push([module.i, \"/* \\n@font-face {\\n  font-family: \\\"Poppins\\\";\\n  src: local(\\\"Poppins\\\"),\\n    url(\\\"../../fonts/Poppins/\\\") format(\\\"truetype\\\");\\n  font-weight: normal;\\n} */\\n/* @font-face {\\n  font-family: 'Poppins';\\n  src: local('Poppins'), url(../../fonts/Poppins/Poppins-Black.ttf) format('opentype');\\n}\\n\\n@font-face {\\n    font-family: 'Poppins';\\n    font-weight: 900;\\n    src: local('Poppins'), url(../../fonts/Poppins/Poppins-ExtraBold.ttf) format('opentype');\\n}\\n\\n@font-face {\\n    font-family: 'Poppins';\\n    font-weight: 300;\\n    src: local('Poppins'), url(../../fonts/Poppins/Poppins-Medium.ttf) format('opentype');\\n}\\n.body {\\n  font-family: \\\"Poppins\\\";\\n  \\n} */\\n.IntroContainer{\\n  background: rgb(255,255,255);\\n  background: #2B2D2F;\\n  background-size: cover;\\n}\\n.App {\\nwidth: 250px; height: 400px; \\n  margin-top:100px;\\n  margin-bottom:30px;\\n  background: rgba(255, 255, 255, 0.932);\\nborder-radius: 20px; \\nmargin-left: auto;\\nmargin-right: auto ;\\nborder-radius: 10px;\\nbox-shadow: rgba(0, 0, 0, 0.56) 0px 22px 70px 4px;\\ncursor: pointer;\\n\\n}\\n.AppCon {\\nwidth: 255px; height: 405px; \\n  margin-top:110px;\\n  margin-bottom:20px;\\n background: rgba(255, 255, 255, 0.932);\\nborder-radius: 10px; \\nmargin-left: auto;\\nmargin-right: auto ;\\nborder-radius: 10px;\\nbox-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;\\n  cursor: pointer;\\n\\n}\\n.App:hover{\\n background: rgba(255, 255, 255, 0.973);\\n}\\n\\n\", \"\"]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack:///./src/pages/Home/homeStyles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./src/common/ButtonMains/ButtonMain.js":
/*!**********************************************!*\
  !*** ./src/common/ButtonMains/ButtonMain.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return OutlinedButtons; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ \"./node_modules/@material-ui/core/esm/styles/index.js\");\n/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Button */ \"./node_modules/@material-ui/core/esm/Button/index.js\");\n/* harmony import */ var _button_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./button.css */ \"./src/common/ButtonMains/button.css\");\n/* harmony import */ var _button_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_button_css__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nvar useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__[\"makeStyles\"])(function (theme) {\n  return {\n    root: {\n      '& > *': {\n        margin: theme.spacing(1),\n        position: \"relative\",\n        height: \"110px\",\n        cursor: \"pointer\",\n        borderRadius: \"20%\",\n        marginTop: \"150px\",\n        display: \"block\",\n        marginRight: \" auto\",\n        width: \"50%\",\n        marginLeft: \"90px\"\n      } //       '&:hover': {\n      //    background:\"linear-gradient(90deg, #add8e6  0%, #add8e6 50%, #add8e6 100%)\",\n      // },\n\n    }\n  };\n});\nfunction OutlinedButtons() {\n  var classes = useStyles();\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: classes.root\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    id: \"example1\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    id: \"example11\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    title: \"Click to Enter\",\n    variant: \"outlined\",\n    color: \"primary\",\n    id: \"MainButton\",\n    style: {\n      \"position\": \"absolute\",\n      \"top\": \"0\",\n      \"left\": \"0\",\n      \"display\": \"block\",\n      \"width\": \"150%\",\n      \"height\": \"60%\",\n      \"borderRadius\": \"20%\",\n      \"background\": \"linear-gradient(to bottom right, white, rgba(220,220,220,.5)), white\",\n      \"boxShadow\": \"rgba(0, 23, 25, 0.2) 0px 19px 38px, #71d9ff 0px 5px 22px\"\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", {\n    style: {\n      \"position\": \"absolute\",\n      \"top\": \"0\",\n      \"left\": \"0\",\n      \"display\": \"block\",\n      \"width\": \"45%\",\n      \"height\": \"10%\",\n      \"background\": \"#66ffff\",\n      \"borderRadius\": \"20%\",\n      \"boxShadow\": \"0 0 50px #71d9ff,\\n    inset 0 0 50px #71d9ff,\\n    inset 0 1px 1px #000,\\n    0 0 0 1px #000,\\n    0 0 0 1px #000,\\n    0 0  1px #000\",\n      \"marginLeft\": \"13px\",\n      \"marginTop\": \"20px\"\n    }\n  })))));\n}\n\n//# sourceURL=webpack:///./src/common/ButtonMains/ButtonMain.js?");

/***/ }),

/***/ "./src/common/ButtonMains/button.css":
/*!*******************************************!*\
  !*** ./src/common/ButtonMains/button.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!./button.css */ \"./node_modules/css-loader/dist/cjs.js!./src/common/ButtonMains/button.css\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\n\n\nmodule.exports = content.locals || {};\n\n//# sourceURL=webpack:///./src/common/ButtonMains/button.css?");

/***/ }),

/***/ "./src/components/Themes.js":
/*!**********************************!*\
  !*** ./src/components/Themes.js ***!
  \**********************************/
/*! exports provided: lightTheme, darkTheme */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"lightTheme\", function() { return lightTheme; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"darkTheme\", function() { return darkTheme; });\nvar lightTheme = {\n  body: '#FFF',\n  text: '#363537',\n  toggleBorder: '#FFF',\n  background: 'linear-gradient(#39598A, #79D7ED)'\n};\nvar darkTheme = {\n  body: '#2B2D2F',\n  text: '#000',\n  toggleBorder: '#6B8096',\n  background: '#999'\n};\n\n//# sourceURL=webpack:///./src/components/Themes.js?");

/***/ }),

/***/ "./src/components/Toggler.js":
/*!***********************************!*\
  !*** ./src/components/Toggler.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _common_ButtonMains_ButtonMain__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/ButtonMains/ButtonMain */ \"./src/common/ButtonMains/ButtonMain.js\");\n\n\n\n\nvar Toggle = function Toggle(_ref) {\n  var theme = _ref.theme,\n      toggleTheme = _ref.toggleTheme;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_ButtonMains_ButtonMain__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    onClick: toggleTheme\n  }, theme === \"light\" ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, \" \") : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, \" \"));\n};\n\nToggle.propTypes = {\n  theme: prop_types__WEBPACK_IMPORTED_MODULE_1__[\"string\"].isRequired,\n  toggleTheme: prop_types__WEBPACK_IMPORTED_MODULE_1__[\"func\"].isRequired\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Toggle);\n\n//# sourceURL=webpack:///./src/components/Toggler.js?");

/***/ }),

/***/ "./src/components/useDarkMode.js":
/*!***************************************!*\
  !*** ./src/components/useDarkMode.js ***!
  \***************************************/
/*! exports provided: useDarkMode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"useDarkMode\", function() { return useDarkMode; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\nvar useDarkMode = function useDarkMode() {\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])('dark'),\n      _useState2 = _slicedToArray(_useState, 2),\n      theme = _useState2[0],\n      setTheme = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false),\n      _useState4 = _slicedToArray(_useState3, 2),\n      mountedComponent = _useState4[0],\n      setMountedComponent = _useState4[1];\n\n  var setMode = function setMode(mode) {\n    window.localStorage.setItem('theme', mode);\n    setTheme(mode);\n  };\n\n  var themeToggler = function themeToggler() {\n    theme === 'dark' ? setMode('dark') : setMode('light');\n  };\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    var localTheme = window.localStorage.getItem('theme');\n    localTheme ? setTheme(localTheme) : setMode('light');\n    setMountedComponent(true);\n  }, []);\n  return [theme, themeToggler, mountedComponent];\n};\n\n//# sourceURL=webpack:///./src/components/useDarkMode.js?");

/***/ }),

/***/ "./src/pages/Home/homeStyles.css":
/*!***************************************!*\
  !*** ./src/pages/Home/homeStyles.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!./homeStyles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/pages/Home/homeStyles.css\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\n\n\nmodule.exports = content.locals || {};\n\n//# sourceURL=webpack:///./src/pages/Home/homeStyles.css?");

/***/ }),

/***/ "./src/pages/Home/index.js":
/*!*********************************!*\
  !*** ./src/pages/Home/index.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Toggler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/Toggler */ \"./src/components/Toggler.js\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/esm/react-router-dom.js\");\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ \"./node_modules/@material-ui/core/esm/styles/index.js\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _components_useDarkMode__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/useDarkMode */ \"./src/components/useDarkMode.js\");\n/* harmony import */ var _globalStyles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../globalStyles */ \"./src/globalStyles.js\");\n/* harmony import */ var _components_Themes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/Themes */ \"./src/components/Themes.js\");\n/* harmony import */ var react_simple_tooltip__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-simple-tooltip */ \"./node_modules/react-simple-tooltip/es/index.js\");\n/* harmony import */ var _homeStyles_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./homeStyles.css */ \"./src/pages/Home/homeStyles.css\");\n/* harmony import */ var _homeStyles_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_homeStyles_css__WEBPACK_IMPORTED_MODULE_9__);\nvar _templateObject;\n\nfunction _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }\n\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n\n\n\n\n\n\n\n\n\n\nvar Container = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__[\"lazy\"])(function () {\n  return __webpack_require__.e(/*! import() */ 7).then(__webpack_require__.bind(null, /*! ../../common/Container */ \"./src/common/Container/index.js\"));\n});\n\nvar styles = function styles(theme) {\n  return {\n    fab: {\n      margin: theme.spacing(1)\n    },\n    extendedIcon: {\n      marginRight: theme.spacing(1)\n    }\n  };\n};\n\nvar Home = function Home(props, i) {\n  var _useDarkMode = Object(_components_useDarkMode__WEBPACK_IMPORTED_MODULE_5__[\"useDarkMode\"])(),\n      _useDarkMode2 = _slicedToArray(_useDarkMode, 3),\n      theme = _useDarkMode2[0],\n      themeToggler = _useDarkMode2[1],\n      mountedComponent = _useDarkMode2[2];\n\n  var themeMode = theme === 'light' ? _components_Themes__WEBPACK_IMPORTED_MODULE_7__[\"lightTheme\"] : _components_Themes__WEBPACK_IMPORTED_MODULE_7__[\"darkTheme\"];\n  if (!mountedComponent) return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"IntroContainer\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(styled_components__WEBPACK_IMPORTED_MODULE_4__[\"ThemeProvider\"], {\n    theme: themeMode,\n    key: i\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Container, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_globalStyles__WEBPACK_IMPORTED_MODULE_6__[\"GlobalStyles\"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__[\"NavLink\"], {\n    to: \"/About\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"AppCon\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"App\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_simple_tooltip__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n    arrow: 8,\n    background: \"rgb(209, 29, 50)\",\n    border: \"#0e1111\",\n    color: \"#FFF\",\n    content: \"Click to Enter JDP Electrical\",\n    fadeDuration: 3,\n    fadeEasing: \"linear\",\n    fixed: false,\n    fontFamily: \"inherit\",\n    fontSize: \"inherit\",\n    offset: 0,\n    padding: 16,\n    placement: \"bottom\",\n    radius: 3,\n    zIndex: 1,\n    customCss: Object(styled_components__WEBPACK_IMPORTED_MODULE_4__[\"css\"])(_templateObject || (_templateObject = _taggedTemplateLiteral([\"\\n                white-space: nowrap;\\n                word-break: break-all;\\n              \"])))\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Toggler__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    theme: theme,\n    toggleTheme: themeToggler,\n    key: i\n  })))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__[\"NavLink\"], {\n    to: \"/About\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h1\", {\n    style: {\n      textAlign: 'center',\n      marginTop: 30,\n      color: 'white'\n    }\n  }, \"Enter JDP Electrical Services\")))));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__[\"withStyles\"])(styles)(Home));\n\n//# sourceURL=webpack:///./src/pages/Home/index.js?");

/***/ })

}]);