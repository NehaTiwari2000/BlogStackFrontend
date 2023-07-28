import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
role:String | null | undefined;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.role=localStorage.getItem("role")
  }

  toggleSignIn(){
    if(this.role==null){
      this.router.navigate(["/login"])
    }else{
      Swal.fire('You have successfully logged out').then(()=>{localStorage.clear()
        window.location.reload()
    })
    }
  }
}