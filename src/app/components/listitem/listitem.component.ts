import { Component, OnInit, Input } from '@angular/core';

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
}
