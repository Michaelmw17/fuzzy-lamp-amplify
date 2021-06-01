(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[15],{

/***/ "./src/components/ContentBlock/LeftContentBlock/index.js":
/*!***************************************************************!*\
  !*** ./src/components/ContentBlock/LeftContentBlock/index.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-i18next */ \"./node_modules/react-i18next/dist/es/index.js\");\n/* harmony import */ var react_reveal_Slide__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-reveal/Slide */ \"./node_modules/react-reveal/Slide.js\");\n/* harmony import */ var react_reveal_Slide__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_reveal_Slide__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_ImageComp_imgComp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components/ImageComp/imgComp */ \"./src/components/ImageComp/imgComp.js\");\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles */ \"./src/components/ContentBlock/LeftContentBlock/styles.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\n// import { Row, Col } from \"antd\";\n\n\n\n\n\nvar Row = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.lazy(function () {\n  return __webpack_require__.e(/*! import() | sula-antd */ \"vendors~sula-antd\").then(__webpack_require__.t.bind(null, /*! antd/lib/grid/row */ \"./node_modules/antd/lib/grid/row.js\", 7));\n});\nvar Col = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.lazy(function () {\n  return __webpack_require__.e(/*! import() | sula-antd */ \"vendors~sula-antd\").then(__webpack_require__.t.bind(null, /*! antd/lib/grid/col */ \"./node_modules/antd/lib/grid/col.js\", 7));\n});\n\nvar LeftContentBlock = function LeftContentBlock(_ref) {\n  var icon = _ref.icon,\n      title = _ref.title,\n      content = _ref.content,\n      section = _ref.section,\n      t = _ref.t,\n      id = _ref.id;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_3__[\"LeftContentBlock\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(Row, {\n    type: \"flex\",\n    justify: \"space-between\",\n    align: \"middle\",\n    id: id\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(Col, {\n    lg: 11,\n    md: 11,\n    sm: 12,\n    xs: 24\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_reveal_Slide__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    left: true\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_components_ImageComp_imgComp__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    src: icon,\n    className: \"about-block-image\",\n    width: \"100%\",\n    height: \"100%\"\n  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(Col, {\n    lg: 11,\n    md: 11,\n    sm: 11,\n    xs: 24\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_reveal_Slide__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    right: true\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_3__[\"ContentWrapper\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(\"h3\", null, t(title)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_3__[\"Content\"], null, t(content)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_3__[\"ServiceWrapper\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(Row, {\n    type: \"flex\",\n    justify: \"space-between\"\n  }, section && _typeof(section) === \"object\" && section.map(function (item, id) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(Col, {\n      key: id,\n      span: 11\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_components_ImageComp_imgComp__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n      src: item.icon,\n      width: \"60px\",\n      height: \"60px\"\n    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_3__[\"MinTitle\"], null, t(item.title)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_3__[\"MinPara\"], null, t(item.content)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_3__[\"MinPara\"], null, t(item.contentTwo)));\n  }))))))));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_i18next__WEBPACK_IMPORTED_MODULE_0__[\"withTranslation\"])()(LeftContentBlock));\n\n//# sourceURL=webpack:///./src/components/ContentBlock/LeftContentBlock/index.js?");

/***/ }),

/***/ "./src/components/ContentBlock/LeftContentBlock/styles.js":
/*!****************************************************************!*\
  !*** ./src/components/ContentBlock/LeftContentBlock/styles.js ***!
  \****************************************************************/
/*! exports provided: LeftContentBlock, Content, ContentWrapper, ServiceWrapper, MinTitle, MinPara, ServiceItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LeftContentBlock\", function() { return LeftContentBlock; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Content\", function() { return Content; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ContentWrapper\", function() { return ContentWrapper; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ServiceWrapper\", function() { return ServiceWrapper; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"MinTitle\", function() { return MinTitle; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"MinPara\", function() { return MinPara; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ServiceItem\", function() { return ServiceItem; });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\nvar _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7;\n\nfunction _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }\n\n // import { Col } from 'antd';\n\n // const Row = React.lazy(() => import(/* webpackChunkName: \"sula-antd\" */ 'antd/lib/grid/row'));\n\nvar Col = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.lazy(function () {\n  return __webpack_require__.e(/*! import() | sula-antd */ \"vendors~sula-antd\").then(__webpack_require__.t.bind(null, /*! antd/lib/grid/col */ \"./node_modules/antd/lib/grid/col.js\", 7));\n});\nvar LeftContentBlock = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].section(_templateObject || (_templateObject = _taggedTemplateLiteral([\"\\n  position: relative;\\n  padding: 15rem 0 8rem;\\n\\n  @media only screen and (max-width: 768px) {\\n    padding: 4rem 0 4rem;\\n  }\\n\"])));\nvar Content = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].p(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral([\"\\n  margin: 1.5rem 0 2rem 0;\\n  font-size: 20px\\n  \\n\"])));\nvar ContentWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral([\"\\n  position: relative;\\n  max-width: 840px;\\n\\n  @media only screen and (max-width: 480px) {\\n    margin: 2rem 0;\\n  }\\n\"])));\nvar ServiceWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral([\"\\n  display: flex;\\n  justify-content: space-between;\\n  max-width: 100%;\\n\"])));\nvar MinTitle = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].h6(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral([\"\\n  font-size: 1rem;\\n  line-height: 1.2rem;\\n  padding: 0.5rem 0;\\n\"])));\nvar MinPara = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].p(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral([\"\\n  font-size: 0.9rem;\\n\"])));\nvar ServiceItem = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(Col)(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral([\"\\n  margin: 2rem 0;\\n  position: relative;\\n\"])));\n\n//# sourceURL=webpack:///./src/components/ContentBlock/LeftContentBlock/styles.js?");

/***/ }),

/***/ "./src/components/ContentBlock/RightContentBlock/index.js":
/*!****************************************************************!*\
  !*** ./src/components/ContentBlock/RightContentBlock/index.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _material_ui_icons_PhoneForwarded__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/icons/PhoneForwarded */ \"./node_modules/@material-ui/icons/PhoneForwarded.js\");\n/* harmony import */ var _material_ui_icons_PhoneForwarded__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_PhoneForwarded__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_loader_spinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-loader-spinner */ \"./node_modules/react-loader-spinner/dist/index.js\");\n/* harmony import */ var react_loader_spinner__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_loader_spinner__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Button */ \"./node_modules/@material-ui/core/esm/Button/index.js\");\n/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-i18next */ \"./node_modules/react-i18next/dist/es/index.js\");\n/* harmony import */ var react_reveal_Slide__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-reveal/Slide */ \"./node_modules/react-reveal/Slide.js\");\n/* harmony import */ var react_reveal_Slide__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_reveal_Slide__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _common_ButtonAnimation_AnimationButton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../common/ButtonAnimation/AnimationButton */ \"./src/common/ButtonAnimation/AnimationButton.js\");\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./styles */ \"./src/components/ContentBlock/RightContentBlock/styles.js\");\n/* harmony import */ var _styling_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./styling.css */ \"./src/components/ContentBlock/RightContentBlock/styling.css\");\n/* harmony import */ var _styling_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_styling_css__WEBPACK_IMPORTED_MODULE_8__);\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\n\n\n\n\n\n\n\n\n\nvar Row = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(function () {\n  return __webpack_require__.e(/*! import() | sula-antd */ \"vendors~sula-antd\").then(__webpack_require__.t.bind(null, /*! antd/lib/grid/row */ \"./node_modules/antd/lib/grid/row.js\", 7));\n});\nvar Col = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.lazy(function () {\n  return __webpack_require__.e(/*! import() | sula-antd */ \"vendors~sula-antd\").then(__webpack_require__.t.bind(null, /*! antd/lib/grid/col */ \"./node_modules/antd/lib/grid/col.js\", 7));\n}); // const Image2 = lazy(() => import('../ImageComponent/index.js'), {\n//     fallback: <div><Loader type=\"Rings\" color=\"#00BFFF\" height={80} width={80} /></div>\n// })\n// const ImageMain = lazy(() => import('../../MyCompGroup/myComp.js'), {\n//     fallback: <div><Loader type=\"Rings\" color=\"#00BFFF\" height={80} width={80} /></div>\n// })\n\nvar ImageMain = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__[\"lazy\"])(function () {\n  return Promise.all(/*! import() */[__webpack_require__.e(3), __webpack_require__.e(23)]).then(__webpack_require__.bind(null, /*! ../../LazyImages/index.js */ \"./src/components/LazyImages/index.js\"));\n}); // const ImageMain = lazy(() => import(\"../../MyCompGroup/myComp.js\"));\n\nvar RightBlock = function RightBlock(_ref) {\n  var title = _ref.title,\n      content = _ref.content,\n      contentTwo = _ref.contentTwo,\n      button = _ref.button,\n      icon = _ref.icon,\n      t = _ref.t,\n      id = _ref.id;\n\n  var scrollTo = function scrollTo(id) {\n    var element = document.getElementById(id);\n    element.scrollIntoView({\n      behavior: \"smooth\"\n    });\n  };\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__[\"Suspense\"], {\n    fallback: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, \"Loading..\")\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_7__[\"RightBlockContainer\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Row, {\n    type: \"flex\",\n    justify: \"space-between\",\n    align: \"middle\",\n    id: id\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Col, {\n    lg: 12,\n    md: 24,\n    sm: 24,\n    xs: 24\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_reveal_Slide__WEBPACK_IMPORTED_MODULE_5___default.a, {\n    left: true\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_7__[\"ContentWrapper\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h3\", null, t(title)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_7__[\"Content\"], null, t(content)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_7__[\"Content\"], null, \"Brothers Dominic and Joseph Panetta have built a reputable electrical contracting business specialising in all electrical installations and repairs for Residential and Commercial sectors. \"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_7__[\"Content\"], null, \"We offer expert advice to customers, and assist them with design and implementation solutions providing them with lasting, efficient and practical lighting designs. We ensure all your electrical needs are met.\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_7__[\"Content\"], null, \"Our guarantee of quality work and our commitment to providing the best and most cost-effective solutions to your electrical needs, is why JDP Electrical are known as trusted electrical contractors..\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h6\", {\n    style: {\n      color: 'red',\n      fontSize: 22,\n      textAlign: 'center',\n      marginBottom: 5,\n      marginTop: -80\n    }\n  }, \"\\u201COur approach is simple \\u2013 we treat your home like our own.\\u201D\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Col, {\n    lg: 12,\n    md: 24,\n    sm: 24,\n    xs: 24\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h6\", {\n    style: {\n      color: 'black',\n      fontSize: 20,\n      textAlign: 'center',\n      marginBottom: 40,\n      marginTop: -80\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_7__[\"CustomNavLinkSmall\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    id: \"ButtonMain\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"a\", {\n    href: \"tel:02-9419-7947\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    classes: {\n      root: 'buttonMain',\n      label: 'button-label-main'\n    },\n    style: {\n      marginBottom: 40,\n      background: 'FFF',\n      color: 'rgb(209, 29, 50)',\n      fontSize: '1rem',\n      fontWeight: 600,\n      width: \"100%\",\n      border: '2px solid  rgb(209, 29, 50)',\n      borderRadius: \"8px\",\n      height: \"50px\",\n      right: \"0\",\n      outline: \"none\",\n      cursor: \"pointer\",\n      maxWidth: \"180px\"\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", {\n    style: {\n      padding: \"1px\",\n      paddingTop: \"18px\"\n    }\n  }, \" CALL US NOW  \"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_PhoneForwarded__WEBPACK_IMPORTED_MODULE_1___default.a, null))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Row, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"row\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"col-sm-6 col-md-5 col-md-offset-2 col-lg-6 col-lg-offset-0\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_7__[\"ButtonWrapper\"], null, button && _typeof(button) === \"object\" && button.map(function (item, id) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_ButtonAnimation_AnimationButton__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n      key: id\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_7__[\"Span\"], null, t(item.title1)));\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_7__[\"ButtonWrapper\"], null, button && _typeof(button) === \"object\" && button.map(function (item, id) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n      key: id,\n      color: item.color,\n      width: \"true\",\n      onClick: function onClick() {\n        return scrollTo(\"Team\");\n      }\n    }, t(item.title));\n  })))))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Col, {\n    lg: 12,\n    md: 24,\n    sm: 24,\n    xs: 24\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_reveal_Slide__WEBPACK_IMPORTED_MODULE_5___default.a, {\n    right: true\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__[\"Suspense\"], {\n    fallback: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_loader_spinner__WEBPACK_IMPORTED_MODULE_2___default.a, {\n      type: \"Rings\",\n      color: \"#00BFFF\",\n      height: 100,\n      width: 100,\n      timeout: 3000\n    }))\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ImageMain, {\n    rel: \"preload\",\n    alt: \"group\"\n  })))))));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_i18next__WEBPACK_IMPORTED_MODULE_4__[\"withTranslation\"])()(RightBlock));\n\n//# sourceURL=webpack:///./src/components/ContentBlock/RightContentBlock/index.js?");

/***/ }),

/***/ "./src/components/ContentBlock/RightContentBlock/styles.js":
/*!*****************************************************************!*\
  !*** ./src/components/ContentBlock/RightContentBlock/styles.js ***!
  \*****************************************************************/
/*! exports provided: RightBlockContainer, NavLink, Content, Span, ContentWrapper, ButtonWrapper, CustomNavLinkSmall */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"RightBlockContainer\", function() { return RightBlockContainer; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"NavLink\", function() { return NavLink; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Content\", function() { return Content; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Span\", function() { return Span; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ContentWrapper\", function() { return ContentWrapper; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ButtonWrapper\", function() { return ButtonWrapper; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CustomNavLinkSmall\", function() { return CustomNavLinkSmall; });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\nvar _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7;\n\nfunction _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }\n\n\nvar RightBlockContainer = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].section(_templateObject || (_templateObject = _taggedTemplateLiteral([\"\\n  position: relative;\\n  padding: 0rem 1rem 10rem 2rem;\\n\\n  @media only screen and (max-width: 768px) {\\n    padding: 0em 0 6rem;\\n  }\\n\"])));\nvar NavLink = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral([\"\\n  display: inline-block;\\n  text-align: center;\\n  \\n\"])));\nvar Content = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].p(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral([\"\\n  margin: 1.5rem 0 2rem 0;\\n  font-size: 20px\\n\"])));\nvar Span = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].p(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral([\"\\n  margin: -0.2rem 3rem 0rem -1rem;\\n  font-size: 16px\\n\"])));\nvar ContentWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral([\"\\n  position: relative;\\n  max-width: 640px;\\n  margin: 10rem 0rem 0rem 0rem;\\n\\n  @media only screen and (max-width: 480px) {\\n    margin: 2rem 0;\\n  }\\n\"])));\nvar ButtonWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral([\"\\n  max-width: 400px;\\n  min-width: 400px;\\n  justify-content: space-between;\\n\"])));\nvar CustomNavLinkSmall = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(NavLink)(_templateObject7 || (_templateObject7 = _taggedTemplateLiteral([\"\\n  font-size: 1rem;\\n  color: #white;\\n  transition: color 0.2s ease-in;\\n  margin: 1.25rem 0.7rem;\\n  \\n  \\n\\n  @media only screen and (max-width: 768px) {\\n    margin: 1.25rem 2rem;\\n  }\\n\"])));\n\n//# sourceURL=webpack:///./src/components/ContentBlock/RightContentBlock/styles.js?");

/***/ }),

/***/ "./src/components/ContentBlock/RightContentBlock/styling.css":
/*!*******************************************************************!*\
  !*** ./src/components/ContentBlock/RightContentBlock/styling.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/components/ContentBlock/RightContentBlock/styling.css?");

/***/ }),

/***/ "./src/components/ContentBlock/index.js":
/*!**********************************************!*\
  !*** ./src/components/ContentBlock/index.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _LeftContentBlock__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LeftContentBlock */ \"./src/components/ContentBlock/LeftContentBlock/index.js\");\n/* harmony import */ var _RightContentBlock__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RightContentBlock */ \"./src/components/ContentBlock/RightContentBlock/index.js\");\n\n\n\nvar ContentBlock = function ContentBlock(props) {\n  if (props.type === \"left\") return /*#__PURE__*/React.createElement(_LeftContentBlock__WEBPACK_IMPORTED_MODULE_0__[\"default\"], props);\n  if (props.type === \"right\") return /*#__PURE__*/React.createElement(_RightContentBlock__WEBPACK_IMPORTED_MODULE_1__[\"default\"], props);\n  return null;\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ContentBlock);\n\n//# sourceURL=webpack:///./src/components/ContentBlock/index.js?");

/***/ })

}]);