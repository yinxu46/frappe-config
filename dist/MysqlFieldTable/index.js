function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var _excluded = ["children"];
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
import React, { useEffect } from 'react';
import { Button, Checkbox, Input, InputNumber, Select, Table } from 'antd';
import { CloseCircleOutlined, MenuOutlined, PlusOutlined } from '@ant-design/icons';
import { DndContext } from '@dnd-kit/core';
import { restrictToVerticalAxis } from '@dnd-kit/modifiers';
import { arrayMove, SortableContext, useSortable, verticalListSortingStrategy } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
export var MysqlFieldTypeOptions = [{
  label: 'bigint',
  value: 'bigint'
}, {
  label: 'char',
  value: 'char'
}, {
  label: 'date',
  value: 'date'
}, {
  label: 'datetime',
  value: 'datetime'
}, {
  label: 'decimal',
  value: 'decimal'
}, {
  label: 'int',
  value: 'int'
}, {
  label: 'json',
  value: 'json'
}, {
  label: 'longtext',
  value: 'longtext'
}, {
  label: 'text',
  value: 'text'
}, {
  label: 'timestamp',
  value: 'timestamp'
}, {
  label: 'tinyint',
  value: 'tinyint'
}, {
  label: 'varchar',
  value: 'varchar'
}];
var Row = function Row(_ref) {
  var children = _ref.children,
    props = _objectWithoutProperties(_ref, _excluded);
  var _useSortable = useSortable({
      id: props['data-row-key']
    }),
    attributes = _useSortable.attributes,
    listeners = _useSortable.listeners,
    setNodeRef = _useSortable.setNodeRef,
    setActivatorNodeRef = _useSortable.setActivatorNodeRef,
    transform = _useSortable.transform,
    transition = _useSortable.transition,
    isDragging = _useSortable.isDragging;
  var style = _objectSpread(_objectSpread({}, props.style), {}, {
    transform: CSS.Transform.toString(transform && _objectSpread(_objectSpread({}, transform), {}, {
      scaleY: 1
    })),
    transition: transition
  }, isDragging ? {
    position: 'relative',
    zIndex: 9999
  } : {});
  return /*#__PURE__*/React.createElement("tr", _extends({}, props, {
    ref: setNodeRef,
    style: style
  }, attributes), React.Children.map(children, function (child) {
    if (child.key === 'sort') {
      return /*#__PURE__*/React.cloneElement(child, {
        children: /*#__PURE__*/React.createElement(MenuOutlined, _extends({
          ref: setActivatorNodeRef,
          style: {
            touchAction: 'none',
            cursor: 'move'
          }
        }, listeners))
      });
    }
    return child;
  }));
};
var InternalMysqlFieldTable = function InternalMysqlFieldTable(props, ref) {
  var defaultValue = props.defaultValue,
    onChange = props.onChange;
  var _React$useState = React.useState(),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    editKey = _React$useState2[0],
    setEditKey = _React$useState2[1];
  var _React$useState3 = React.useState((defaultValue !== null && defaultValue !== void 0 ? defaultValue : []).map(function (e, k) {
      return _objectSpread({
        _key: k + 1
      }, e);
    })),
    _React$useState4 = _slicedToArray(_React$useState3, 2),
    data = _React$useState4[0],
    setData = _React$useState4[1];
  var add = function add() {
    var _key = Date.now();
    setEditKey(_key);
    setData([].concat(_toConsumableArray(data), [{
      _key: _key,
      name: '',
      type: 'int',
      nullable: false,
      key: false,
      comment: ''
    }]));
  };
  var remove = function remove(index) {
    var _data = _toConsumableArray(data);
    _data.splice(index, 1);
    setData(_data);
  };
  var handleColumnChange = function handleColumnChange(value, index) {
    var _data = _toConsumableArray(data);
    _data[index] = value;
    setData(_data);
  };
  var onDragEnd = function onDragEnd(_ref2) {
    var active = _ref2.active,
      over = _ref2.over;
    if (active.id !== (over === null || over === void 0 ? void 0 : over.id)) {
      setData(function (previous) {
        var activeIndex = previous.findIndex(function (i) {
          return i._key === active.id;
        });
        var overIndex = previous.findIndex(function (i) {
          return i._key === (over === null || over === void 0 ? void 0 : over.id);
        });
        return arrayMove(previous, activeIndex, overIndex);
      });
    }
  };
  useEffect(function () {
    onChange === null || onChange === void 0 || onChange(data);
  }, [data]);
  React.useImperativeHandle(ref, function () {
    return {
      data: data,
      add: add,
      remove: remove
    };
  });
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(DndContext, {
    modifiers: [restrictToVerticalAxis],
    onDragEnd: onDragEnd
  }, /*#__PURE__*/React.createElement(SortableContext, {
    items: data.map(function (i) {
      var _i$_key;
      return (_i$_key = i._key) !== null && _i$_key !== void 0 ? _i$_key : 0;
    }),
    strategy: verticalListSortingStrategy
  }, /*#__PURE__*/React.createElement(Table, {
    onRow: function onRow(record, index) {
      return {
        onClick: function onClick() {
          setEditKey(record._key);
        }
      };
    },
    size: 'small',
    pagination: false,
    components: {
      body: {
        row: Row
      }
    },
    rowKey: "_key",
    dataSource: data,
    scroll: {
      x: 680,
      y: 400
    },
    columns: [{
      key: 'sort',
      width: 30
    }, {
      dataIndex: 'name',
      title: '名称',
      width: 100,
      render: function render(value, record, index) {
        return record._key == editKey ? /*#__PURE__*/React.createElement(Input, {
          size: 'small',
          defaultValue: value,
          onInput: function onInput(e) {
            return handleColumnChange(_objectSpread(_objectSpread({}, record), {}, {
              name: e.currentTarget.value.trim()
            }), index);
          }
        }) : value;
      }
    }, {
      dataIndex: 'type',
      title: '类型',
      width: 100,
      render: function render(value, record, index) {
        return record._key == editKey ? /*#__PURE__*/React.createElement(Select, {
          size: 'small',
          defaultValue: value,
          options: MysqlFieldTypeOptions,
          onChange: function onChange(e) {
            return handleColumnChange(_objectSpread(_objectSpread({}, record), {}, {
              type: e
            }), index);
          },
          style: {
            width: '100%'
          }
        }) : value;
      }
    }, {
      dataIndex: 'size',
      title: '长度',
      width: 100,
      render: function render(value, record, index) {
        return record._key == editKey ? /*#__PURE__*/React.createElement(InputNumber, {
          size: 'small',
          type: 'number',
          defaultValue: value,
          min: 0,
          onInput: function onInput(e) {
            return handleColumnChange(_objectSpread(_objectSpread({}, record), {}, {
              size: parseInt(e)
            }), index);
          }
        }) : value > 0 ? value : '';
      }
    }, {
      dataIndex: 'digit',
      title: '小数',
      width: 100,
      render: function render(value, record, index) {
        return record._key == editKey ? /*#__PURE__*/React.createElement(InputNumber, {
          size: 'small',
          type: 'number',
          defaultValue: value,
          min: 0,
          onInput: function onInput(e) {
            return handleColumnChange(_objectSpread(_objectSpread({}, record), {}, {
              digit: parseInt(e)
            }), index);
          }
        }) : value > 0 ? value : '';
      }
    }, {
      dataIndex: 'nullable',
      title: 'Nullable',
      width: 60,
      render: function render(value, record, index) {
        return /*#__PURE__*/React.createElement(Checkbox, {
          checked: value,
          onClick: function onClick(e) {
            var _e$target;
            return handleColumnChange(_objectSpread(_objectSpread({}, record), {}, {
              nullable: (_e$target = e.target) === null || _e$target === void 0 ? void 0 : _e$target.checked
            }), index);
          }
        });
      }
    }, {
      dataIndex: 'key',
      title: '键',
      width: 30,
      render: function render(value, record, index) {
        return /*#__PURE__*/React.createElement(Checkbox, {
          checked: value,
          onClick: function onClick(e) {
            var _e$target2;
            return handleColumnChange(_objectSpread(_objectSpread({}, record), {}, {
              key: (_e$target2 = e.target) === null || _e$target2 === void 0 ? void 0 : _e$target2.checked
            }), index);
          }
        });
      }
    }, {
      dataIndex: 'comment',
      title: '注释',
      width: 120,
      render: function render(value, record, index) {
        return record._key == editKey ? /*#__PURE__*/React.createElement(Input, {
          size: 'small',
          defaultValue: value,
          onInput: function onInput(e) {
            return handleColumnChange(_objectSpread(_objectSpread({}, record), {}, {
              comment: e.currentTarget.value.trim()
            }), index);
          }
        }) : value;
      }
    }, {
      width: 30,
      render: function render(value, record, index) {
        return /*#__PURE__*/React.createElement(CloseCircleOutlined, {
          onClick: function onClick(_) {
            return remove(index);
          }
        });
      }
    }]
  }))), /*#__PURE__*/React.createElement(Button, {
    style: {
      marginTop: 8
    },
    block: true,
    type: 'dashed',
    icon: /*#__PURE__*/React.createElement(PlusOutlined, null),
    onClick: function onClick(_) {
      return add();
    }
  }, "\u65B0\u589E\u5B57\u6BB5"));
};
export var MysqlFieldTable = /*#__PURE__*/React.forwardRef(InternalMysqlFieldTable);