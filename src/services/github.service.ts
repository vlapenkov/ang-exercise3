import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject, ReplaySubject, BehaviorSubject } from 'rxjs';
import { IResponse , IUserItem} from '../app/interfaces/iresponse';
import { empty, of } from 'rxjs';

import {delay, debounceTime, find} from 'rxjs/internal/operators';
import { first, tap, filter, map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class GithubService {

  searchText: string; 
  baseUrlSearch ="https://api.github.com/search";
baseUrlUser ="https://api.github.com/users";
   

 initResponse:IResponse = {total_count:0,incomplete_results:false,items:[]}
  
    //subject = new Subject<IResponse>();
    subject = new BehaviorSubject<IResponse>(this.initResponse);

   constructor(private http: HttpClient) {  }


public setSearch(newSearchText:string):void{
  if (newSearchText.length<=3) return;
  this.searchText= newSearchText;
  const url=`${this.baseUrlSearch}/users?q=${newSearchText}`;
  this.http.get<IResponse>(url).pipe(debounceTime(500)).subscribe(
    res=> this.subject.next(res));
  
}

public getUser(username:string):Observable<IUserItem>
{
  const url=`${this.baseUrlUser}/${username}`;
 return this.http.get<IUserItem>(url);
}

public getResults():Observable<IResponse>
{
 return  this.subject.asObservable();
}


}
