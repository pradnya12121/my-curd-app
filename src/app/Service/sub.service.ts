import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { apiURL } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SubService {
  

  constructor(private httpClient:HttpClient) { }
  
  getPost(){
    return this.httpClient.get(`${apiURL}posts`)
  }
  getPostById(id:any){
    return this.httpClient.get(`${apiURL}posts/` + id)

  }

  // productInfo= new Subject();
  productInfo = new BehaviorSubject({pid:101,pname:'pradnya',pprice:20})
}
