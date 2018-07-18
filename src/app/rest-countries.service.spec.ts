import { TestBed, inject } from '@angular/core/testing';

import { RestCountriesService } from './rest-countries.service';

describe('RestCountriesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RestCountriesService]
    });
  });

  it('should be created', inject([RestCountriesService], (service: RestCountriesService) => {
    expect(service).toBeTruthy();
  }));
});
