export interface FrappeApiItem {
    id: string;
    type: string;
    title: string;
    path?: string;
    comment?: string;
    status: string;
    config?: any;
}
export interface FrappeApiFormProps {
    defaultValue?: FrappeApiItem;
    onChange?: (value: FrappeApiItem) => void;
    onFinish?: (values: FrappeApiItem) => void;
}
