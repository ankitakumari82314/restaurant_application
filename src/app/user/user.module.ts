import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { RestaurantListModule } from '../restaurant-list/restaurant-list.module';
import { RestaurantListComponent } from '../restaurant-list/restaurant-list.component';



@NgModule({
  declarations: [
    UserComponent
  ],
  imports: [
    CommonModule,
    RestaurantListModule
  ]
})
export class UserModule { }
