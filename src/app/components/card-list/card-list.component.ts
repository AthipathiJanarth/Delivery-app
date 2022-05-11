import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import * as fooditems from '../../../assets/JSON/fooditems.json';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.less']
})
export class CardListComponent implements OnInit {
  selectedItems: any = null;
  form: FormGroup = new FormGroup({
    items: new FormControl(null)
  });
  constructor(private router: Router) { 
  }
  fooditems: any = (fooditems as any).default;
  cuisinefilter: string[] = [];
  totalCuisine: string[] = [];
  typeSelected: string = "";
  isChecked: boolean = false;
  tempArray: any[] = [];
  temp: any;
  isUser: boolean = false;
  userName: any;
  ngOnInit(): void {    
    this.userName = localStorage.getItem('username');
    this.isUser = this.userName ? true : false;
    if (!this.isUser) { this.router.navigate(['/Login']);}
    this.totalCuisine = Array.from(new Set(this.fooditems.map((x: any) => x.Cuisine)));
    console.log(localStorage.getItem('Cuisines'));
    if(localStorage.getItem('Cuisines')===null)
    localStorage.setItem('Cuisines', JSON.stringify(this.totalCuisine));
  }
  selectedValue(event: any): void{  
    if(this.cuisinefilter.length===0)
      this.fooditems = (fooditems as any).default;
    else {
      this.fooditems = (fooditems as any).default;
      this.fooditems = this.fooditems.filter((x: any) => this.cuisinefilter.some(f => f === x.Cuisine));
    }
    this.typeSelected = event;
    if ( this.typeSelected !== "Both")
      this.fooditems = this.fooditems.filter((x: any) => x.Type ===  this.typeSelected);
  }
  selectedCuisine(event: any): void{
    if(this.typeSelected ==="" || this.typeSelected === "Both")
      this.fooditems = (fooditems as any).default;
    else {
      this.fooditems = (fooditems as any).default;
      this.fooditems = this.fooditems.filter((x: any) => x.Type ===  this.typeSelected);
    }
    this.cuisinefilter = event;
    if(this.cuisinefilter.length>0)
    this.fooditems = this.fooditems.filter((x: any) => this.cuisinefilter.some(f=> f === x.Cuisine ));
  }
  addtoCart(event: any): void { 
    if (localStorage.getItem('cart-items')) { 
     this.temp=localStorage.getItem('cart-items');
      let cartItems = JSON.parse(this.temp);
      this.tempArray = cartItems;
    }
    let count: number = 0;
    if (this.tempArray.length > 0) {
      let i: number = 0;
      this.tempArray.forEach((item: any) => {
        if (item.Name === event.Name) {
          this.tempArray[i].Quantity = event.Quantity;
          this.tempArray[i].Total = event.Total;
          count = 1;
          return;
        }        
        i++;
      });
      if (count === 0) { this.tempArray.push(event);}
    }
    else { 
      this.tempArray.push(event);
    }
    localStorage.setItem('cart-items',JSON.stringify(this.tempArray));      
  }
   
}
