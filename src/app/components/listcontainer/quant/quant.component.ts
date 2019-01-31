import { Component, OnInit } from '@angular/core';
import { IResponse } from '../../../interfaces/iresponse';
import { GithubService } from 'src/services/github.service';

@Component({
  selector: 'app-quant',
  templateUrl: './quant.component.html',
  styleUrls: ['./quant.component.css']
})
export class QuantComponent implements OnInit {

  constructor (private service :GithubService)
  {}
  
  count:number=0;
  ngOnInit(): void {
   
    this.service.getResults().subscribe(
        (result:IResponse)=> 
        {
         if (result && result.total_count)
         this.count=result.items.length;
         
       
        }
      )
    }
    title = 'app';
  
   

}
