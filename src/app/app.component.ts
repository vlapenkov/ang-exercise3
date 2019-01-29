import { Component,  OnInit } from '@angular/core';
import { GithubService } from '../services/github.service';
import { title } from 'process';
import { constructor } from 'q';
import { IResponse, IUserItem } from './interfaces/iresponse';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  private userItems: IUserItem[];
  ngOnInit(): void {
   

  }
  title = 'app';

  constructor (private service :GithubService)
  {}

  /*
 public  doSearch(event:KeyboardEvent)
  {
    console.log((event.target as HTMLInputElement).value);
  }
*/

public  doSearch(searchVal:string):void
  {
   //console.log( this.service.getUsersResponse2(searchVal));
    
    this.service.getUsersResponse(searchVal).subscribe(
      (result:IResponse)=> 
      {
       
       this.userItems = result.items;
       console.log(this.userItems);
      /*  console.log('res');
        if (result!=null)
      console.log(result.items)); */
      }
    );
  }
}
