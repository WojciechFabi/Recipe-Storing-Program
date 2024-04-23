import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrl: './recipe.component.css',
   animations: [
    trigger('recipe-list', [
      state(
        'in',
        style({
          opacity: 1,
        })
      ),
      transition('void => *', [
        style({
          opacity: 0,
        }),
        animate(500),
      ]),
      transition('* => void', [
        animate(
          500,
          style({
            opacity: 0,
          })
        ),
      ]),
    ]),
  ],
})
export class RecipeComponent implements OnInit {
  constructor() {}

  ngOnInit() {
  }
}
