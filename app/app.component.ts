import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <h1>Recipe List</h1>
    <ol>
      <li *ngFor="let recipe of recipes"><span [class]="priorityColor(recipe)" (click)="isCooked(recipe)">{{recipe.title}}</span> <button class="btn btn-primary" (click)="editTask(recipe)">Edit!</button><br>{{recipe.directions}}
        <ul>
          <li *ngFor = "let currentIngreident of recipe.ingredients">{{currentIngreident}}</li>
        </ul>
      </li>
    </ol>
    <hr>
    <div *ngIf="selectedRecipe">
      <h3>{{selectedRecipe.title}}</h3>
      <p>Recipe Complete? {{selectedRecipe.cooked}}</p>
      <h3>Edit Recipe</h3>
      <label>Enter Recipe Title:</label>
      <input type="text" [(ngModel)]="selectedRecipe.title">
      <label>Enter Recipe Priority (1-3):</label>
      <br>
      <input type="radio" [(ngModel)]="selectedRecipe.priority" [value]="1">1 (Low Priority)<br>
      <input type="radio" [(ngModel)]="selectedRecipe.priority" [value]="2">2 (Medium Priority)<br>
      <input type="radio" [(ngModel)]="selectedRecipe.priority" [value]="3">3 (High Priority)
      <hr>
      <button (click)="finishedEditing()">Done</button>
    </div>
  </div>

  `
})

export class AppComponent {
  recipes: Recipe[] = [
    new Recipe('Choclate Chip Cookies', ['eggs', 'butter', 'chocolate chips', 'flour', 'sugar'], 'Mix ingredients together and bake at 350 for 30 min.', 2),
    new Recipe('Chili', ['beans', 'peppers', 'onions', 'garlic', 'spices'], 'Make in pot.', 3),
    new Recipe('Pizza', ['cheese', 'dough', 'olives', 'sauce', 'jalapenos'], 'Cook in Oven.', 1)
  ];

  selectedRecipe: Recipe = null;

  editTask(clickedRecipe) {
    this.selectedRecipe = clickedRecipe;
  }

  isCooked(clickedRecipe: Recipe) {
    if(clickedRecipe.cooked === true) {
      alert("This recipe is cooked!");
    } else {
      alert("This recipe is not cooked. Better get to cooking!");
    }
  }

  priorityColor(recipe){
    if (recipe.priority === 3){
      return "bg-danger";
    } else if (recipe.priority === 2) {
      return  "bg-warning";
    } else {
      return "bg-info";
    }
  }

  finishedEditing() {
    this.selectedRecipe = null;
  }
}
export class Recipe {
  public cooked: boolean = false;
  constructor(public title: string, public ingredients: string[], public directions: string, public priority: number) { }
}
