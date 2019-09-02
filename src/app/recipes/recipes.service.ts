import { Injectable } from '@angular/core';
import {Recipe} from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  private recipes: Recipe[] = [
    {
      id: 'r1',
      title: 'Schnitzel',
      imageUrl: 'https://bigoven-res.cloudinary.com/image/upload/t_recipe-256/authentic-wiener-schnitzel-recipe-2016858.jpg',
      ingredients: ['French Fries', 'Pork Meat', 'Salad']
    },
    {
      id: 'r2',
      title: 'Spagetti',
      imageUrl: 'https://cdn140.picsart.com/265322582010202.jpg?c256x256',
      ingredients: ['Pasta', 'Tomato sauce', 'Cheese']
    }
  ]
  constructor() { }

  getAllRecipes() {
    // Pulls all the elements out of the recipes array and adds it to a new array down here, returning a copy with the ... spread operator pointing to this.recipes.
    return [...this.recipes];
  }

  getRecipe(recipeId: string) {
    return {
      // Uses the default find javascript method on arrays, this method takes a function which will execute on every element on the array, and then if the function returns true we tell find' this is the object we are looking for and stop the execution (not run find on any other element of the array) and give us back that element.
      // The function takes a 'recipe' as input, then return true if this is the recipe I am looking for, false otherwise. === to compare and match.
      /// Use the ... spread operator to return a copy of the recipe object properties into a new object.
      ...this.recipes.find(recipe => {
        return recipe.id === recipeId;
      })
    };
  }
}
