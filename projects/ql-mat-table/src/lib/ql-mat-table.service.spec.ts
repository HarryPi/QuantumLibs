import { TestBed } from '@angular/core/testing';

import { QlMatTableService } from './ql-mat-table.service';

describe('QlMatTableService', () => {
  let service: QlMatTableService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QlMatTableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
