import { Injectable } from '@angular/core';
import { GithubService } from 'src/services/github.service';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot, Resolve } from '@angular/router';
import { IUserItem } from '../app/interfaces/iresponse';
import {catchError, map, tap} from 'rxjs/internal/operators';
import { Observable, of } from 'rxjs';
import {  HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
@Injectable()
export class UserResolveService implements Resolve<IUserItem|null> {

  constructor(
    private _usersService: GithubService,
    private _router: Router
  ) {
  }

  public resolve(route: ActivatedRouteSnapshot, 
    state: RouterStateSnapshot): Observable<IUserItem|null> {
    debugger;
    return this._usersService.getUser(route.params["userId"]).pipe(
     
   // пример обработки ошибки от сервиса
      catchError(
        (err:HttpErrorResponse)=>{
        console.log(err.statusText); 
        this._router.navigate(['/list']);
        return of(null);})
           
      );
    //return this._usersService.getUser(route.params["userId"]).pipe(
    //  tap(x=>console.log(x))
      
    
      ;
  }
}
