import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ModaFemininaComponent } from './pages/moda-feminina/moda-feminina.component';
import { ModaMasculinaComponent } from './pages/moda-masculina/moda-masculina.component';
import { ModaInfantilComponent } from './pages/moda-infantil/moda-infantil.component';

const routes: Routes = [

  {
    path:'', redirectTo: 'home', pathMatch: 'full'
  },

  {
    path:'home', component: HomeComponent
  },

  {
    path:'modaFeminina', component: ModaFemininaComponent
  },

  {
    path:'modaMasculina', component: ModaMasculinaComponent
  },

  {
    path:'modaInfantil', component: ModaInfantilComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
