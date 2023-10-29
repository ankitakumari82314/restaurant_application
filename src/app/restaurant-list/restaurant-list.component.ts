import { Component, OnInit } from '@angular/core';
import { IRestaurant } from '../models/restaurant';
import { RestaurantService } from '../restaurant/restaurant.service';

@Component({
  selector: 'app-restaurant-list',
  templateUrl: './restaurant-list.component.html',
  styleUrls: ['./restaurant-list.component.css']
})
export class RestaurantListComponent implements OnInit {

  restaurant: IRestaurant[]=[];

  constructor(private restaurantService: RestaurantService) { }

  ngOnInit(): void {
    this.restaurant = this.restaurantService.getRestaurant();
  }

  deleteRestaurant(id: string){
    this.restaurantService.deleteRestaurant(id);
  }
  updateRestaurant(updatedRestaurant: IRestaurant){
      this.restaurantService.updateRestaurant(updatedRestaurant.id, updatedRestaurant);
    }

}
