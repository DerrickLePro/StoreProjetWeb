import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {RouterModule, Routes} from '@angular/router';
import { CategorieComponent } from './categorie/categorie.component';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';
import  "rxjs/add/operator/map";
import {CategorieService} from "../services/admin/categorie.service";
import { AboutComponent } from './about/about.component';
import { ProduitComponent } from './produit/produit.component';
import { HomeComponent } from './home/home.component';
import { CartComponent } from './cart/cart.component';

const appRoutes:Routes = [
  {path:'', redirectTo:'/home',pathMatch:'full'},
  {path:'home', component:HomeComponent},
  {path:'product', component:ProduitComponent},
  {path:'category', component:CategorieComponent},
  {path:'cart', component:CartComponent}

]

@NgModule({
  declarations: [
    AppComponent,
    CategorieComponent,
    AboutComponent,
    ProduitComponent,
    HomeComponent,
    CartComponent
  ],
  imports: [
    BrowserModule, RouterModule.forRoot(appRoutes), HttpModule, FormsModule
  ],
  providers: [CategorieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
