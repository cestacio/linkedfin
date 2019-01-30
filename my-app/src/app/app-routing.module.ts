import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { HeroesComponent }      from './heroes/heroes.component';

const routes: Routes = [];

// const routes: Routes = [
//   { path: '/', component: HeroesComponent },
//   { path: 'register', component: HeroesComponent },
//   { path: 'match', component: HeroesComponent },
//   { path: 'profile', component: HeroesComponent },
// ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
