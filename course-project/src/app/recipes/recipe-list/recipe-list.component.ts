import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css',
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe(
      'Test recipe',
      'This is simply a test',
      'https://cdn.pixabay.com/photo/2017/10/13/19/00/potato-casserole-2848605_1280.jpg'
    ),
    new Recipe(
      'Test recipe 2',
      'This is simply a test 2',
      'https://media.istockphoto.com/id/519518676/uk/%D1%84%D0%BE%D1%82%D0%BE/%D1%81%D0%BC%D0%B0%D0%B6%D0%B5%D0%BD%D1%96-%D1%8F%D0%B9%D1%86%D1%8F-%D1%96-%D0%BF%D1%96%D0%B4%D1%81%D0%BC%D0%B0%D0%B6%D0%B5%D0%BD%D0%B8%D0%B9-%D1%85%D0%BB%D1%96%D0%B1.jpg?s=612x612&w=is&k=20&c=QutZr7daRjWAmsJTttJmJYkRc4cHI1X36BOgYTNCIKo='
    ),
  ];

  constructor() {}
  ngOnInit(): void {}

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }
}
