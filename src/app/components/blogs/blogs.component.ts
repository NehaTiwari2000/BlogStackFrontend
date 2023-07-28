import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})
export class BlogsComponent implements OnInit {
  search!:string;
  role!:string|null;
  toggleButton:boolean= false;

  constructor(private router: Router, private authserive: AuthService) { }

  ngOnInit(): void {
    this.role=localStorage?.getItem("role")
    console.log("the role value is",this.role)

    this.authserive.refreshToken().subscribe((data) => {
      console.log(data);
      localStorage.setItem('jwt_token', data.data.jwt_token);
        localStorage.setItem('refresh_token',data.data.refresh_token);
        localStorage.setItem('user_id', data.data.user_id);
        if (data.data.user_id == 'atiya@gmail.com') {
          localStorage.setItem('role', 'admin');
        } else localStorage.setItem('role', 'user');
    });
}

  logout(){
    localStorage.clear();
    Swal.fire('Successfully Logout').then(()=>{this.router.navigate([""])})
  }
}