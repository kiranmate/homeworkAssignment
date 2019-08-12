
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { NextpageComponent } from './nextpage/nextpage.component';
import { TopMenuComponent } from './top-menu/top-menu.component';
import { InvalidComponent } from './invalid/invalid.component';


const routes: Routes = [
  {path:'' ,component: AppComponent},

  {path: 'next',component:NextpageComponent},

  { path: '**', component: InvalidComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {



 }
