import React, { useEffect } from 'react';
import { Button, Checkbox, Input, InputNumber, Select, Table } from 'antd';
import { CloseCircleOutlined, MenuOutlined, PlusOutlined } from '@ant-design/icons';
import type { DragEndEvent } from '@dnd-kit/core';
import { DndContext } from '@dnd-kit/core';
import { restrictToVerticalAxis } from '@dnd-kit/modifiers';
import {
  arrayMove,
  SortableContext,
  useSortable,
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { MysqlFieldItem, MysqlFieldTableProps, MysqlFieldTableRef } from 'frappe-config/src';
export const MysqlFieldTypeOptions = [
  { label: 'bigint', value: 'bigint' },
  { label: 'char', value: 'char' },
  { label: 'date', value: 'date' },
  { label: 'datetime', value: 'datetime' },
  { label: 'decimal', value: 'decimal' },
  { label: 'int', value: 'int' },
  { label: 'json', value: 'json' },
  { label: 'longtext', value: 'longtext' },
  { label: 'text', value: 'text' },
  { label: 'timestamp', value: 'timestamp' },
  { label: 'tinyint', value: 'tinyint' },
  { label: 'varchar', value: 'varchar' },
];
interface RowProps extends React.HTMLAttributes<HTMLTableRowElement> {
  'data-row-key': string;
}
const Row = ({ children, ...props }: RowProps) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    setActivatorNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({
    id: props['data-row-key'],
  });

  const style: React.CSSProperties = {
    ...props.style,
    transform: CSS.Transform.toString(transform && { ...transform, scaleY: 1 }),
    transition,
    ...(isDragging ? { position: 'relative', zIndex: 9999 } : {}),
  };

  return (
    <tr {...props} ref={setNodeRef} style={style} {...attributes}>
      {React.Children.map(children, (child) => {
        if ((child as React.ReactElement).key === 'sort') {
          return React.cloneElement(child as React.ReactElement, {
            children: (
              <MenuOutlined
                ref={setActivatorNodeRef}
                style={{ touchAction: 'none', cursor: 'move' }}
                {...listeners}
              />
            ),
          });
        }
        return child;
      })}
    </tr>
  );
};

const InternalMysqlFieldTable = (props: MysqlFieldTableProps, ref: React.Ref<MysqlFieldTableRef | undefined>) => {
  const { defaultValue, onChange } = props;
  const [editKey, setEditKey] = React.useState<number | undefined>();
  const [data, setData] = React.useState<MysqlFieldItem[]>((defaultValue ?? []).map((e, k) => ({ _key: k+1, ...e })));

  const add = () => {
    const _key = Date.now();
    setEditKey(_key);
    setData([...data, { _key: _key, name: '', type: 'int', nullable: false, key: false, comment: '' }]);
  };

  const remove = (index: number) => {
    const _data = [...data];
    _data.splice(index, 1);
    setData(_data);
  };

  const handleColumnChange = (value: MysqlFieldItem, index: number) => {
    const _data = [...data];
    _data[index] = value;
    setData(_data);
  };

  const onDragEnd = ({ active, over }: DragEndEvent) => {
    if (active.id !== over?.id) {
      setData((previous) => {
        const activeIndex = previous.findIndex((i) => i._key === active.id);
        const overIndex = previous.findIndex((i) => i._key === over?.id);
        return arrayMove(previous, activeIndex, overIndex);
      });
    }
  };

  useEffect(() => {
    onChange?.(data);
  }, [data]);

  React.useImperativeHandle(ref, () => ({ data, add, remove: remove }));

  return <div>
    <DndContext modifiers={[restrictToVerticalAxis]} onDragEnd={onDragEnd}>
      <SortableContext
        items={data.map((i) => i._key ?? 0)}
        strategy={verticalListSortingStrategy}
      >
        <Table<MysqlFieldItem>
          onRow={(record, index) => {
            return {
              onClick: () => {
                setEditKey(record._key);
              },
            };
          }}
          size={'small'}
          pagination={false}
          components={{
            body: {
              row: Row,
            },
          }}
          rowKey='_key'
          dataSource={data}
          scroll={{x: 680, y: 400}}
          columns={[
            { key: 'sort', width: 30 },
            {
              dataIndex: 'name', title: '名称', width: 100, render: ((value, record, index) =>
                record._key == editKey ?
                  <Input size={'small'}
                         defaultValue={value}
                         onInput={e => handleColumnChange({ ...record, name: e.currentTarget.value.trim() }, index)}
                  /> : value),
            },
            {
              dataIndex: 'type', title: '类型', width: 100, render: ((value, record, index) =>
                record._key == editKey ?
                  <Select size={'small'}
                          defaultValue={value} options={MysqlFieldTypeOptions}
                          onChange={e => handleColumnChange({ ...record, type: e }, index)}
                          style={{ width: '100%' }}
                  /> : value),
            },
            {
              dataIndex: 'size', title: '长度', width: 100, render: ((value, record, index) =>
                record._key == editKey ?
                  <InputNumber size={'small'} type={'number'}
                               defaultValue={value} min={0}
                               onInput={e => handleColumnChange({ ...record, size: parseInt(e) }, index)}
                  /> : value > 0 ? value : ''),
            },
            {
              dataIndex: 'digit', title: '小数', width: 100, render: ((value, record, index) =>
                record._key == editKey ?
                  <InputNumber size={'small'} type={'number'}
                               defaultValue={value} min={0}
                               onInput={(e) => handleColumnChange({ ...record, digit: parseInt(e) }, index)}
                  /> : value > 0 ? value : ''),
            },
            {
              dataIndex: 'nullable', title: 'Nullable', width: 60, render: ((value, record, index) =>
                <Checkbox checked={value}
                          onClick={(e: any) => handleColumnChange({ ...record, nullable: e.target?.checked }, index)} />),
            },
            {
              dataIndex: 'key', title: '键', width: 30, render: ((value, record, index) =>
                <Checkbox checked={value}
                          onClick={(e: any) => handleColumnChange({ ...record, key: e.target?.checked }, index)} />),
            },
            {
              dataIndex: 'comment', title: '注释', width: 120, render: ((value, record, index) =>
                record._key == editKey ?
                  <Input size={'small'}
                         defaultValue={value}
                         onInput={e => handleColumnChange({ ...record, comment: e.currentTarget.value.trim() }, index)}
                  /> : value),
            },
            {
              width: 30,
              render: (value, record, index) => {
                return <CloseCircleOutlined onClick={_ => remove(index)} />;
              },
            },
          ]} />
      </SortableContext>
    </DndContext>
    <Button style={{ marginTop: 8 }} block type={'dashed'} icon={<PlusOutlined />} onClick={_ => add()}>新增字段</Button>
  </div>;
};

export const MysqlFieldTable = React.forwardRef(InternalMysqlFieldTable);
