import { TestBed, inject } from '@angular/core/testing';

import { DogeService } from './doge.service';

describe('DogeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DogeService]
    });
  });

  it('should be created', inject([DogeService], (service: DogeService) => {
    expect(service).toBeTruthy();
  }));
});
