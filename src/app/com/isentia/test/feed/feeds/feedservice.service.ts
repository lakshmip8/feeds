import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FeedServiceService {

  constructor(private http: HttpClient) {
  }

  getAllFeeds() {
    const params = this.getRequestParams('skate');
    return this.http.get('https://www.flickr.com/services/rest', { params: params });
  }
  getFeeds(name: String) {
    const params = this.getRequestParams(name);
    return this.http.get('https://www.flickr.com/services/rest', { params: params });
  }
  getRequestParams(name: String) {
    let params = new HttpParams();
    params = params.append('method', 'flickr.photos.search');
    params = params.append('api_key', 'c77cdfac818fffdb520314a9f3bb10f5');
    params = params.append('format', 'json');
    params = params.append('text', name.toString());
    params = params.append('nojsoncallback', '1');

    return params;
  }
}
