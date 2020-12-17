import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {HomeComponent} from './home/home.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { RestaurantDetailComponent } from './restaurant-detail/restaurant-detail.component';
import { LogoutComponent } from './logout/logout.component';
import { UpdateRestaurantComponent } from './update-restaurant/update-restaurant.component';
import {AdminComponent} from './admin/admin.component';
import { RestaurantListComponent } from './restaurant-list/restaurant-list.component';
const routes: Routes = [
  {path:"home",component:HomeComponent },
  {path:"login",component:LoginComponent},
  {path:"restaurant" , component:RestaurantComponent},
  {path:"restaurantDetail/:restaurantName", component:RestaurantDetailComponent},
  {path:"logout",component:LogoutComponent},
  {path:"update/:id",component:UpdateRestaurantComponent},
  {path:"admin",component:AdminComponent},
  {path:"restaurantList",component:RestaurantListComponent},
  {path:"",redirectTo:"home",pathMatch:'full'},
  {path:"**",component:PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
