import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Payload, Root } from '../model/model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseUrl = 'http://ec2-18-212-53-8.compute-1.amazonaws.com:9091/v1.0/user/'

  constructor(private httpClient: HttpClient) {
  }

  public fetchAll(): Observable<any>{
    return this.httpClient.get(this.baseUrl);
  }

  public updateUser(user: Root): Observable<any>{
    return this.httpClient.put(this.baseUrl, user);
   }

  public deleteUser(email_id: string): Observable<any>{
    return this.httpClient.delete(this.baseUrl + email_id);
  }
}