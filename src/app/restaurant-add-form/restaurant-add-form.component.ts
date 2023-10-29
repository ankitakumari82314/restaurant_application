import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { RestaurantService } from '../restaurant/restaurant.service';
import { ActivatedRoute, Router } from '@angular/router';
import { IRestaurant } from '../models/restaurant';

@Component({
  selector: 'app-restaurant-add-form',
  templateUrl: './restaurant-add-form.component.html',
  styleUrls: ['./restaurant-add-form.component.css']
})
export class RestaurantAddFormComponent implements OnInit {
  restaurantAddForm: FormGroup = new FormGroup({});
  constructor(
    private formBuilder: FormBuilder,
    private restaurantService: RestaurantService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.restaurantAddForm = this.formBuilder.group({
      restaurantName: ['']
    })

    let id = this.activatedRoute.snapshot.paramMap.get('id');
    if(id){
      let item = this.restaurantService.getEachRestaurant(id);
      if(item)
      this.restaurantAddForm.patchValue(item)
    }
  }

  onSubmit(){
    if(this.restaurantAddForm.valid){
     let restaurant: IRestaurant = this.restaurantAddForm.value;
     let id = this.activatedRoute.snapshot.paramMap.get('id');
     
     if(id){
      this.restaurantService.updateRestaurant(id, restaurant)
     }
     else {
      this.restaurantService.addRestaurant(restaurant)
     }
this.router.navigate(['/res-list'])
    }
  }

}
