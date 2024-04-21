import { Component, Input, OnInit } from '@angular/core';
import { recipe } from '../../recipe.model';
import { RecipeService } from '../../recipe.service';
@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrl: './recipe-item.component.css',
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: recipe;

  @Input() id: number;

  constructor() {}

  ngOnInit() {}
}
