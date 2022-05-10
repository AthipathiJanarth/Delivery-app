import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-order-card',
  templateUrl: './order-card.component.html',
  styleUrls: ['./order-card.component.less']
})
export class OrderCardComponent implements OnInit {

  constructor() { }
  @Input() orderItem: any;
  ngOnInit(): void {
  }

}
