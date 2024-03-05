function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
import React from 'react';
import { Button, Space } from 'antd';
import { MysqlFieldTable } from "./..";
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
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(MysqlFieldTable, {
    ref: ref,
    defaultValue: value,
    onChange: function onChange(value) {
      setValue(value);
      console.log(value);
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 16
    }
  }, /*#__PURE__*/React.createElement(Space, null, /*#__PURE__*/React.createElement(Button, {
    onClick: function onClick(_) {
      var _ref$current;
      console.log((_ref$current = ref.current) === null || _ref$current === void 0 ? void 0 : _ref$current.data);
    }
  }, "\u83B7\u53D6\u6570\u636E"), /*#__PURE__*/React.createElement(Button, {
    onClick: function onClick(_) {
      var _ref$current2;
      (_ref$current2 = ref.current) === null || _ref$current2 === void 0 || _ref$current2.add();
    }
  }, "\u65B0\u589E\u6570\u636E"))), /*#__PURE__*/React.createElement("div", null, JSON.stringify(value)));
};
export default DuoPage;