import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PersonI } from 'interface';


@Injectable({
  providedIn: 'root'
})
export class PersonDetailsService {

  constructor(private PersonDetails:HttpClient ) {

  }


  postData(data:any){
return this.PersonDetails.post("http://localhost:3000/personDetails",data)
  }
}

