import {Injectable} from "@angular/core";
import { IRestaurant } from "../models/restaurant";

@Injectable({
    providedIn: 'root'
})
export class RestaurantService {
    private restaurant: IRestaurant[]= [];

    constructor(){
        let savedRestaurant = localStorage.getItem("restaurant");
        this.restaurant = savedRestaurant? JSON.parse(savedRestaurant):[];
    }

    //crud

    getRestaurant():IRestaurant[] {
        return this.restaurant;
    }

    getEachRestaurant(id: string): IRestaurant | undefined {
        return this.restaurant.find(res => res.id === id);
    }

    addRestaurant(item : IRestaurant): void
    {
        item.id = Date.now().toString();
        this.restaurant.push(item)
        localStorage.setItem("restaurant",JSON.stringify(this.restaurant))
    }

    deleteRestaurant(id: string):void 
    {
        let index = this.restaurant.findIndex(res => res.id === id);
        this.restaurant.splice(index,1)
        localStorage.setItem("restaurant",JSON.stringify(this.restaurant))
    }

    updateRestaurant(id: string, updatedRestaurant: IRestaurant): void{
        let index = this.restaurant.findIndex(res => res.id === updatedRestaurant.id);
        this.restaurant[index] = updatedRestaurant;
        localStorage.setItem("restaurant", JSON.stringify(this.restaurant))
    }
}