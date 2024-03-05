import React from 'react';
import { FrappeApiFormProps, FrappeApiItem } from 'frappe-config/FrappeApi/interface';
import { Button, Card, Checkbox, Col, Form, FormInstance, Input, Row, Select, Steps } from 'antd';
import { FrappeApiSelectForm } from 'frappe-config/FrappeApi/lib/FrappeApiSelect';
import { FrappeApiOptionForm } from 'frappe-config/FrappeApi/lib/FrappeApiOption';

const FrappeApiTypeOptions = ['SELECT', 'GET', 'OPTION', 'SET', 'CREATE', 'UPDATE', 'DELETE', 'IMPORT', 'EXPORT', 'CUSTOM'].map(value => ({
  label: value,
  value,
}));

const InternalFrappeApiForm = (props: FrappeApiFormProps, ref: React.LegacyRef<FormInstance<FrappeApiItem>> | undefined) => {
  const { defaultValue, onFinish } = props;
  const [form] = Form.useForm<FrappeApiItem>();
  const type = Form.useWatch('type', form);
  return <Form ref={ref} size={'middle'} scrollToFirstError={{ block: "center" }}
               variant={'filled'} form={form} initialValues={defaultValue} onFinish={onFinish}
               layout={'vertical'}>

    <Row gutter={24}>
      <Col span={12}>
        <Form.Item label={'API名称'} name={'title'} required rules={[{ required: true, message: '请输入API名称' }]}>
          <Input maxLength={32} />
        </Form.Item>
      </Col>
      <Col span={12}>
        <Form.Item label={'API类型'} name={'type'} required rules={[{ required: true, message: '请选择API类型' }]}>
          <Select options={FrappeApiTypeOptions} style={{ width: '100%' }} />
        </Form.Item>
      </Col>
      <Col span={12}>
        <Form.Item name={'status'} valuePropName='checked'>
          <Checkbox>启用API</Checkbox>
        </Form.Item>
      </Col>
      <Col span={12}>
        <Form.Item name={'permissions'} valuePropName='checked'>
          <Checkbox>需要验证权限</Checkbox>
        </Form.Item>
      </Col>
      <Col span={24}>
        <Form.Item label={'注释'} name={'comment'}>
          <Input.TextArea maxLength={255} />
        </Form.Item>
      </Col>
      <Col span={24}>
        <Form.Item label={'API配置'}>
          <Card>
            {type == 'SELECT' ? <FrappeApiSelectForm form={form} prefix={["config"]} /> : ''}
            {type == 'OPTION' ? <FrappeApiOptionForm form={form} prefix={["config"]} /> : ''}
            {type == 'GET' ? <div>GET</div> : ''}
            {type == 'SET' ? <div>SET</div> : ''}
            {type == 'CREATE' ? <div>CREATE</div> : ''}
            {type == 'UPDATE' ? <div>UPDATE</div> : ''}
            {type == 'DELETE' ? <div>DELETE</div> : ''}
            {type == 'IMPORT' ? <div>IMPORT</div> : ''}
            {type == 'EXPORT' ? <div>EXPORT</div> : ''}
            {type == 'CUSTOM' ? <div>CUSTOM</div> : ''}
          </Card>
        </Form.Item>
      </Col>
      <Col span={24}>
        <Form.Item>
          <Button block type={'primary'} htmlType={'submit'} >提交</Button>
        </Form.Item>
      </Col>
    </Row>
  </Form>;
};

const FrappeApiForm = React.forwardRef(InternalFrappeApiForm);

export default FrappeApiForm;
