import {Categorie} from './Categorie';
import {Image} from "./Image";

export class Produit{
  idProduit:any = null;
  designation:string;
  description:string;
  prix:number;
  selected:boolean;
  quantity:number;
  categorie:Categorie;
  photo:Image;

  constructor() {
  }
}
