import { Component, OnInit } from '@angular/core';
import{HeaderComponent} from '../header/header.component'
import { Router } from '@angular/router';
import * as userdata from '../../../assets/JSON/userdetails.json';
import { GlobalService } from 'src/app/global.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.less']
})
export class LoginFormComponent implements OnInit {

  constructor(private router: Router,private globalSrv: GlobalService) { }
  isAuthenticated: boolean = false;
  isUser: boolean = false;
  isAdmin: boolean = false;
  userName: string = "";
  pwd: string = "";
  users: any = (userdata as any).default;
  ngOnInit(): void {   
    if (localStorage.getItem('username')) { 
      this.isAuthenticated = true;
      this.router.navigate(['/FoodList']);
    }    
  }
  validateUser(): void { 
    let index = this.users.findIndex((x: any) => x.UserName === this.userName);
    if (this.users[index].UserName === this.userName && this.users[index].Password === this.pwd) {
      this.isAuthenticated = true;
      if (this.users[index].Role === "admin") {
        this.isAdmin = true;
        this.globalSrv.theItem = this.users[index].Name;
        localStorage.setItem('username', this.users[index].Name);
        this.router.navigate(['/FoodList']);
      }
      else if (this.users[index].Role === "user") {
        this.isUser = true;
        this.globalSrv.theItem = this.users[index].Name;
        localStorage.setItem('username',this.users[index].Name);
        this.router.navigate(['/FoodList']);
      }
    }
  }
}
