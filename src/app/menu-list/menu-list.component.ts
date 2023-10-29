import { Component, OnInit } from '@angular/core';
import { MenuService } from '../menu/menu.service';
import { IMenu } from '../models/menu';

@Component({
  selector: 'app-menu-list',
  templateUrl: './menu-list.component.html',
  styleUrls: ['./menu-list.component.css']
})
export class MenuListComponent implements OnInit {
  menu: IMenu[]=[];

  constructor(private menuService: MenuService) { }

  ngOnInit(): void {
    this.menu = this.menuService.getMenu();
  }

  deleteMenuItem(id: string){
    this.menuService.deleteMenuItem(id);
  }
  updateMenuItem(updatedMenuItem: IMenu){
      this.menuService.updateMenuItem(updatedMenuItem.id, updatedMenuItem);
    }
}


