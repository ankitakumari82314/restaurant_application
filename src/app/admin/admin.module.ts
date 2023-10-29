import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    AdminComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule
  ],
})
export class AdminModule { }
