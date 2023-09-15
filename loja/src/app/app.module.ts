import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './core/nav/nav.component';
import { HomeComponent } from './pages/home/home.component';
import { ModaFemininaComponent } from './pages/moda-feminina/moda-feminina.component';
import { ModaMasculinaComponent } from './pages/moda-masculina/moda-masculina.component';
import { ModaInfantilComponent } from './pages/moda-infantil/moda-infantil.component';
import { FooterComponent } from './core/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    ModaFemininaComponent,
    ModaMasculinaComponent,
    ModaInfantilComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
