function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
import React from 'react';
import { FrappeApiForm } from "./..";
var DuoPage = function DuoPage(props) {
  var _React$useState = React.useState([{
      name: 'id',
      type: 'int',
      size: 10,
      key: true,
      comment: 'ID',
      nullable: false
    }]),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    value = _React$useState2[0],
    setValue = _React$useState2[1];
  var ref = React.useRef();
  var formRef = React.useRef();
  var cacheValue = localStorage.getItem("form");
  var _React$useState3 = React.useState(cacheValue ? JSON.parse(cacheValue) : undefined),
    _React$useState4 = _slicedToArray(_React$useState3, 2),
    formValue = _React$useState4[0],
    setFormValue = _React$useState4[1];
  var onSubmit = function onSubmit(value) {
    setFormValue(value);
    localStorage.setItem("form", JSON.stringify(value));
  };
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(FrappeApiForm, {
    ref: formRef,
    defaultValue: formValue,
    onFinish: onSubmit
  }));
};
export default DuoPage;