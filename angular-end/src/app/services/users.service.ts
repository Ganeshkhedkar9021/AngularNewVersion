import { Injectable } from '@angular/core';

import {HttpClient,HttpHeaders} from '@angular/common/http';
import {Response} from './interfaces/response'
@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { 
   // alert("HIII");
  }

  setHeader(){
    let headers = new HttpHeaders();
  //  headers = headers.append('Authorization', this.authHeader);
   // headers = headers.append('Accept', 'application/json');
    headers = headers.append('Content-Type', 'application/json');
    return headers;
  }


  getuserlist(){
    let headers = this.setHeader();
    return this.http.get<Response>('http://localhost:3001/users',{headers:headers});
  }
  adduser(userinfo){
    let headers = this.setHeader();
    return this.http.post<Response>('http://localhost:3001/adduser',userinfo,{headers:headers});
  }


}
