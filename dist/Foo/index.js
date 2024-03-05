import React from 'react';
import { Button } from 'antd';
var Foo = function Foo(props) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h4", null, props.title), /*#__PURE__*/React.createElement(Button, {
    type: 'primary'
  }, "test"));
};
export default Foo;