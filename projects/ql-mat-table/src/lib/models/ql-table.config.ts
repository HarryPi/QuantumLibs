import { QlColumnConfig } from './ql-column.config';

export class QlTableConfig {
  constructor(
      public columnConfig: QlColumnConfig[]
  ) {
  }
}
