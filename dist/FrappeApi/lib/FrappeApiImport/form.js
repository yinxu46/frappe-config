var _excluded = ["key", "name"],
  _excluded2 = ["key", "name"],
  _excluded3 = ["key", "name"],
  _excluded4 = ["key", "name"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
import React from 'react';
import { Form, Row, Col, Input, Checkbox, Space, Button, Select, Card } from 'antd';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import { FormItem, FormItemGroup, FormList } from "../util";
var FrappeApiSelectForm = function FrappeApiSelectForm(props) {
  var prefix = props.prefix;
  return /*#__PURE__*/React.createElement(FormItemGroup, {
    prefix: prefix
  }, /*#__PURE__*/React.createElement(Row, {
    gutter: 24
  }, /*#__PURE__*/React.createElement(Col, {
    span: 24
  }, /*#__PURE__*/React.createElement(FormItem, {
    name: "tableName",
    label: "数据表名称",
    required: true,
    rules: [{
      required: true,
      message: "请输入数据表名称"
    }]
  }, /*#__PURE__*/React.createElement(Input, {
    maxLength: 32
  }))), /*#__PURE__*/React.createElement(Col, {
    span: 12
  }, /*#__PURE__*/React.createElement(Form.Item, {
    name: "isPaginate",
    valuePropName: "checked"
  }, /*#__PURE__*/React.createElement(Checkbox, null, "\u5206\u9875\u67E5\u8BE2"))), /*#__PURE__*/React.createElement(Col, {
    span: 12
  }, /*#__PURE__*/React.createElement(Form.Item, {
    name: "isTree",
    valuePropName: "checked"
  }, /*#__PURE__*/React.createElement(Checkbox, null, "\u8FD4\u56DE\u6811\u7ED3\u6784\u6570\u636E"))), /*#__PURE__*/React.createElement(Col, {
    span: 24
  }, /*#__PURE__*/React.createElement(Form.Item, null, /*#__PURE__*/React.createElement(Card, {
    size: 'small',
    title: "查询条件配置"
  }, /*#__PURE__*/React.createElement(FormList, {
    name: "conditions"
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
        name: [name, 'name'],
        rules: [{
          required: true,
          message: '请输入字段名'
        }]
      }), /*#__PURE__*/React.createElement(Input, {
        placeholder: "\u5B57\u6BB5\u540D"
      })), /*#__PURE__*/React.createElement(Form.Item, _extends({}, restField, {
        name: [name, 'raw']
      }), /*#__PURE__*/React.createElement(Input, {
        placeholder: "raw"
      })), /*#__PURE__*/React.createElement(Form.Item, _extends({}, restField, {
        name: [name, 'type'],
        rules: [{
          required: true,
          message: '请选择查询方式'
        }]
      }), /*#__PURE__*/React.createElement(Select, {
        placeholder: "\u67E5\u8BE2\u65B9\u5F0F",
        options: ["=", ">", "<", ">=", "<=", "in", "like", "left_like", "right_like", "between", "date_range", "datetime_range"].map(function (value) {
          return {
            label: value,
            value: value
          };
        }),
        style: {
          width: "100%",
          minWidth: 120
        }
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
    }, "\u6DFB\u52A0\u6761\u4EF6\u914D\u7F6E")));
  })))), /*#__PURE__*/React.createElement(Col, {
    span: 24
  }, /*#__PURE__*/React.createElement(Form.Item, null, /*#__PURE__*/React.createElement(Card, {
    size: 'small',
    title: "查询字段配置"
  }, /*#__PURE__*/React.createElement(FormList, {
    name: "tableFields"
  }, function (fields, _ref3) {
    var add = _ref3.add,
      remove = _ref3.remove;
    return /*#__PURE__*/React.createElement(React.Fragment, null, fields.map(function (_ref4) {
      var key = _ref4.key,
        name = _ref4.name,
        restField = _objectWithoutProperties(_ref4, _excluded2);
      return /*#__PURE__*/React.createElement(Space, {
        key: key,
        style: {
          display: 'flex',
          marginBottom: 8
        },
        align: "baseline"
      }, /*#__PURE__*/React.createElement(Form.Item, _extends({}, restField, {
        name: [name, 'name'],
        rules: [{
          required: true,
          message: '请输入字段名'
        }]
      }), /*#__PURE__*/React.createElement(Input, {
        placeholder: "\u5B57\u6BB5\u540D"
      })), /*#__PURE__*/React.createElement(Form.Item, _extends({}, restField, {
        name: [name, 'type'],
        rules: [{
          required: true,
          message: '请选择字段类型'
        }]
      }), /*#__PURE__*/React.createElement(Select, {
        placeholder: "\u5B57\u6BB5\u7C7B\u578B",
        options: ["int", "text", "mobile", "date", "datetime", "select"].map(function (value) {
          return {
            label: value,
            value: value
          };
        }),
        style: {
          width: "100%",
          minWidth: 120
        }
      })), /*#__PURE__*/React.createElement(Form.Item, _extends({}, restField, {
        name: [name, 'label']
      }), /*#__PURE__*/React.createElement(Input, {
        placeholder: "\u5B57\u6BB5\u6CE8\u91CA"
      })), /*#__PURE__*/React.createElement(Form.Item, _extends({}, restField, {
        name: [name, 'raw']
      }), /*#__PURE__*/React.createElement(Input, {
        placeholder: "Raw"
      })), /*#__PURE__*/React.createElement(Form.Item, _extends({}, restField, {
        name: [name, 'alias']
      }), /*#__PURE__*/React.createElement(Input, {
        placeholder: "\u5B57\u6BB5\u522B\u540D"
      })), /*#__PURE__*/React.createElement(Form.Item, _extends({}, restField, {
        name: [name, 'options']
      }), /*#__PURE__*/React.createElement(Input, {
        placeholder: "Options"
      })), /*#__PURE__*/React.createElement(Form.Item, _extends({}, restField, {
        name: [name, 'format']
      }), /*#__PURE__*/React.createElement(Input, {
        placeholder: "Format"
      })), /*#__PURE__*/React.createElement(Form.Item, _extends({}, restField, {
        name: [name, 'privacy'],
        valuePropName: "checked"
      }), /*#__PURE__*/React.createElement(Checkbox, {
        style: {
          width: 60
        }
      }, "\u9690\u79C1")), /*#__PURE__*/React.createElement(MinusCircleOutlined, {
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
    }, "\u6DFB\u52A0\u6761\u4EF6\u914D\u7F6E")));
  })))), /*#__PURE__*/React.createElement(Col, {
    span: 24
  }, /*#__PURE__*/React.createElement(Form.Item, null, /*#__PURE__*/React.createElement(Card, {
    size: 'small',
    title: "关联JOIN配置"
  }, /*#__PURE__*/React.createElement(FormList, {
    name: "tableJoins"
  }, function (fields, _ref5) {
    var add = _ref5.add,
      remove = _ref5.remove;
    return /*#__PURE__*/React.createElement(React.Fragment, null, fields.map(function (_ref6) {
      var key = _ref6.key,
        name = _ref6.name,
        restField = _objectWithoutProperties(_ref6, _excluded3);
      return /*#__PURE__*/React.createElement(Space, {
        key: key,
        style: {
          display: 'flex',
          marginBottom: 8
        },
        align: "baseline"
      }, /*#__PURE__*/React.createElement(Form.Item, _extends({}, restField, {
        name: [name, 'name'],
        rules: [{
          required: true,
          message: '请输入字段名'
        }]
      }), /*#__PURE__*/React.createElement(Input, {
        placeholder: "\u5B57\u6BB5\u540D"
      })), /*#__PURE__*/React.createElement(Form.Item, _extends({}, restField, {
        name: [name, 'condition'],
        rules: [{
          required: true,
          message: '请输入条件'
        }]
      }), /*#__PURE__*/React.createElement(Input, {
        placeholder: "\u5173\u8054\u6761\u4EF6"
      })), /*#__PURE__*/React.createElement(Form.Item, _extends({}, restField, {
        name: [name, 'type'],
        rules: [{
          required: true,
          message: '请选择关联方式'
        }]
      }), /*#__PURE__*/React.createElement(Select, {
        placeholder: "\u5173\u8054\u65B9\u5F0F",
        options: ["left", "right", "inner"].map(function (value) {
          return {
            label: value,
            value: value
          };
        }),
        style: {
          width: "100%",
          minWidth: 120
        }
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
    }, "\u6DFB\u52A0\u5173\u8054\u914D\u7F6E")));
  })))), /*#__PURE__*/React.createElement(Col, {
    span: 24
  }, /*#__PURE__*/React.createElement(Form.Item, null, /*#__PURE__*/React.createElement(Card, {
    size: 'small',
    title: "默认排序配置"
  }, /*#__PURE__*/React.createElement(FormList, {
    name: "defaultOrder"
  }, function (fields, _ref7) {
    var add = _ref7.add,
      remove = _ref7.remove;
    return /*#__PURE__*/React.createElement(React.Fragment, null, fields.map(function (_ref8) {
      var key = _ref8.key,
        name = _ref8.name,
        restField = _objectWithoutProperties(_ref8, _excluded4);
      return /*#__PURE__*/React.createElement(Space, {
        key: key,
        style: {
          display: 'flex',
          marginBottom: 8
        },
        align: "baseline"
      }, /*#__PURE__*/React.createElement(Form.Item, _extends({}, restField, {
        name: [name, 'name'],
        rules: [{
          required: true,
          message: '请输入字段名'
        }]
      }), /*#__PURE__*/React.createElement(Input, {
        placeholder: "\u5B57\u6BB5\u540D"
      })), /*#__PURE__*/React.createElement(Form.Item, _extends({}, restField, {
        name: [name, 'sort'],
        rules: [{
          required: true,
          message: '请选择排序方式'
        }]
      }), /*#__PURE__*/React.createElement(Select, {
        placeholder: "\u6392\u5E8F\u65B9\u5F0F",
        options: ["asc", "desc"].map(function (value) {
          return {
            label: value,
            value: value
          };
        }),
        style: {
          width: "100%",
          minWidth: 120
        }
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
    }, "\u6DFB\u52A0\u6392\u5E8F\u914D\u7F6E")));
  })))), /*#__PURE__*/React.createElement(Col, {
    span: 24
  }, /*#__PURE__*/React.createElement(FormItem, {
    name: "tableGroup",
    label: "分组查询配置"
  }, /*#__PURE__*/React.createElement(Input, {
    maxLength: 64
  })))));
};
export default FrappeApiSelectForm;