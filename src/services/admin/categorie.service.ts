import {Http, RequestOptions, URLSearchParams} from '@angular/http';
import {Injectable} from '@angular/core';
import {Categorie} from '../../model/Categorie';

@Injectable()
export class CategorieService {
  constructor(public  http: Http) {
  }

  saveCategorie(categorie: Categorie, photo: File) {
    let formdata: FormData = new FormData();
    formdata.append('file', photo);
    formdata.append('name', categorie.nomCategorie)
    formdata.append('description', categorie.description)
    console.log(formdata);
    const param = new URLSearchParams();

    const option = new RequestOptions({
      body: categorie,
      params: formdata
    });
    return this.http.post("http://localhost:8080/admin/category/add",formdata);
  }

  getAllCategory(){
    return this.http.get("http://localhost:8080/admin/category/all").map(resp=>resp.json());
  }
  getPhotoCat(idCat:number){
    return this.http.get("http://localhost:8080/admin/photoCat/"+idCat);
  }
}
