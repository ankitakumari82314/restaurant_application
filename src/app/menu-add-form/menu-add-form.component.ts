import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MenuService } from '../menu/menu.service';
import { IMenu } from '../models/menu';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-menu-add-form',
  templateUrl: './menu-add-form.component.html',
  styleUrls: ['./menu-add-form.component.css']
})
export class MenuAddFormComponent implements OnInit {

  menuAddForm: FormGroup = new FormGroup({});
  constructor(
    private formBuilder: FormBuilder,
    private menuService: MenuService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.menuAddForm = this.formBuilder.group({
      foodName: ['']
    })

    let id = this.activatedRoute.snapshot.paramMap.get('id');
    if(id){
      let item = this.menuService.getMenuItem(id);
      if(item)
      this.menuAddForm.patchValue(item)
    }
  }

  onSubmit(){
    if(this.menuAddForm.valid){
     let menu: IMenu = this.menuAddForm.value;
     let id = this.activatedRoute.snapshot.paramMap.get('id');
     
     if(id){
      this.menuService.updateMenuItem(id,menu)
     }
     else {
      this.menuService.addMenuItem(menu)
     }
this.router.navigate(['/list'])
    }
  }

}
