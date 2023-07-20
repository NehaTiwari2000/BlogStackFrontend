import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
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
      confirmPassword: ['', Validators.required],
    });
  }

  initLoginForm() {
    this.LoginForm = this.fb.group({
      email_id: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  signUpForm() {
    console.log('values of form', this.signUp.value);
    this.authService.signUp(this.signUp.value).subscribe((data) => {
      console.log(data);
    });
    if (
      this.signUp.get('password')?.value !=
      this.signUp.get('confirmPassword')?.value
    ) {
      alert('password not matched');
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
      console.log(data);
      if (data.status) {
        localStorage.setItem('jwt_token', data.data.jwt_token);
        localStorage.setItem('user_id', data.data.user_id);
        if (data.data.user_id == 'Atiya@gmail.com') {
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