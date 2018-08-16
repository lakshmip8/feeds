import { TestBed, inject } from '@angular/core/testing';

import { FeedServiceService } from '../feed-service.service';

describe('FeedServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FeedServiceService]
    });
  });

  it('should be created', inject([FeedServiceService], (service: FeedServiceService) => {
    expect(service).toBeTruthy();
  }));

  it('#getAllFeeds should return value from observable', inject([FeedServiceService], (service: FeedServiceService) => {
    expect(service.getAllFeeds()).toBe('Observable value');
  }));

  it('#getFeeds should return value from observable', inject([FeedServiceService], (service: FeedServiceService) => {
    expect(service.getFeeds('panda')).toBe('Observable value');
  }));

});
