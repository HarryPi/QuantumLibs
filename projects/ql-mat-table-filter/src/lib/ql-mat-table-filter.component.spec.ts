import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QlMatTableFilterComponent } from './ql-mat-table-filter.component';

describe('QlMatTableFilterComponent', () => {
  let component: QlMatTableFilterComponent;
  let fixture: ComponentFixture<QlMatTableFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QlMatTableFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QlMatTableFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
