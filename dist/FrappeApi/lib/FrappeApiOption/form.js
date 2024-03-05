var _excluded = ["key", "name"];
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
import React from 'react';
import { Form, Row, Col, Input, Space, Button, Select, Card } from 'antd';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import { FrappeApiSelectForm } from "../FrappeApiSelect";
import { FormItem, FormItemGroup, FormList, toArr } from "../util";
var FrappeApiOptionForm = function FrappeApiOptionForm(props) {
  var form = props.form,
    prefix = props.prefix;
  var type = Form.useWatch(["config", "type"], form);
  return /*#__PURE__*/React.createElement(FormItemGroup, {
    prefix: prefix
  }, /*#__PURE__*/React.createElement(Row, {
    gutter: 24
  }, /*#__PURE__*/React.createElement(Col, {
    span: 12
  }, /*#__PURE__*/React.createElement(FormItem, {
    label: '数据源类型',
    name: 'type',
    required: true,
    rules: [{
      required: true,
      message: '请选择数据源'
    }]
  }, /*#__PURE__*/React.createElement(Select, {
    options: [{
      label: "静态",
      value: "static"
    }, {
      label: '动态',
      value: 'dynamic'
    }],
    style: {
      width: '100%'
    }
  }))), type == "static" ? /*#__PURE__*/React.createElement(Col, {
    span: 24
  }, /*#__PURE__*/React.createElement(Form.Item, null, /*#__PURE__*/React.createElement(Card, {
    size: 'small',
    title: "数据源配置"
  }, /*#__PURE__*/React.createElement(FormList, {
    name: "options"
  }, function (fields, _ref) {
    var add = _ref.add,
      remove = _ref.remove;
    return /*#__PURE__*/React.createElement(React.Fragment, null, fields.map(function (_ref2) {
      var key = _ref2.key,
        name = _ref2.name,
        restField = _objectWithoutProperties(_ref2, _excluded);
      return /*#__PURE__*/React.createElement(Space, {
        key: key,
        style: {
          display: 'flex',
          marginBottom: 8
        },
        align: "baseline"
      }, /*#__PURE__*/React.createElement(Form.Item, _extends({}, restField, {
        name: [name, 'label'],
        rules: [{
          required: true,
          message: '请输入显示标签'
        }]
      }), /*#__PURE__*/React.createElement(Input, {
        placeholder: "\u663E\u793A\u6807\u7B7E"
      })), /*#__PURE__*/React.createElement(Form.Item, _extends({}, restField, {
        name: [name, 'value'],
        rules: [{
          required: true,
          message: '请输入数据值'
        }]
      }), /*#__PURE__*/React.createElement(Input, {
        placeholder: "\u6570\u636E\u503C"
      })), /*#__PURE__*/React.createElement(MinusCircleOutlined, {
        onClick: function onClick() {
          return remove(name);
        }
      }));
    }), /*#__PURE__*/React.createElement(Form.Item, null, /*#__PURE__*/React.createElement(Button, {
      type: "dashed",
      onClick: function onClick() {
        return add();
      },
      block: true,
      icon: /*#__PURE__*/React.createElement(PlusOutlined, null)
    }, "\u6DFB\u52A0\u6570\u636E")));
  })))) : "", type == "dynamic" ? /*#__PURE__*/React.createElement(Col, {
    span: 24
  }, /*#__PURE__*/React.createElement(FormItemGroup, {
    prefix: ['config']
  }, /*#__PURE__*/React.createElement(FrappeApiSelectForm, {
    form: form,
    prefix: [].concat(_toConsumableArray(toArr(prefix)), ["config"])
  }))) : ""));
};
export default FrappeApiOptionForm;