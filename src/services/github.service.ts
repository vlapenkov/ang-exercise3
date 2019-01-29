import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { IResponse } from '../app/interfaces/iresponse';
import { empty, of } from 'rxjs';

import {delay, debounceTime, find} from 'rxjs/internal/operators';
import { first, tap, filter, map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class GithubService {

  searchText: string; 
  baseUrl ="https://api.github.com/search";
   
  
    subject = new Subject<IResponse>();

   constructor(private http: HttpClient) { 
  
       }


public setSearch(newSearchText:string):void{
  if (newSearchText.length<=3) return;
  this.searchText= newSearchText;
  const url=`${this.baseUrl}/users?q=${newSearchText}`;
  this.http.get<IResponse>(url).pipe(debounceTime(1000)).subscribe(
    res=> this.subject.next(res));
  
}

public getResults():Observable<IResponse>
{
 return  this.subject.asObservable();
}


}
