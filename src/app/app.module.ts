import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './components/card/card.component';
import { CardListComponent } from './components/card-list/card-list.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FilterComponent } from './components/filter/filter.component';
import { HeaderComponent } from './components/header/header.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './route';
import { CartItemComponent } from './components/cart-item/cart-item.component';
import { CartComponent } from './components/cart/cart.component';
import { OrderHistoryComponent } from './components/order-history/order-history.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { OrderCardComponent } from './components/order-card/order-card.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    CardListComponent,
    FilterComponent,
    HeaderComponent,
    CartItemComponent,
    CartComponent,
    OrderHistoryComponent,
    LoginFormComponent,
    OrderCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
