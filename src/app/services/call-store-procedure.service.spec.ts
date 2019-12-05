import { TestBed } from '@angular/core/testing';

import { CallStoreProcedureService } from './call-store-procedure.service';

describe('CallStoreProcedureService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CallStoreProcedureService = TestBed.get(CallStoreProcedureService);
    expect(service).toBeTruthy();
  });
});
