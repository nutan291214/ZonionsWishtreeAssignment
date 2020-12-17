import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import {LoginComponent} from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RestaurantComponent} from './restaurant/restaurant.component';
import { RestaurantDetailComponent } from './restaurant-detail/restaurant-detail.component';
import { LogoutComponent } from './logout/logout.component';
import { UpdateRestaurantComponent } from './update-restaurant/update-restaurant.component';
import { AdminComponent } from './admin/admin.component';
import { RestaurantListComponent } from './restaurant-list/restaurant-list.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    PageNotFoundComponent,
    RestaurantComponent,
    RestaurantDetailComponent,
    LogoutComponent,
    UpdateRestaurantComponent,
    AdminComponent,
    RestaurantListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    HttpClientModule,
    SlickCarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
