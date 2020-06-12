import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Observable, Subscription } from 'rxjs';
import { NoTableConfigError } from './errors/no-table-config.error';
import { QlTableConfig } from './models/ql-table.config';

@Component({
  selector: 'ql-ql-mat-table',
  templateUrl: 'ql-mat-table.component.html',
  styles: []
})
export class QlMatTableComponent implements OnInit, OnDestroy {

  @Input()
  /**
   * An observable data source where the table will render according to the table config
   */
  dataSource: Observable<MatTableDataSource<any>>;

  @Input()
  /**
   * The {@link QlTableConfig} for rendering
   */
  tableConfig: QlTableConfig;

  private subscription: Subscription;
  displayColumns: string[];

  constructor() {
    this.subscription = new Subscription();
  }

  ngOnInit(): void {
    if (!this.tableConfig) {
      throw new NoTableConfigError();
    }
    this.displayColumns = this.tableConfig.columnConfig.map(c => c.columnDef);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
