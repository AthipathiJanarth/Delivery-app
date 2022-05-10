import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalService } from 'src/app/global.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {

  constructor(private router:Router,private globalSrv: GlobalService) { globalSrv.itemValue.subscribe((nextValue) => {
    this.userName = nextValue;
    
    if(this.userName !== "Admin")this.isUser = this.userName ? true : false;
    else this.isAdmin = this.userName==="Admin" ? true : false;
    
  })
  }
  isAdmin: boolean = false;
  isUser: boolean = false;
  userName: any;
  ngOnInit(): void {   
    this.userName = localStorage.getItem('username');
    if (this.userName !== "Admin") this.isUser = this.userName ? true : false;
    else this.isAdmin = this.userName==="Admin" ? true : false;
  }
  signOut() { 
    localStorage.removeItem('username');
    this.globalSrv.theItem = "no user";
    this.isUser = false;
    this.isAdmin = false;
    this.router.navigate(['/Login']);
  }
}
