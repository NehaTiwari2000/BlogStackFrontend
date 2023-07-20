import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {

  search!:string;
  role!:string|null;
  toggleButton:boolean= false;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.role=localStorage?.getItem("role")
    console.log("the role value is",this.role)
  }

  logout(){
    localStorage.clear();
    Swal.fire('Successfully Logout').then(()=>{this.router.navigate([""])})
  }

  toggleValue(){
    this.toggleButton=!this.toggleButton
    if(this.toggleButton==false){
      this.router.navigate(["/stack"])
    }else
    {
      this.router.navigate(["/blogs"])
    }
  }


}
