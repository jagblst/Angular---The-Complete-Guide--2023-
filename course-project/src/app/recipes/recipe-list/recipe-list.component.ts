import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css',
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'Test recipe',
      'This is simply a test',
      'https://cdn.pixabay.com/photo/2017/10/13/19/00/potato-casserole-2848605_1280.jpg'
    ),
  ];

  constructor() {}
  ngOnInit(): void {}
}
