import { Routes } from "@angular/router";
import { LoginFormComponent } from "./components/login-form/login-form.component";
import { CardListComponent } from "../app/components/card-list/card-list.component";
import { CartComponent } from "./components/cart/cart.component";
import { OrderHistoryComponent } from "./components/order-history/order-history.component";

export const appRoutes: Routes = [
    { path: 'Login', component: LoginFormComponent },
    { path: 'FoodList', component: CardListComponent },
    { path: 'Cart', component: CartComponent },
    { path: 'Order-history', component: OrderHistoryComponent },
    {path:'**', redirectTo: '/FoodList'}
]