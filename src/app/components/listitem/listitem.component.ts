import { Component, OnInit, Input } from '@angular/core';
import { IUserItem } from '../../interfaces/iresponse';

@Component({
  selector: 'app-listitem',
  templateUrl: './listitem.component.html',
  styleUrls: ['./listitem.component.css']
})
export class ListitemComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input()
  index:number;
  
  @Input()
  odd:boolean;
  
  @Input()
  user:IUserItem; 
}
