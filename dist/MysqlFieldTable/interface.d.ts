declare const MysqlFieldTypes: readonly [
    'bigint',
    'char',
    'date',
    'datetime',
    'decimal',
    'int',
    'json',
    'longtext',
    'text',
    'timestamp',
    'tinyint',
    'varchar'
];
export type MysqlFieldType = typeof MysqlFieldTypes[number];
export interface MysqlFieldItem {
    _key?: number;
    name: String;
    type: MysqlFieldType;
    size?: number;
    digit?: number;
    nullable: boolean;
    key: boolean;
    comment: string;
}
export interface MysqlFieldTableRef {
    data: MysqlFieldItem[];
    add: () => void;
    remove: (index: number) => void;
}
export interface MysqlFieldTableProps {
    defaultValue?: MysqlFieldItem[];
    onChange?: (value: MysqlFieldItem[]) => void;
}
export {};
