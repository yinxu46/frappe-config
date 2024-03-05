import React from 'react';
import { FrappeApiFormProps, FrappeApiItem } from "./interface";
import { FormInstance } from 'antd';
declare const FrappeApiForm: React.ForwardRefExoticComponent<FrappeApiFormProps & React.RefAttributes<FormInstance<FrappeApiItem>>>;
export default FrappeApiForm;
