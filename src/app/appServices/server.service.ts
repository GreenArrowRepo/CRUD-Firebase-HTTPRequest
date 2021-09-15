import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServerService {

  constructor(private http :HttpClient) { }
  url ='https://crud-httprequest-exercis-1-default-rtdb.asia-southeast1.firebasedatabase.app/products.json';
  id:number = 0;
  private headers = new Headers({'Content-Type':'application/json'});

  addProducts(products: { id: string; name: string; price: number; }[]) {
    // return this.http.post(this.url, products);

    return this.http.put(this.url, products);
  }

  



  
}
