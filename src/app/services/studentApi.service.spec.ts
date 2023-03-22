/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { StudentApiService } from './studentApi.service';

describe('Service: StudentApi', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StudentApiService]
    });
  });

  it('should ...', inject([StudentApiService], (service: StudentApiService) => {
    expect(service).toBeTruthy();
  }));
});
