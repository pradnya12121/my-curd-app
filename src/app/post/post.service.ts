import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from './post';

@Injectable({
  providedIn: 'root'
})
export class PostService {
constructor(private httpClient:HttpClient){

}
apiURL='https://jsonplaceholder.typicode.com'


httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}
getPost() :Observable <any>{
  return this.httpClient.get(this.apiURL + '/posts/')

}
create(post):Observable<Post>{
  return this.httpClient.post<Post>(this.apiURL + '/posts/',JSON.stringify(post),this.httpOptions)
}

find(id): Observable<Post> {
  return this.httpClient.get<Post>(this.apiURL + '/posts/' + id)
 
}
 
update(id, post): Observable<Post> {
  return this.httpClient.put<Post>(this.apiURL + '/posts/' + id, JSON.stringify(post), this.httpOptions)
  
}
 
delete(id){
  return this.httpClient.delete<Post>(this.apiURL + '/posts/' + id, this.httpOptions)
  
}
  
}
