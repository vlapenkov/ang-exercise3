import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GithubService } from 'src/services/github.service';
import { IUserItem } from 'src/app/interfaces/iresponse';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  id:string;
  login:string;
  user:IUserItem;
  constructor( private _activatedRoute: ActivatedRoute, private _githubService:GithubService ) { }

  ngOnInit() {
    const url =this._activatedRoute.snapshot.params['userId'];
    debugger;
    this.user= this._activatedRoute.snapshot.data['user'];
   /* debugger;
    this._githubService.getUser(this.id).subscribe((result:IUserItem) =>
    
    this.user= result); */

  }

}
