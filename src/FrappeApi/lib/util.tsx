import React from 'react';
import { FormListProps } from 'antd/lib/form';
import { Form, FormItemProps } from 'antd';

export interface FormItemGroupProps {
  prefix: string | number | (string | number)[];
  children: React.ReactNode;
}

export const toArr = (str: string | number | (string | number)[]): (string | number)[] => {
  return Array.isArray(str) ? str : [str];
};

export const FormItemContext = React.createContext<(string | number)[]>([]);

export const FormList = ({ name, children, ...props }: FormListProps) => {
  const prefixPath = React.useContext(FormItemContext);
  const concatName = [...prefixPath, ...toArr(name)];
  return <Form.List name={concatName} children={children} {...props} />;
};

export const FormItem = ({ name, ...props }: FormItemProps) => {
  const prefixPath = React.useContext(FormItemContext);
  const concatName = name !== undefined ? [...prefixPath, ...toArr(name)] : undefined;
  return <Form.Item name={concatName} {...props} />;
};

export const FormItemGroup = ({ prefix, children }: FormItemGroupProps) => {
  const prefixPath = React.useContext(FormItemContext);
  const concatPath = React.useMemo(() => [...prefixPath, ...toArr(prefix)], [prefixPath, prefix]);
  return <FormItemContext.Provider value={concatPath}>{children}</FormItemContext.Provider>;
};
