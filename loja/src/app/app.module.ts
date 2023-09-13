import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './core/componente/nav/nav.component';
import { HeaderComponent } from './core/componente/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { MasculinaComponent } from './pages/masculina/masculina.component';
import { FemininaComponent } from './pages/feminina/feminina.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HeaderComponent,
    HomeComponent,
    MasculinaComponent,
    FemininaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
