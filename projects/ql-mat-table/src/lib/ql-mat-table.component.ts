import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { NoTableConfigError } from './errors/no-table-config.error';
import { QlTableConfig } from './models/ql-table.config';

@Component({
  selector: 'ql-ql-mat-table',
  templateUrl: 'ql-mat-table.component.html',
  styles: []
})
export class QlMatTableComponent implements OnInit, OnDestroy {

  @Input()
  dataSource: MatTableDataSource<any> = new MatTableDataSource<any>([]);

  @Input()
  tableConfig: QlTableConfig;

  displayColumns: string[];

  constructor() {
  }

  ngOnInit(): void {
    if (!this.tableConfig) {
      throw new NoTableConfigError();
    }
    this.displayColumns = this.tableConfig.columnConfig.map(c => c.columnDef);
  }

  ngOnDestroy(): void {
  }

}
