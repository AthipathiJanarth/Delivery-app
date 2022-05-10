import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.less']
})
export class CartComponent implements OnInit {
  
  temp: any;
  subtotal: number = 0;
  tax: number = 0;
  total: number = 0;
  servicecharge: number = 15;
  prevOrders: any;
  userName: any;
  isUser: boolean = false;

  cartItems: any = { "Name": "", "Image": "", "Type": "", "Cuisine": "", "Amount": "", "Quantity": "", "Total": "","User":"" , "OrderDate":"","OrderTime":""};

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.userName = localStorage.getItem('username');
    if (this.userName !== "Admin")
      this.isUser = this.userName ? true : false;
    if (!this.isUser) { this.router.navigate(['/Login']);}
    this.calculation();
  }
  onCheckout() {     
    this.cartItems.forEach((element: any) => {      
      element.User = this.userName;
      element.OrderDate = new Date();
      element.OrderTime = new Date().getTime();   
    });
    localStorage.removeItem('cart-items');
    if (localStorage.getItem('ordered-items') != null) {
      this.prevOrders = localStorage.getItem('ordered-items');
      this.prevOrders = JSON.parse(this.prevOrders);
      this.prevOrders=this.prevOrders.concat(this.cartItems);
      localStorage.setItem('ordered-items', JSON.stringify(this.prevOrders));
    }
    else {
      localStorage.setItem('ordered-items', JSON.stringify(this.cartItems));
    }
    this.router.navigate(['/Order-history'])
  }
  removeItem(event: any) {
    let index=this.cartItems.findIndex((x:any)=>x.Name===event)
    this.cartItems.splice(index, 1);
    localStorage.setItem('cart-items', JSON.stringify(this.cartItems));
    this.calculation();
  }
  calculation(): void { 
    this.subtotal = 0;
    this.temp = localStorage.getItem('cart-items');
    this.cartItems = JSON.parse(this.temp);
    if (this.cartItems !== null && this.cartItems.length >0) {
      this.cartItems.forEach((element: any) => {
        this.subtotal = this.subtotal + element.Total;
      });
      this.tax = this.subtotal * 0.18;
      this.total = this.subtotal + this.tax + this.servicecharge;
    }
  }
}
