import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import  {Observable} from 'rxjs'
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient,private router:Router) { }

  login(user:any):Observable<any>{
    const headers = { 'content-type': 'application/json'} 
    console.log(user);
    return this.http.post(`${environment.url}auth/api/login/`,user,{'headers':headers});
  }
  
  signup(user:any):Observable<any>{
    const headers = { 'content-type': 'application/json'} 
 
    return this.http.post(`${environment.url}auth/api/register/`,user,{'headers':headers});
  }
  
  
}
