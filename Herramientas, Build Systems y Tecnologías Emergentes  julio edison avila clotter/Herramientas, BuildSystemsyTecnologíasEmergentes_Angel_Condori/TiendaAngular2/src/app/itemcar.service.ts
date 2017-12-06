import { Injectable } from '@angular/core';
import { Http,Response } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class ItemcarService {
	
  constructor(private itemcar:Http) { }

  getDatos(){
  	return this.itemcar.get('https://project-6495366088438134387.firebaseio.com/shoppingcar.json')
  	.map((response: Response)=> response.json())
  	//.subscribe(items => Object.keys())
  }
}
