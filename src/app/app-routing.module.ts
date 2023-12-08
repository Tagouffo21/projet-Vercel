import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes} from  '@angular/router';
import { PageAccueilComponent } from './page-accueil/page-accueil.component';
import { InterventionsComponent } from './interventions/interventions.component';
import { LoginComponent } from './login/login.component';
import { ProduitComponent } from './produit/produit.component';
import { PresentationComponent } from './presentation/presentation.component';

const routes : Routes = [
  {
    path : 'login',
    component: LoginComponent

  },
 

  {
    path : '',
    component: PresentationComponent

  },
  { path: 'page-accueil',
  component: PageAccueilComponent
},
  {
    path: 'Interventions',
    component: InterventionsComponent
  },

  {
    path: ' Interventions',
    component: ProduitComponent
  },

  {
    path: 'produit',
    component: ProduitComponent
  },

];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot( routes)
  ],
  exports : [ RouterModule]
})
export class AppRoutingModule { }
