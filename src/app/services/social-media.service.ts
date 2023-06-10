import {Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {SocialMedia} from '../models/social-media-model/social-media-model';

@Injectable({
  providedIn: 'root'
})
export class SocialMediaService {

  /*Get JSON data by link. This is not used. Only for testing */
  apiUrl = 'https://cd93f683-446b-487e-bfb5-67a45fadf397.mock.pstmn.io/';

  constructor(private http: HttpClient) { }

  getData(): Observable<SocialMedia> {
    return this.http.get<SocialMedia>(this.apiUrl);
  }
}