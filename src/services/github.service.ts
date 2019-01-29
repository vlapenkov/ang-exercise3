import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IResponse } from '../app/interfaces/iresponse';
import { empty, of } from 'rxjs';

import {delay, debounceTime, find} from 'rxjs/internal/operators';
import { first, tap, filter, map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class GithubService {

  baseUrl ="https://api.github.com/search";
  
  public  getUsersResponse2(text:string)
  {
    return text;
  }

  public  getUsersResponse(searchText:string)//:Observable<IResponse>
  {
    if (searchText.length<=3) return empty();
    const url=`${this.baseUrl}/users?q=${searchText}`;

    console.log(url);
       
   return this.http.get(url).pipe(debounceTime(1000));
  }
  constructor(private http: HttpClient) {     }
}
