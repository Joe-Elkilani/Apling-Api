import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { ApiDataService } from '../api-data.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-recipes',
  imports: [],
  templateUrl: './recipes.component.html',
  styleUrl: './recipes.component.css'
})
export class RecipesComponent implements OnInit, OnDestroy {
  private readonly apiDataService = inject(ApiDataService);
  myObs!:Subscription;
  dataOfRecipes: any[] = [];
  ngOnInit():void {
    this.myObs = this.apiDataService.getTheRecipe("cucumber").subscribe({
      next: (res) => {
        console.log(res.recipes)
        this.dataOfRecipes = res.recipes;
      }
    })
  }
  ngOnDestroy(): void {
    this.myObs.unsubscribe()
  }
}
