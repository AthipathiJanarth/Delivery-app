import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-cartitem',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.less']
})
export class CartItemComponent implements OnInit {
  @Output() dishname :any = new EventEmitter()
  constructor() { }
  @Input() foodItem: any;
  ngOnInit(): void {
  }
  removeItem(dish: string) { 
    this.dishname.emit(dish);
  }
}
