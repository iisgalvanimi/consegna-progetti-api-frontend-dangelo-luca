import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnimalsComponent } from './animals/animals.component';
import { FruitsComponent } from './fruits/fruits.component';
import { GenericoComponent } from './generico/generico.component';

const routes: Routes = [
  {path: 'animals',component: AnimalsComponent},
  {path: 'fruits', component: FruitsComponent},
  { path: 'generico/:id', component: GenericoComponent },
  {path: '', redirectTo: '/animals', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
