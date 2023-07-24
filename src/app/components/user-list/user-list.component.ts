import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { UserService } from 'src/app/service/user.service';
import { Payload, User, UserData } from 'src/app/model/model';
import { UserSharedService } from 'src/app/service/user-shared.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})

export class UserListComponent implements OnInit {
  displayedColumns: string[] = ['id','emailId', 'firstName', 'lastName',];
  userList:Payload[]=[]
  firstName: any;
  page: number = 1;
  count: number = 0;
  tableSize: number= 4;
  tablesSizes: any= [] ;
 
  @ViewChild(MatPaginator) paginator !:MatPaginator;
  dataSource: any; 
 
  constructor(private userServive: UserService,private router: Router,
    private userSharedService:UserSharedService) {  
    }

  ngOnInit(): void {
    this.getUsers();
  }

  onTableDataChange(event: any) {
    this.page = event;
    this.getUsers();
  }

  onTableSizeChange(event: any): void {
    this.tableSize = event.target.value;
    this.page = 1;
    this.getUsers();
  }

  Search(){
    if(this.firstName == ""){
      this.ngOnInit();
    }else{
    this.userList = this.userList.filter(data => {
    return data.first_name.toLocaleLowerCase().match(this.firstName.toLocaleLowerCase());
      })
    }
  }

  getUsers(){
    this.userServive.fetchAll().subscribe(data=> {
      console.log("fetching all user list"+data.data.payload)
      this.userList=data.data.payload;
      console.log(this.userList)
    })
  }

  updateUser(user: Payload){
    console.log("in update function and the obj is",this.userList);
    this.userSharedService.setUserDetails(user);
    this.router.navigate([`update-user`]);
  }

  deleteUser(email_id: Payload){
    this.userServive.deleteUser(email_id).subscribe(data => {
    console.log(data);
    this.getUsers();
    })
  }
}