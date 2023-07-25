import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-stack',
  templateUrl: './stack.component.html',
  styleUrls: ['./stack.component.css']
})
export class StackComponent implements OnInit {
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
}