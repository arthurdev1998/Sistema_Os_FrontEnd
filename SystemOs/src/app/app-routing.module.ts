import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { TecnicoReadComponent } from './tecnico-read/tecnico-read.component';
import { TecnicoCreateComponent } from './tecnico-create/tecnico-create.component';
import { TecnicoUpdateComponent } from './tecnico-update/tecnico-update.component';

const routes: Routes = [
   {
    path:'',
    component:  HomeComponent
   },

   {
    path:'tecnicos',
    component:  TecnicoReadComponent
   },

   {
    path:'tecnicos/create',
    component:  TecnicoCreateComponent
   },

   {
    path:'tecnicos/update/:id',
    component: TecnicoUpdateComponent
   }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
