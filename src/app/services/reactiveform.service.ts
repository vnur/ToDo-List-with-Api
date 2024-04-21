import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReactiveformService {

  private apiUrl = 'https://fakestoreapi.com/products/'; // Specify your API URL here

  constructor(public http:HttpClient) {


   }


    postdata(data:any) {
   return this.http.post('https://fakestoreapi.com/products/',data)
   }

   delete(data:any) {
    return this.http.delete('https://fakestoreapi.com/products/'+data)
    }

   
  }