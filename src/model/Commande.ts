import {LigneCommande} from './LigneCommande';

export class Commande{
  idCommande:any = null;
  dateCommande:Date;
  items:Array<LigneCommande>;

  constructor() {
  }
}
