import { TestBed } from '@angular/core/testing';

import { CdcDataService } from './cdc-data.service';

describe('CdcDataService', () => {
  let service: CdcDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CdcDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
