import {Produit} from './Produit';
import {Commande} from './Commande';

export class LigneCommande{
  idLigneCommande:any = null;
  Produit:Produit;
  quantity:number;
  prix:number;
  commande:Commande;

  constructor() {
  }
}
