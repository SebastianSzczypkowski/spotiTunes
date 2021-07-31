import { TestBed } from '@angular/core/testing';

import { SearchForTunesService } from './search-for-tunes.service';

describe('SearchForTunesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SearchForTunesService = TestBed.get(SearchForTunesService);
    expect(service).toBeTruthy();
  });
});
