import {Http} from '@angular/http';
import {Injectable} from '@angular/core';
import {Categorie} from '../../model/Categorie';

@Injectable()
export class CategorieService{
  constructor(public  http:Http){}

  saveCategorie(categorie:Categorie, photo:File){
    let formdata: FormData = new FormData();
    formdata.append('file', photo);
    return this.http.post("http://localhost:8080/admin/category/add"+formdata, categorie)
      .map(resp=>resp.json());
  }


}
