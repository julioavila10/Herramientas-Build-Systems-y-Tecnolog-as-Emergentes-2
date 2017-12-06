import { Injectable } from '@angular/core';
//import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { Http,Response } from '@angular/http';
import 'rxjs/Rx';
import { Item } from './Item';
@Injectable()
export class CatalogoService {

  constructor(private catalogo:Http) { }

  getDatos(){
  	return this.catalogo.get('https://project-6495366088438134387.firebaseio.com/productos.json')
  	.map((response: Response)=> response.json())
  }

  sendDatos(item: Item){
  	let datos=JSON.stringify(item);
  	return this.catalogo.post('https://project-6495366088438134387.firebaseio.com/shoppingcar.json',datos)
  	.map((response: Response)=>response.json())
  }

}
