var _excluded = ["name", "children"],
  _excluded2 = ["name"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
import React from 'react';
import { Form } from 'antd';
export var toArr = function toArr(str) {
  return Array.isArray(str) ? str : [str];
};
export var FormItemContext = /*#__PURE__*/React.createContext([]);
export var FormList = function FormList(_ref) {
  var name = _ref.name,
    children = _ref.children,
    props = _objectWithoutProperties(_ref, _excluded);
  var prefixPath = React.useContext(FormItemContext);
  var concatName = [].concat(_toConsumableArray(prefixPath), _toConsumableArray(toArr(name)));
  return /*#__PURE__*/React.createElement(Form.List, _extends({
    name: concatName,
    children: children
  }, props));
};
export var FormItem = function FormItem(_ref2) {
  var name = _ref2.name,
    props = _objectWithoutProperties(_ref2, _excluded2);
  var prefixPath = React.useContext(FormItemContext);
  var concatName = name !== undefined ? [].concat(_toConsumableArray(prefixPath), _toConsumableArray(toArr(name))) : undefined;
  return /*#__PURE__*/React.createElement(Form.Item, _extends({
    name: concatName
  }, props));
};
export var FormItemGroup = function FormItemGroup(_ref3) {
  var prefix = _ref3.prefix,
    children = _ref3.children;
  var prefixPath = React.useContext(FormItemContext);
  var concatPath = React.useMemo(function () {
    return [].concat(_toConsumableArray(prefixPath), _toConsumableArray(toArr(prefix)));
  }, [prefixPath, prefix]);
  return /*#__PURE__*/React.createElement(FormItemContext.Provider, {
    value: concatPath
  }, children);
};