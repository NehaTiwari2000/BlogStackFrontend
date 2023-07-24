import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Payload, User } from '../model/model';

@Injectable({
  providedIn: 'root'
})

export class UserSharedService {

  private userObject= new BehaviorSubject<Payload | null>(null)

  constructor() { }

  getUserDetails(){
    return this.userObject.asObservable();
  }

  setUserDetails(user: Payload){
    return this.userObject.next(user);
  }
}