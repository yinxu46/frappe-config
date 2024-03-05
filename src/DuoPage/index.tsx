import React from 'react';
import { Button, FormInstance, Space } from 'antd';
import { FrappeApiForm, MysqlFieldItem, MysqlFieldTable, MysqlFieldTableRef } from 'frappe-config';
import { FrappeApiItem } from 'frappe-config/FrappeApi/interface';

const DuoPage: React.FC<{ title: string }> = (props) => {
  const [value, setValue] = React.useState<MysqlFieldItem[]>([{
    name: 'id',
    type: 'int',
    size: 10,
    key: true,
    comment: 'ID',
    nullable: false,
  }]);
  const ref = React.useRef<MysqlFieldTableRef | undefined>();

  const formRef = React.useRef<any>();

  const cacheValue = localStorage.getItem("form");
  const [formValue, setFormValue] = React.useState<FrappeApiItem>(cacheValue ? JSON.parse(cacheValue) : undefined);
  const onSubmit = (value: FrappeApiItem) => {
    setFormValue(value);
    localStorage.setItem("form", JSON.stringify(value));
  }
  return <div>
    <FrappeApiForm ref={formRef} defaultValue={formValue} onFinish={onSubmit}  />
    {/*<Button style={{ marginTop: 48 }} onClick={_ => {*/}
    {/*  const values = formRef.current?.getFieldsValue();*/}
    {/*  console.log(values);*/}
    {/*}}>打印数据</Button>*/}


    {/*<MysqlFieldTable ref={ref} defaultValue={value} onChange={value => {*/}
    {/*  setValue(value);*/}
    {/*  console.log(value);*/}
    {/*}} />*/}
    {/*<div style={{ marginTop: 16 }}>*/}
    {/*  <Space>*/}
    {/*    <Button onClick={_ => {*/}
    {/*      console.log(ref.current?.data);*/}
    {/*    }}>获取数据</Button>*/}
    {/*    <Button onClick={_ => {*/}
    {/*      ref.current?.add();*/}
    {/*    }}>新增数据</Button>*/}
    {/*  </Space>*/}
    {/*</div>*/}
    {/*<div>*/}
    {/*  {JSON.stringify(value)}*/}
    {/*</div>*/}

  </div>;
};

export default DuoPage;
