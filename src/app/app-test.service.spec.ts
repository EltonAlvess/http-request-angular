import { TestBed } from '@angular/core/testing';

import { AppTestService } from './app-test.service';

describe('AppTestService', () => {
  let service: AppTestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppTestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
