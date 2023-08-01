import { HttpClient,HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, ObservableInput } from 'rxjs';
import { User } from '../model/model';
import { catchError} from 'rxjs/operators';





@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // baseUrl = 'http://ec2-18-212-53-8.compute-1.amazonaws.com:9091/v1.0/authentication'
  
  baseUrl = 'http://localhost:9091/v1.0/authentication'

  constructor(private httpClient: HttpClient) {
  }

  public signUp(user: User): Observable<any> {
    return this.httpClient.post<any>(this.baseUrl+"/sign-up/",user);
  }

  public login(user: User): Observable<any>{
    return this.httpClient.post<any>(this.baseUrl+"/sign-in/",user)
    .pipe(catchError((res: ObservableInput<any>)=>{
        console.log("Response : ",res)
        return res
    }))
  }
}