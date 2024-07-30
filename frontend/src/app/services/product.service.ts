import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import Product from '../../types/product';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  apiUrl="http://localhost:3000";
  httpClient=inject(HttpClient);
  constructor() { }

  getProducts(){
    return this.httpClient.get<Product[]>(this.apiUrl+'/products');
  }

  getProduct(id:string){
    return this.httpClient.get<Product>(this.apiUrl+'/products/'+id);
  }
  addproduct(model:Product){
    return this.httpClient.post(this.apiUrl+'/products',model);

  }
  updateProduct(id:string,model:Product){
    return this.httpClient.put(this.apiUrl+'/products/'+id ,model);
  }

  deleteProduct(id:string){
    return this.httpClient.delete(this.apiUrl+'/products/'+id );
  }

}
