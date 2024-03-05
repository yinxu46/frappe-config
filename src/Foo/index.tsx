import React from 'react';
import { Button } from 'antd';

const Foo: React.FC<{ title: string }> = (props) => <div>
  <h4>{props.title}</h4>
  <Button type={'primary'}>test</Button>
</div>;

export default Foo;
