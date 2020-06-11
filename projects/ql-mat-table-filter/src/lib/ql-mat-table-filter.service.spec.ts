import { TestBed } from '@angular/core/testing';

import { QlMatTableFilterService } from './ql-mat-table-filter.service';

describe('QlMatTableFilterService', () => {
  let service: QlMatTableFilterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QlMatTableFilterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
