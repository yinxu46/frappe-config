import React from 'react';
import { FormListProps } from 'antd/lib/form';
import { FormItemProps } from 'antd';
export interface FormItemGroupProps {
    prefix: string | number | (string | number)[];
    children: React.ReactNode;
}
export declare const toArr: (str: string | number | (string | number)[]) => (string | number)[];
export declare const FormItemContext: React.Context<(string | number)[]>;
export declare const FormList: ({ name, children, ...props }: FormListProps) => React.JSX.Element;
export declare const FormItem: ({ name, ...props }: FormItemProps) => React.JSX.Element;
export declare const FormItemGroup: ({ prefix, children }: FormItemGroupProps) => React.JSX.Element;
