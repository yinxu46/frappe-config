export interface FrappeSelectCondition {
  name: string;
  option: 'date_range' | 'datetime_range' | 'like' | 'left_like' | 'right_like' | 'in' | '=' | '>=' | '<=' | '>' | '<';
  raw?: string;
}

export interface FrappeSelectTableField {
  name: string;
  raw?: string;
  label?: string;
  type: string;
  privacy?: boolean;
  format?: string;
  options?: string;
}

export interface FrappeSelectTableJoin {
  name: string;
  condition: string;
  type: 'left' | 'right' | 'inner';
}

export interface FrappeSelectTableQueryOrder {
  name: string;
  sort: 'asc' | 'desc';
}

export interface FrappeSelectInterface {
  tableName: string;
  defaultParams?: { [key: string]: any };
  fixedParams?: { [key: string]: any };
  conditions?: Array<FrappeSelectCondition>;
  tableFields?: Array<FrappeSelectTableField>;
  tableJoins?: Array<FrappeSelectTableJoin>;
  defaultOrder?: Array<FrappeSelectTableQueryOrder>;
  tableGroup?: string;
  isPaginate: boolean;
  isTree: boolean;
}
