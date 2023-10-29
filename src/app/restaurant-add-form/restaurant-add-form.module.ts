import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RestaurantAddFormComponent } from './restaurant-add-form.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    RestaurantAddFormComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class RestaurantAddFormModule { }
