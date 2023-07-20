import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../model/model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  baseUrl = 'http://ec2-18-212-53-8.compute-1.amazonaws.com:9091/v1.0/authentication'

  constructor(private httpClient: HttpClient) {
  }

  public signUp(user: User): Observable<any> {
    return this.httpClient.post<any>(this.baseUrl+"/sign-up/",user);
  }

  public login(user: User): Observable<any>{
    return this.httpClient.post<any>(this.baseUrl+"/sign-in/",user);
  }
}