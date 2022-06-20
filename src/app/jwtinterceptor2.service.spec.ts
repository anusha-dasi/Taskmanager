import { TestBed } from '@angular/core/testing';

import { Jwtinterceptor2Service } from './jwtinterceptor2.service';

describe('Jwtinterceptor2Service', () => {
  let service: Jwtinterceptor2Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Jwtinterceptor2Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
