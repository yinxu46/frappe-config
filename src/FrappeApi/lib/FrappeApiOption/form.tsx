import React from 'react';
import { Form, Row, Col, Input, Space, Button, Select, Card } from 'antd';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import { FrappeApiSelectForm } from 'frappe-config/FrappeApi/lib/FrappeApiSelect';
import { FormItem, FormItemGroup, FormList, toArr } from '../util';

const FrappeApiOptionForm = (props: { form: any, prefix: string | number | (string | number)[] }) => {
  const {form, prefix} = props;
  const type = Form.useWatch(["config", "type"], form);
  return <FormItemGroup prefix={prefix}>
    <Row gutter={24}>
      <Col span={12}>
        <FormItem label={'数据源类型'} name={'type'} required rules={[{ required: true, message: '请选择数据源' }]}>
          <Select options={[{label:"静态", value: "static"}, {label: '动态', value: 'dynamic'}]} style={{ width: '100%' }} />
        </FormItem>
      </Col>
      {type == "static" ?
        <Col span={24}>
          <Form.Item>
            <Card size={'small'} title={"数据源配置"}>
              <FormList name="options">
                {(fields, { add, remove }) => (
                  <>
                    {fields.map(({ key, name, ...restField }) => (
                      <Space key={key} style={{ display: 'flex', marginBottom: 8 }} align="baseline">
                        <Form.Item
                          {...restField}
                          name={[name, 'label']}
                          rules={[{ required: true, message: '请输入显示标签' }]}
                        >
                          <Input placeholder="显示标签" />
                        </Form.Item>
                        <Form.Item
                          {...restField}
                          name={[name, 'value']}
                          rules={[{ required: true, message: '请输入数据值' }]}
                        >
                          <Input placeholder="数据值" />
                        </Form.Item>
                        <MinusCircleOutlined onClick={() => remove(name)} />
                      </Space>
                    ))}
                    <Form.Item>
                      <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>添加数据</Button>
                    </Form.Item>
                  </>
                )}
              </FormList>
            </Card>
          </Form.Item>
        </Col>
        : ""}
      {type == "dynamic" ?
        <Col span={24}>
          <FormItemGroup prefix={['config']}>
            <FrappeApiSelectForm form={form} prefix={[...toArr(prefix), "config"]} />
          </FormItemGroup>
        </Col>
        : ""}
    </Row>
  </FormItemGroup>
}


export default FrappeApiOptionForm;
