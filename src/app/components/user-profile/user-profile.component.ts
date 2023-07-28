import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
userName:string | null | undefined;
  constructor() { }

  ngOnInit(): void {
    if(localStorage.getItem('user_id')!=null){
      this.userName=localStorage?.getItem('user_id')?.split("@")[0];
    }
    else{
      this.userName="Guest User"
    }
  }
}