function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
import React from 'react';
import { Button, Card, Checkbox, Col, Form, Input, Row, Select } from 'antd';
import { FrappeApiSelectForm } from "./lib/FrappeApiSelect";
import { FrappeApiOptionForm } from "./lib/FrappeApiOption";
var FrappeApiTypeOptions = ['SELECT', 'GET', 'OPTION', 'SET', 'CREATE', 'UPDATE', 'DELETE', 'IMPORT', 'EXPORT', 'CUSTOM'].map(function (value) {
  return {
    label: value,
    value: value
  };
});
var InternalFrappeApiForm = function InternalFrappeApiForm(props, ref) {
  var defaultValue = props.defaultValue,
    onFinish = props.onFinish;
  var _Form$useForm = Form.useForm(),
    _Form$useForm2 = _slicedToArray(_Form$useForm, 1),
    form = _Form$useForm2[0];
  var type = Form.useWatch('type', form);
  return /*#__PURE__*/React.createElement(Form, {
    ref: ref,
    size: 'middle',
    scrollToFirstError: {
      block: "center"
    },
    variant: 'filled',
    form: form,
    initialValues: defaultValue,
    onFinish: onFinish,
    layout: 'vertical'
  }, /*#__PURE__*/React.createElement(Row, {
    gutter: 24
  }, /*#__PURE__*/React.createElement(Col, {
    span: 12
  }, /*#__PURE__*/React.createElement(Form.Item, {
    label: 'API名称',
    name: 'title',
    required: true,
    rules: [{
      required: true,
      message: '请输入API名称'
    }]
  }, /*#__PURE__*/React.createElement(Input, {
    maxLength: 32
  }))), /*#__PURE__*/React.createElement(Col, {
    span: 12
  }, /*#__PURE__*/React.createElement(Form.Item, {
    label: 'API类型',
    name: 'type',
    required: true,
    rules: [{
      required: true,
      message: '请选择API类型'
    }]
  }, /*#__PURE__*/React.createElement(Select, {
    options: FrappeApiTypeOptions,
    style: {
      width: '100%'
    }
  }))), /*#__PURE__*/React.createElement(Col, {
    span: 12
  }, /*#__PURE__*/React.createElement(Form.Item, {
    name: 'status',
    valuePropName: "checked"
  }, /*#__PURE__*/React.createElement(Checkbox, null, "\u542F\u7528API"))), /*#__PURE__*/React.createElement(Col, {
    span: 12
  }, /*#__PURE__*/React.createElement(Form.Item, {
    name: 'permissions',
    valuePropName: "checked"
  }, /*#__PURE__*/React.createElement(Checkbox, null, "\u9700\u8981\u9A8C\u8BC1\u6743\u9650"))), /*#__PURE__*/React.createElement(Col, {
    span: 24
  }, /*#__PURE__*/React.createElement(Form.Item, {
    label: '注释',
    name: 'comment'
  }, /*#__PURE__*/React.createElement(Input.TextArea, {
    maxLength: 255
  }))), /*#__PURE__*/React.createElement(Col, {
    span: 24
  }, /*#__PURE__*/React.createElement(Form.Item, {
    label: 'API配置'
  }, /*#__PURE__*/React.createElement(Card, null, type == 'SELECT' ? /*#__PURE__*/React.createElement(FrappeApiSelectForm, {
    form: form,
    prefix: ["config"]
  }) : '', type == 'OPTION' ? /*#__PURE__*/React.createElement(FrappeApiOptionForm, {
    form: form,
    prefix: ["config"]
  }) : '', type == 'GET' ? /*#__PURE__*/React.createElement("div", null, "GET") : '', type == 'SET' ? /*#__PURE__*/React.createElement("div", null, "SET") : '', type == 'CREATE' ? /*#__PURE__*/React.createElement("div", null, "CREATE") : '', type == 'UPDATE' ? /*#__PURE__*/React.createElement("div", null, "UPDATE") : '', type == 'DELETE' ? /*#__PURE__*/React.createElement("div", null, "DELETE") : '', type == 'IMPORT' ? /*#__PURE__*/React.createElement("div", null, "IMPORT") : '', type == 'EXPORT' ? /*#__PURE__*/React.createElement("div", null, "EXPORT") : '', type == 'CUSTOM' ? /*#__PURE__*/React.createElement("div", null, "CUSTOM") : ''))), /*#__PURE__*/React.createElement(Col, {
    span: 24
  }, /*#__PURE__*/React.createElement(Form.Item, null, /*#__PURE__*/React.createElement(Button, {
    block: true,
    type: 'primary',
    htmlType: 'submit'
  }, "\u63D0\u4EA4")))));
};
var FrappeApiForm = /*#__PURE__*/React.forwardRef(InternalFrappeApiForm);
export default FrappeApiForm;