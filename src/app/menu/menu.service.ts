import {Injectable} from "@angular/core";
import { IMenu } from "../models/menu";

@Injectable({
    providedIn: 'root'
})
export class MenuService {
    private menu: IMenu[]= [];

    constructor(){
        let savedMenu = localStorage.getItem("menu");
        this.menu = savedMenu? JSON.parse(savedMenu):[];
    }

    //crud

    getMenu():IMenu[] {
        return this.menu;
    }

    getMenuItem(id: string): IMenu | undefined {
        return this.menu.find(men => men.id === id);
    }

    addMenuItem(item : IMenu): void
    {
        item.id = Date.now().toString();
        this.menu.push(item)
        localStorage.setItem("menu",JSON.stringify(this.menu))
    }

    deleteMenuItem(id: string):void 
    {
        let index = this.menu.findIndex(men => men.id === id);
        this.menu.splice(index,1)
        localStorage.setItem("menu",JSON.stringify(this.menu))
    }

    updateMenuItem(id: string, updatedMenuItem: IMenu): void{
        let index = this.menu.findIndex(men => men.id === updatedMenuItem.id);
        this.menu[index] = updatedMenuItem;
        localStorage.setItem("menu", JSON.stringify(this.menu))
    }
}