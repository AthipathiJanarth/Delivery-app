import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.less']
})
export class CardComponent implements OnInit {

  constructor() {
   
   }
  @Input() fooditem: any;
  available: boolean = false;
  ngOnInit(): void {
  }
 
  

}
