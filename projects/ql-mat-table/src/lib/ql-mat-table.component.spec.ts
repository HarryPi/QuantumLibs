import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QlMatTableComponent } from './ql-mat-table.component';

describe('QlMatTableComponent', () => {
  let component: QlMatTableComponent;
  let fixture: ComponentFixture<QlMatTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QlMatTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QlMatTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
