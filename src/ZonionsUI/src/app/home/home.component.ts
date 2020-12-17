import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ZonionsServService } from '../zonions-serv.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [ZonionsServService],
})
export class HomeComponent implements OnInit {
  restaurant: Observable<[any]>;
  restStatus: string;
  activeFlag: boolean;
  restaurantActive: any[];
  constructor(private zonionsService: ZonionsServService) {}

  ngOnInit(): void {
    this.getRestaurants();
  }

  getRestaurants() {
    return this.zonionsService.getRestaurantList().subscribe((data) => {
      console.log(data);
      console.log(data.length);
      this.restaurant = data;
      this.restaurantActive = data;
      console.log('in restaurantActive.....' + this.restaurantActive);
      for (let i = 0; i < this.restaurantActive.length; i++) {
        this.restStatus = data[i].status;
        console.log(this.restStatus);
        if (data[i].status === 'active') {
          this.activeFlag = true;
          this.restaurantActive = data[i];
          console.log(this.activeFlag);
        }
      }
    });
  }
}
