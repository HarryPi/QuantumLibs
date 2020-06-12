import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexModule } from '@angular/flex-layout';
import { MatTableModule } from '@angular/material/table';
import { QlMatTableComponent } from './ql-mat-table.component';


@NgModule({
  declarations: [
    QlMatTableComponent
  ],
  imports: [
    FlexModule,
    MatTableModule,
    CommonModule
  ],
  exports: [
    QlMatTableComponent
  ]
})
export class QlMatTableModule {
}
