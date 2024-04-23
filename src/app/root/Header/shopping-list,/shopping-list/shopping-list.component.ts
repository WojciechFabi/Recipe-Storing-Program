import { Component, OnDestroy, OnInit } from '@angular/core';
import { Ingredient } from '../../../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrl: './shopping-list.component.css',
  animations: [
    trigger('shopping-list', [
      state(
        'in',
        style({
          opacity: 1,
          transform: 'translateX(0)',
        })
      ),
      transition('void => *', [
        style({
          opacity: 0,
          transform: 'translateX(-100px)',
        }),
        animate(300),
      ]),
      transition('* => void', [
        animate(
          300,
          style({
            opacity: 0,
            transform: 'translateX(100px)',
          })
        ),
      ]),
    ]),
  ],
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: Ingredient[];
  private ingredientsChangeSubscription: Subscription;

  onEditItem(index: number) {
    this.shoppingListService.startedEditing.next(index);
  }

  constructor(private shoppingListService: ShoppingListService) {}

  ngOnInit() {
    this.ingredients = this.shoppingListService.getIngredients();
    this.ingredientsChangeSubscription =
      this.shoppingListService.ingredientsChanged.subscribe(
        (ingredients: Ingredient[]) => {
          this.ingredients = ingredients;
        }
      );
  }

  ngOnDestroy(): void {
    this.ingredientsChangeSubscription.unsubscribe();
  }
}
