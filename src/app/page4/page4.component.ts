import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { ApiDataService } from '../api-data.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-page4',
  imports: [],
  templateUrl: './page4.component.html',
  styleUrl: './page4.component.css'
})
export class Page4Component implements OnInit, OnDestroy {
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
