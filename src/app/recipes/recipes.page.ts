import { Component, OnInit } from '@angular/core';

import {Recipe} from './recipe.model';

import {RecipesService} from './recipes.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.page.html',
  styleUrls: ['./recipes.page.scss'],
})
export class RecipesPage implements OnInit {
  // Local property recipes, initially undefined, gets set on ngOnInit() below.
  recipes: Recipe[];

  // Inject the recipes service.
  constructor(private recipesService: RecipesService) { }

  // ngOnInit() is always a great place for initialization work. Thanks to dependency injection on the constructor we can now use this.recipesService in any of the class methods.
  ngOnInit() {
    // 
    this.recipes = this.recipesService.getAllRecipes();
  }

}
