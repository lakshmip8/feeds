import { Component, OnInit } from '@angular/core';
import { FeedServiceService } from '../feeds/feedservice.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-feeds',
  templateUrl: './feeds.component.html',
  styleUrls: ['./feeds.component.less']
})
export class FeedsComponent implements OnInit {

  constructor(private feedService: FeedServiceService) { }

  feeds: Object = { photo: [] };
  feedSearch: String;
  ngOnInit() {
    this.getAllFeeds();
  }
  getAllFeeds() {
    this.feedService.getAllFeeds().subscribe(
      data => this.feeds = data
    );
  }
  getFeeds(text: String) {
    this.feedService.getFeeds(text).subscribe(
      data => this.feeds = data
    );
  }
}
