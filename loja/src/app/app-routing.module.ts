import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ModaFemininaComponent } from './pages/moda-feminina/moda-feminina.component';

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



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
