import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <h1>Recipe List</h1>
    <ol>
      <li *ngFor="let recipe of recipes">{{recipe.title}}<br>{{recipe.directions}}
        <ul>
          <li *ngFor = "let currentIngreident of recipe.ingredients">{{currentIngreident}}</li>
        </ul>
      </li>
    </ol>
  </div>
  `
})

export class AppComponent {
  recipes: Recipe[] = [
    new Recipe('Choclate Chip Cookies', ['eggs', 'butter', 'chocolate chips', 'flour', 'sugar'], 'Mix ingredients together and bake at 350 for 30 min.'),
    new Recipe('Chili', ['beans', 'peppers', 'onions', 'garlic', 'spices'], 'Make in pot.'),
    new Recipe('Pizza', ['cheese', 'dough', 'olives', 'sauce', 'jalapenos'], 'Cook in Oven.')
  ];
}
export class Recipe {
  constructor(public title: string, public ingredients: string[], public directions: string) { }

}
