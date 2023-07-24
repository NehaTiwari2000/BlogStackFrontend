import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Payload, User } from 'src/app/model/model';
import { UserSharedService } from 'src/app/service/user-shared.service';
import { UserService } from 'src/app/service/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {
  updateForm!: FormGroup;
  UserService: any;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private userService:UserService,
    private userSharedService: UserSharedService
  ) {}

  ngOnInit(): void {
    this.initUpdateForm();
    this.userSharedService.getUserDetails().subscribe(data=>{
    console.log("data received",data);
    this.updateForm.get("first_name")?.setValue(data?.first_name)
    this.updateForm.get("last_name")?.setValue(data?.last_name)
    this.updateForm.get("email_id")?.setValue(data?.email_id)
    this.updateForm.get("address")?.setValue(data?.address)
    if(data!=undefined){
    this.updateBean.gender=data?.gender;
    this.updateBean.date_of_birth=data.date_of_birth;
    this.updateBean.phone_number=data.phone_number;
    this.updateBean.status=data.status;
    this.updateBean.password="";
    this.updateBean.user_roles=data.user_roles
    }
  })
  }

  initUpdateForm() {
    this.updateForm = this.fb.group({
      first_name: ['', Validators.required],
      last_name: ['', Validators.required],
      email_id: ['', Validators.required],
      address: ['', Validators.required],
    });
  }

  updateBean:Payload=<Payload>{};
  UpdateForm() {
    console.log('values of form', this.updateForm.value);
    this.updateBean.email_id=this.updateForm.get('email_id')?.value;
    this.updateBean.first_name=this.updateForm.get('first_name')?.value;
    this.updateBean.last_name=this.updateForm.get('last_name')?.value;
    this.updateBean.address=this.updateForm.get('address')?.value;
    this.userService.updateUser(this.updateBean).subscribe(data=> {
    console.log("data",data)
    if (data.status) {
      Swal.fire('updated successfully')
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