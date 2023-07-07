import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  signUp!:FormGroup;
  LoginForm!:FormGroup;
  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
  }
  
  initSignUpForm() {
      this.signUp = this.fb.group({
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        emailId: ['', Validators.required],
        password: ['', Validators.required],
        confirmPassword: ['', Validators.required]
      })
    }

  signUpForm(){
   console.log("values of form", this.signUp.value);

   if (this.signUp.get('password')?.value!=this.signUp.get('confirmPassword')?.value) {
    alert("password not matched")
   }

   Object.values(this.signUp.controls).forEach(control => {
    if (control.invalid) {
      control.markAsDirty();
      control.updateValueAndValidity({ onlySelf: true });
    }
  });
  }
  
  login(){
    console.log("value of login form",this.LoginForm.value);
  }

}
function login() {
  throw new Error('Function not implemented.');
}

