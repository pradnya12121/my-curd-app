import { TestBed } from '@angular/core/testing';

import { FierbaseService } from './fierbase.service';

describe('FierbaseService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FierbaseService = TestBed.get(FierbaseService);
    expect(service).toBeTruthy();
  });
});
