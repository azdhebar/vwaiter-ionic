import { Component } from '@angular/core';
import { CategoryService } from '../services/category.service';
import { FoodService } from '../services/food.service';
import { RestaurentService } from '../services/restaurent.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  categories:any[];
  isCategoryLoaded:boolean=false;

  foods:any[];
  isFoodsLoaded:boolean=false;
  
  restaurents:any[];
  isRestaurentsLoaded:boolean=false;
  
  constructor(private categoryService:CategoryService,private foodService:FoodService,private restaurentService:RestaurentService) {
    this.getAllCategory();
    this.getAllFoods();
    this.getAllRestaurents();
  }
  getAllCategory(){
   setTimeout(()=>{
    this.categoryService.getAllCategory().subscribe(
      data=>{
        console.log(data)
        this.categories=data;
    this.isCategoryLoaded=true
      }
    )
   },5000)
  }

  getAllFoods(){
    setTimeout(()=>{
     this.foodService.getAllFood().subscribe(
       data=>{
         console.log(data)
         this.foods=data;
         
     this.isFoodsLoaded=true
       }
     )
    },1000)
   }
   
   getAllRestaurents(){
    setTimeout(()=>{
     this.restaurentService.getAllRestaurents().subscribe(
       data=>{
         console.log(data)
         this.restaurents=data;
         
     this.isRestaurentsLoaded=true
       }
     )
    },2000)
   }
   
}
