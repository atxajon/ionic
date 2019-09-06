import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Recipe } from '../recipe.model';
import { RecipesService } from '../recipes.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.page.html',
  styleUrls: ['./recipe-detail.page.scss'],
})
export class RecipeDetailPage implements OnInit {
  loadedRecipe: Recipe;
  // Inject from imported angular's ActivatedRoute on line 2.
  constructor(
    private activatedRoute: ActivatedRoute, 
    private recipesService: RecipesService,
  private router: Router) { }

  ngOnInit() {
    // paramMap is a map of all the parameters this route receives. Its' an observable. In subscribe we pass in a function that executes when we receive the data, the function will get a paramMap obj that we can retrieve the parameters from.
    this.activatedRoute.paramMap.subscribe(paramMap => {
      if (!paramMap.has('recipeId')) {
        // Redirect.
        return;
      }
      const recipeId = paramMap.get('recipeId');
      this.loadedRecipe = this.recipesService.getRecipe(recipeId);
    });
  }

  onDeleteRecipe() {
    this.recipesService.deleteRecipe(this.loadedRecipe.id);
    // After deleting navigate away to /recipes.
    this.router.navigate(['/recipes']);
  }

}
