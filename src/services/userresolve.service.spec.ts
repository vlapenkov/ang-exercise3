import { TestBed, inject } from '@angular/core/testing';

import { UserresolveService } from './userresolve.service';

describe('UserresolveService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserresolveService]
    });
  });

  it('should be created', inject([UserresolveService], (service: UserresolveService) => {
    expect(service).toBeTruthy();
  }));
});
