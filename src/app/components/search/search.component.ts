import { Component, OnInit } from '@angular/core';
import { GithubService } from 'src/services/github.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent  {

  constructor(private service :GithubService) { }

  

  public  doSearch(searchVal:string):void
  {
    this.service.setSearch(searchVal);
  }
}
