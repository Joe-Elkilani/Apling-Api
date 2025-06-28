import { Routes } from '@angular/router';
import { RecipesComponent } from './recipes/recipes.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { Page2Component } from './page2/page2.component';
import { Page3Component } from './page3/page3.component';
import { Page4Component } from './page4/page4.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  {path:"page1",component:RecipesComponent,title:"page1"},
  {path:"page2",component:Page2Component,title:"page2"},
  {path:"page3",component:Page3Component,title:"page3"},
  {path:"page4",component:Page4Component,title:"page4"},
  {path:"home",component:HomeComponent,title:"Home"},
  {path:"about",component:HomeComponent,title:"About"},
  {path:"",redirectTo:"home",pathMatch:"full"},
  {path:"**",component:NotFoundComponent,title:"404 Error"}
];
