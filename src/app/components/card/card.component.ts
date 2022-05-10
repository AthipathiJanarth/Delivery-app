import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.less']
})
export class CardComponent implements OnInit {

  constructor(private router: Router) {

  }
  @Input() fooditem: any;
  available: boolean = false;
  availabilty: any;
  time: Date = new Date();
  breakfastTiming: number = 12;
  lunchTiming: number = 15;
  snackTiming: number = 19;
  dinnerTiming: number = 23;
  isClicked: boolean = false;
  quantity: number=0;
  selectedItem: any = { "Name": "", "Image":"","Type": "", "Cuisine": "", "Amount": "", "Quantity": "","Total":"" };
  @Output() selectedFooditem : any = new EventEmitter();

  ngOnInit(): void {
    this.availabilty = this.fooditem.Availability;
    if (this.time.getHours() < this.breakfastTiming && this.availabilty.breakfast !== "") { this.available = true; }
    else if (this.time.getHours() >= this.breakfastTiming && this.time.getHours() < this.lunchTiming && this.availabilty.lunch !== "") { this.available = true; }
    else if (this.time.getHours() >= this.lunchTiming && this.time.getHours() < this.snackTiming && this.availabilty.snack !== "") {  this.available = true; }
    else if (this.time.getHours() >= this.snackTiming && this.time.getHours() < this.dinnerTiming && this.availabilty.dinner !== "") {  this.available = true; }
  }
  displayQuantity(): void {
    this.isClicked = true;
  }
  onAddtoCart() { 
    let price = this.fooditem.Price.split(".");
    this.selectedItem["Name"] = this.fooditem.Name;
    this.selectedItem["Image"] = this.fooditem.Image;
    this.selectedItem["Type"] = this.fooditem.Type;
    this.selectedItem["Amount"] = price[1];
    this.selectedItem["Cuisine"] = this.fooditem.Cuisine;
    this.selectedItem["Quantity"] = this.quantity;
    this.selectedItem["Total"] = this.quantity * price[1];
    this.selectedFooditem.emit(this.selectedItem);
    this.router.navigate(['/Cart']);
  }


}
