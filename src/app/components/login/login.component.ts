import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  LoginForm!: FormGroup;


  constructor(private fb: FormBuilder) { }


  ngOnInit(): void {
    this.initLoginForm();
  }

  initLoginForm() {
    this.LoginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email, Validators.pattern('^.+@gmail.com$')]],
      password: ['', [Validators.required]]
    })
  }

  login() {
    console.log("login values are ", this.LoginForm.value);
    if (this.LoginForm.invalid) {
      // Swal.fire('Hello world!');
      Swal.fire({
        icon: 'error',
        title: '',
        text: 'Please fill the form',
        // footer: '<a href="">Why do I have this issue?</a>'
      })
    }

  }

}
