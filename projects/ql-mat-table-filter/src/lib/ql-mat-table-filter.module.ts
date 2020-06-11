import { NgModule } from '@angular/core';
import { FlexModule } from '@angular/flex-layout';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { QlMatTableFilterComponent } from './ql-mat-table-filter.component';


@NgModule({
  declarations: [
      QlMatTableFilterComponent
  ],
  imports: [
    FlexModule,
    MatFormFieldModule,
    MatInputModule
  ],
  exports: [
      QlMatTableFilterComponent
  ]
})
export class QlMatTableFilterModule {
}
