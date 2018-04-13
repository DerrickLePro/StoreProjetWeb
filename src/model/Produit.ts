import {Categorie} from './Categorie';

export class Produit{
  idProduit:any = null;
  designation:string;
  description:string;
  prix:number;
  selected:boolean;
  photo:string;
  quantity:number;
  categorie:Categorie;

  constructor() {
  }
}
