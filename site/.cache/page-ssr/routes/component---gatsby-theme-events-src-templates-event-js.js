"use strict";
exports.id = "component---gatsby-theme-events-src-templates-event-js";
exports.ids = ["component---gatsby-theme-events-src-templates-event-js"];
exports.modules = {

/***/ "../gatsby-theme-events/src/components/event.js":
/*!******************************************************!*\
  !*** ../gatsby-theme-events/src/components/event.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const getDate = (date, {
  day = true,
  month = true,
  year = true
} = {}) => date.toLocaleDateString("en-US", {
  day: day ? "numeric" : undefined,
  month: month ? "long" : undefined,
  year: year ? "numeric" : undefined
});
const EventDate = ({
  startDate,
  endDate
}) => {
  const start = new Date(startDate);
  const end = new Date(endDate);
  const isOneDay = start.toDateString() === end.toDateString();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("time", {
    dateTime: start.toISOString()
  }, getDate(start, {
    year: isOneDay
  })), !isOneDay && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, "-", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("time", {
    dateTime: end.toISOString()
  }, getDate(end, {
    month: start.getMonth() !== end.getMonth()
  }))));
};
const Event = ({
  name,
  location,
  url,
  startDate,
  endDate
}) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h2", null, name, " (", location, ")"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(EventDate, {
  startDate: startDate,
  endDate: endDate
})), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Website: ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
  href: url
}, url)));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Event);

/***/ }),

/***/ "../gatsby-theme-events/src/components/layout.js":
/*!*******************************************************!*\
  !*** ../gatsby-theme-events/src/components/layout.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! theme-ui */ "../node_modules/@theme-ui/components/dist/theme-ui-components.esm.js");


const Layout = ({
  children
}) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(theme_ui__WEBPACK_IMPORTED_MODULE_1__.Heading, null, "Gatsby Events Theme"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(theme_ui__WEBPACK_IMPORTED_MODULE_1__.Container, null, children));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Layout);

/***/ }),

/***/ "../gatsby-theme-events/src/templates/event.js?export=default":
/*!********************************************************************!*\
  !*** ../gatsby-theme-events/src/templates/event.js?export=default ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/layout */ "../gatsby-theme-events/src/components/layout.js");
/* harmony import */ var _components_event__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/event */ "../gatsby-theme-events/src/components/event.js");



const query = "3497968161";
const EventTemplate = ({
  data: {
    event
  }
}) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_layout__WEBPACK_IMPORTED_MODULE_1__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_event__WEBPACK_IMPORTED_MODULE_2__["default"], event));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EventTemplate);

/***/ })

};
;
//# sourceMappingURL=component---gatsby-theme-events-src-templates-event-js.js.map