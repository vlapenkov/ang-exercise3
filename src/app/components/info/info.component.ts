import { Component, OnInit } from '@angular/core';
import { GithubService } from 'src/services/github.service';
import { IUserItem } from 'src/app/interfaces/iresponse';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {

  checked=false;
users: IUserItem[]=[];
  constructor(private service: GithubService) { }

  ngOnInit() {
     this.service.getResults().subscribe(response=> 
      {
        
if (response.total_count>0)        this.users =response.items});
  }

}
