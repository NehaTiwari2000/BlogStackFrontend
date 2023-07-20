import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

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

}
