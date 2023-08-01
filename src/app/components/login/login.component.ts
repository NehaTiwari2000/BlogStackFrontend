import { Component, OnInit } from '@angular/core';
import {HttpErrorResponse} from '@angular/common/http'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { User } from 'src/app/model/model';
import { AuthService } from 'src/app/service/auth.service';
import  Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})

export class LoginComponent implements OnInit {
  signUp!: FormGroup;
  LoginForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.initSignUpForm();
    this.initLoginForm();
  }

  initSignUpForm() {
    this.signUp = this.fb.group({
      first_name: ['', Validators.required],
      last_name: ['', Validators.required],
      email_id: ['', Validators.required],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    });
  }

  initLoginForm() {
    this.LoginForm = this.fb.group({
      email_id: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  signBean:User=<User>{};
  signUpForm() {
    console.log('values of form', this.signUp.value);
    this.signBean.email_id=this.signUp.get('email_id')?.value;
    this.signBean.first_name=this.signUp.get('first_name')?.value;
    this.signBean.last_name=this.signUp.get('last_name')?.value;
    this.signBean.password=this.signUp.get('password')?.value;
    this.signBean.blogStackRoleDetails=[];
    this.signBean.blogStackRoleDetails.push({"role_name":"user"})
    this.signBean.address="";
    this.signBean.gender="";
    this.signBean.date_of_birth="";
    this.signBean.phone_number="";
    this.signBean.profile_photo="";
    this.signBean.status="";
    this.authService.signUp(this.signBean).subscribe((data) => {
      console.log(data);
      if (data.status) {
        Swal.fire('Successfully Registered').then(()=>{
          window.location.reload();
        })
      }
    });
    if (
      this.signUp.get('password')?.value !=
      this.signUp.get('confirmPassword')?.value
    ) {
      Swal.fire('Password not matched');
    }
    Object.values(this.signUp.controls).forEach((control) => {
      
      if (control.invalid) {
        control.markAsDirty();
        control.updateValueAndValidity({ onlySelf: true });
      }
    });
  }

  login() {
    console.log('value of login form', this.LoginForm.value);
    this.authService.login(this.LoginForm.value).subscribe((data) => {
      // console.log(data);
      console.log(data.status)
      if(data.status){
        console.log(event);
      }
      if (data.status) {
        localStorage.setItem('jwt_token', data.data.jwt_token);
        localStorage.setItem('user_id', data.data.user_id);
        if (data.data.user_id == 'atiya@gmail.com') {
          localStorage.setItem('role', 'admin');
        } else localStorage.setItem('role', 'user');
        Swal.fire('Successfully Login').then(() => {
          if (localStorage.getItem('role') == 'admin') {
            this.router.navigate(['/user-list']);
          } else {
            this.router.navigate(['/blogs']);
          }
      });
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong!',
        });
      }
    });
  }
}