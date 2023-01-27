import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../Class/userDetails';

@Injectable({
  providedIn: 'root'
})
export class FierbaseService {
apiURL='https://crud-operation-cdfec-default-rtdb.firebaseio.com/'
  constructor(private httpClient:HttpClient) { }
  createPost(usersData:User){
    return  this.httpClient.post(this.apiURL+"post.json",usersData)
  }
  
}
