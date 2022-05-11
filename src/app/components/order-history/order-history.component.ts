import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order-history',
  templateUrl: './order-history.component.html',
  styleUrls: ['./order-history.component.less']
})
export class OrderHistoryComponent implements OnInit {
  orderedItems: any;
  orders: any;
  userName: any;
  isUser: boolean = false;
  cuisinefilter: string[] = [];
  totalCuisine: string[] = [];
  typeSelected: string = "";
  cuisinetemp: any;
  selectedItems: any = null;
  isChecked: boolean = false;
  form: FormGroup = new FormGroup({
    items: new FormControl(null)
  });
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.userName = localStorage.getItem('username');
    this.isUser = this.userName ? true : false;
    if (!this.isUser) { this.router.navigate(['/Login']);}
    this.orders = localStorage.getItem('ordered-items');
    this.cuisinetemp = localStorage.getItem('Cuisines');
    this.totalCuisine = JSON.parse(this.cuisinetemp);
    this.orderedItems = JSON.parse(this.orders);
    if (this.userName !== "Admin") {
      this.orderedItems = this.orderedItems.filter((x: any) => x.User === this.userName);
      this.orders = this.orderedItems;
    }
    
  }
  selectedValue(event: any): void{  
    if(this.cuisinefilter.length===0)
      this.orderedItems = this.orders;
    else {
      this.orderedItems = this.orders;
      this.orderedItems = this.orderedItems.filter((x: any) => this.cuisinefilter.some(f => f === x.Cuisine));
    }
    this.typeSelected = event;
    if ( this.typeSelected !== "Both")
      this.orderedItems = this.orderedItems.filter((x: any) => x.Type ===  this.typeSelected);
  }
  selectedCuisine(event: any): void{
    if(this.typeSelected ==="" || this.typeSelected === "Both")
      this.orderedItems = this.orders;
    else {
      this.orderedItems = this.orders;
      this.orderedItems = this.orderedItems.filter((x: any) => x.Type ===  this.typeSelected);
    }
    this.cuisinefilter = event;
    if(this.cuisinefilter.length>0)
    this.orderedItems = this.orderedItems.filter((x: any) => this.cuisinefilter.some(f=> f === x.Cuisine ));
  }

}
