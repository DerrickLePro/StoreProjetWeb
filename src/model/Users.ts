import {Role} from './Role';

export class Users{
  constructor(){}
  idUser:any=null;
  userName:string;
  password:string;
  actived:boolean;
  roles:Array<Role>;
}
