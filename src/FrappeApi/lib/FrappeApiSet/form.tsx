import React from 'react';
import { Form, Row, Col, Input, Checkbox, Space, Button, Select, Card } from 'antd';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import { FormItem, FormItemGroup, FormList } from '../util';

const FrappeApiSelectForm = (props: { form: any, prefix: string | number | (string | number)[] }) => {
  const {prefix} = props;
  return <FormItemGroup prefix={prefix}>
    <Row gutter={24}>
      <Col span={24}>
        <FormItem name={"tableName"} label={"数据表名称"} required rules={[{required: true, message: "请输入数据表名称"}]}>
          <Input maxLength={32} />
        </FormItem>
      </Col>
      <Col span={12}>
        <Form.Item name={"isPaginate"} valuePropName="checked">
          <Checkbox>分页查询</Checkbox>
        </Form.Item>
      </Col>
      <Col span={12}>
        <Form.Item name={"isTree"} valuePropName="checked">
          <Checkbox>返回树结构数据</Checkbox>
        </Form.Item>
      </Col>
      <Col span={24}>
        <Form.Item>
          <Card size={'small'} title={"查询条件配置"}>
            <FormList name="conditions">
              {(fields, { add, remove }) => (
                <>
                  {fields.map(({ key, name, ...restField }) => (
                    <Space key={key} style={{ display: 'flex', marginBottom: 8 }} align="baseline">
                      <Form.Item
                        {...restField}
                        name={[name, 'name']}
                        rules={[{ required: true, message: '请输入字段名' }]}
                      >
                        <Input placeholder="字段名" />
                      </Form.Item>
                      <Form.Item
                        {...restField}
                        name={[name, 'raw']}
                      >
                        <Input placeholder="raw" />
                      </Form.Item>
                      <Form.Item
                        {...restField}
                        name={[name, 'type']}
                        rules={[{ required: true, message: '请选择查询方式' }]}
                      >
                        <Select placeholder="查询方式" options={["=", ">", "<", ">=", "<=", "in", "like", "left_like", "right_like","between","date_range","datetime_range"].map(value => ({label: value, value}))} style={{ width: "100%", minWidth: 120 }}  />
                      </Form.Item>
                      <MinusCircleOutlined onClick={() => remove(name)} />
                    </Space>
                  ))}
                  <Form.Item>
                    <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>添加条件配置</Button>
                  </Form.Item>
                </>
              )}
            </FormList>
          </Card>
        </Form.Item>
      </Col>
      <Col span={24}>
        <Form.Item>
          <Card size={'small'} title={"查询字段配置"}>
            <FormList name="tableFields">
              {(fields, { add, remove }) => (
                <>
                  {fields.map(({ key, name, ...restField }) => (
                    <Space key={key} style={{ display: 'flex', marginBottom: 8 }} align="baseline">
                      <Form.Item {...restField} name={[name, 'name']} rules={[{ required: true, message: '请输入字段名' }]}>
                        <Input placeholder="字段名" />
                      </Form.Item>
                      <Form.Item{...restField} name={[name, 'type']} rules={[{ required: true, message: '请选择字段类型' }]}>
                        <Select placeholder="字段类型" options={["int", "text", "mobile", "date", "datetime", "select"].map(value => ({label: value, value}))} style={{ width: "100%", minWidth: 120 }}  />
                      </Form.Item>
                      <Form.Item {...restField} name={[name, 'label']}>
                        <Input placeholder="字段注释" />
                      </Form.Item>
                      <Form.Item {...restField} name={[name, 'raw']}>
                        <Input placeholder="Raw" />
                      </Form.Item>
                      <Form.Item {...restField} name={[name, 'alias']}>
                        <Input placeholder="字段别名" />
                      </Form.Item>
                      <Form.Item {...restField} name={[name, 'options']}>
                        <Input placeholder="Options" />
                      </Form.Item>
                      <Form.Item {...restField} name={[name, 'format']}>
                        <Input placeholder="Format" />
                      </Form.Item>
                      <Form.Item {...restField} name={[name, 'privacy']} valuePropName={"checked"}>
                        <Checkbox style={{ width: 60 }}>隐私</Checkbox>
                      </Form.Item>
                      <MinusCircleOutlined onClick={() => remove(name)} />
                    </Space>
                  ))}
                  <Form.Item>
                    <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>添加条件配置</Button>
                  </Form.Item>
                </>
              )}
            </FormList>
          </Card>
        </Form.Item>
      </Col>
      <Col span={24}>
        <Form.Item>
          <Card size={'small'} title={"关联JOIN配置"}>
            <FormList name="tableJoins">
              {(fields, { add, remove }) => (
                <>
                  {fields.map(({ key, name, ...restField }) => (
                    <Space key={key} style={{ display: 'flex', marginBottom: 8 }} align="baseline">
                      <Form.Item
                        {...restField}
                        name={[name, 'name']}
                        rules={[{ required: true, message: '请输入字段名' }]}
                      >
                        <Input placeholder="字段名" />
                      </Form.Item>
                      <Form.Item
                        {...restField}
                        name={[name, 'condition']}
                        rules={[{ required: true, message: '请输入条件' }]}
                      >
                        <Input placeholder="关联条件" />
                      </Form.Item>
                      <Form.Item
                        {...restField}
                        name={[name, 'type']}
                        rules={[{ required: true, message: '请选择关联方式' }]}
                      >
                        <Select placeholder="关联方式" options={["left", "right", "inner"].map(value => ({label: value, value}))} style={{ width: "100%", minWidth: 120 }}  />
                      </Form.Item>
                      <MinusCircleOutlined onClick={() => remove(name)} />
                    </Space>
                  ))}
                  <Form.Item>
                    <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>添加关联配置</Button>
                  </Form.Item>
                </>
              )}
            </FormList>
          </Card>
        </Form.Item>
      </Col>
      <Col span={24}>
        <Form.Item>
          <Card size={'small'} title={"默认排序配置"}>
            <FormList name="defaultOrder">
              {(fields, { add, remove }) => (
                <>
                  {fields.map(({ key, name, ...restField }) => (
                    <Space key={key} style={{ display: 'flex', marginBottom: 8 }} align="baseline">
                      <Form.Item
                        {...restField}
                        name={[name, 'name']}
                        rules={[{ required: true, message: '请输入字段名' }]}
                      >
                        <Input placeholder="字段名" />
                      </Form.Item>
                      <Form.Item
                        {...restField}
                        name={[name, 'sort']}
                        rules={[{ required: true, message: '请选择排序方式' }]}
                      >
                        <Select placeholder="排序方式" options={["asc", "desc"].map(value => ({label: value, value}))} style={{ width: "100%", minWidth: 120 }}  />
                      </Form.Item>
                      <MinusCircleOutlined onClick={() => remove(name)} />
                    </Space>
                  ))}
                  <Form.Item>
                    <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>添加排序配置</Button>
                  </Form.Item>
                </>
              )}
            </FormList>
          </Card>
        </Form.Item>
      </Col>
      <Col span={24}>
        <FormItem name={"tableGroup"} label={"分组查询配置"}>
          <Input maxLength={64} />
        </FormItem>
      </Col>
    </Row>
  </FormItemGroup>
}

export default FrappeApiSelectForm;
