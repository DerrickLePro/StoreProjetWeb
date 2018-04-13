import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {RouterModule, Routes} from '@angular/router';
import { CategorieComponent } from './categorie/categorie.component';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';
import  "rxjs/add/operator/map";

const appRoutes:Routes = [
  {path:'category', component:CategorieComponent},
  {path:'', redirectTo:'#',pathMatch:'full'}
]

@NgModule({
  declarations: [
    AppComponent,
    CategorieComponent
  ],
  imports: [
    BrowserModule, RouterModule.forRoot(appRoutes), HttpModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
