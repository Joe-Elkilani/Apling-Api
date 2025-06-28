import { Component, OnDestroy, OnInit,inject } from '@angular/core';
import { ApiDataService } from '../api-data.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-page3',
  imports: [],
  templateUrl: './page3.component.html',
  styleUrl: './page3.component.css'
})
export class Page3Component implements OnInit, OnDestroy {
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
