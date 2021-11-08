"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_charts_apexcharts_Pie5_js"],{

/***/ "./resources/js/components/charts/apexcharts/Pie5.js":
/*!***********************************************************!*\
  !*** ./resources/js/components/charts/apexcharts/Pie5.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react-apexcharts'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }





var ApexRedialBar2 = /*#__PURE__*/function (_React$Component) {
  _inherits(ApexRedialBar2, _React$Component);

  var _super = _createSuper(ApexRedialBar2);

  function ApexRedialBar2(props) {
    var _this;

    _classCallCheck(this, ApexRedialBar2);

    _this = _super.call(this, props);
    _this.state = {
      series: [71, 63, 90],
      options: {
        chart: {
          type: "radialBar",
          //width:320,
          // height: 370,
          offsetY: 0,
          offsetX: 0
        },
        plotOptions: {
          radialBar: {
            size: undefined,
            inverseOrder: false,
            hollow: {
              margin: 0,
              size: "30%",
              background: "transparent"
            },
            track: {
              show: true,
              background: "#e1e5ff",
              strokeWidth: "10%",
              opacity: 1,
              margin: 18 // margin is in pixels

            }
          }
        },
        responsive: [{
          breakpoint: 830,
          options: {
            chart: {
              offsetY: 0,
              offsetX: 0
            },
            legend: {
              position: "bottom",
              offsetX: 0,
              offsetY: 0
            },
            plotOptions: {
              radialBar: {
                hollow: {
                  size: "20%"
                }
              }
            }
          }
        }, {
          breakpoint: 800,
          options: {
            chart: {
              offsetY: 0,
              offsetX: 0
            },
            legend: {
              position: "bottom",
              offsetX: 0,
              offsetY: 0
            },
            plotOptions: {
              radialBar: {
                hollow: {
                  size: "10%"
                }
              }
            }
          }
        }, {
          breakpoint: 768,
          options: {
            chart: {
              offsetY: 0,
              offsetX: 0
            },
            legend: {
              position: "bottom",
              offsetX: 0,
              offsetY: 0
            },
            plotOptions: {
              radialBar: {
                hollow: {
                  size: "30%"
                }
              }
            }
          }
        }, {
          breakpoint: 330,
          options: {
            chart: {
              offsetY: 0,
              offsetX: 0
            },
            legend: {
              position: "bottom",
              offsetX: 0,
              offsetY: 0
            },
            plotOptions: {
              radialBar: {
                hollow: {
                  size: "20%"
                }
              }
            }
          }
        }],
        fill: {
          opacity: 1
        },
        colors: ["#e36cd9", "#e36cd9", "#e36cd9"],
        labels: ["Ticket A", "Ticket B", "Ticket C"],
        legend: {
          fontSize: "14px",
          show: true,
          position: "bottom"
        }
      }
    };
    return _this;
  }

  _createClass(ApexRedialBar2, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
        id: "chart",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react-apexcharts'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
          options: this.state.options,
          series: this.state.series,
          type: "radialBar",
          height: this.props.height ? this.props.height : 370
        })
      });
    }
  }]);

  return ApexRedialBar2;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ApexRedialBar2);

/***/ })

}]);