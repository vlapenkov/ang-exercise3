import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { IUserItem, IResponse } from 'src/app/interfaces/iresponse';
import { GithubService } from 'src/services/github.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit,OnDestroy {

  subscription: Subscription;
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
  private userItems: IUserItem[];
  ngOnInit(): void {
   
  this.subscription=  this.service.getResults().subscribe(
      (result:IResponse)=> 
      {
       
       this.userItems = result.items;
       console.log(this.userItems);
     
      }
    )
  }
  title = 'app';

  constructor (private service :GithubService)
  {}

}
