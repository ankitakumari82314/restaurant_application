import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RestaurantListComponent } from './restaurant-list.component';


@NgModule({
  declarations: [
    RestaurantListComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    RestaurantListComponent
  ]
})
export class RestaurantListModule { }
