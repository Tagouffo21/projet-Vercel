import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { PageAccueilComponent } from './page-accueil/page-accueil.component';
import { AppRoutingModule } from './app-routing.module';
import { ProduitComponent } from './produit/produit.component';
import { InterventionsComponent } from './interventions/interventions.component';
import { PresentationComponent } from './presentation/presentation.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PageAccueilComponent,
    ProduitComponent,
    InterventionsComponent,
    PresentationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
