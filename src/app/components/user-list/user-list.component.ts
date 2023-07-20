import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { DataSource } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { UserService } from 'src/app/service/user.service';
import { UserData } from 'src/app/model/model';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})

export class UserListComponent implements OnInit {

FRUITS: string[] = [
    'blueberry',
    'lychee',
    'kiwi',
    'mango',
    'peach',
    'lime',
    'pomegranate',
    'pineapple',
  ];
NAMES: string[] = [
    'Maia',
    'Asher',
    'Olivia',
    'Atticus',
    'Amelia',
    'Jack',
    'Charlotte',
    'Theodore',
    'Isla',
    'Oliver',
    'Isabella',
    'Jasper',
    'Cora',
    'Levi',
    'Violet',
    'Arthur',
    'Mia',
    'Thomas',
    'Elizabeth',
  ];
  
    displayedColumns: string[] = ['id', 'name', 'progress', 'fruit'];
    dataSource: MatTableDataSource<UserData>;
  
    @ViewChild(MatPaginator) paginator: MatPaginator | null | undefined ;
    @ViewChild(MatSort) sort: MatSort | null | undefined ;
  
    constructor(private userServive: UserService) {
      const users = Array.from({length: 5}, (_, k) => this.createNewUser(k + 1));
  
      this.dataSource = new MatTableDataSource(users);
    }
    
  ngOnInit(): void {
    this.fetchUserList();
  }
  
    ngAfterViewInit() {
      if(this.dataSource!=undefined || this.dataSource!=null){
        // this.dataSource.paginator = this.paginator;
        // this.dataSource.sort = this.sort;
      }
    }

    userList:UserData[]=[]

    fetchUserList(){
      this.userServive.fetchAll().subscribe(data=> {
        console.log("fetching all user list"+data.data.payload)
        this.userList=data.data.payload;
        console.log(this.userList)
      })
    }
  
    applyFilter(event: Event) {
      const filterValue = (event.target as HTMLInputElement).value;
      this.dataSource.filter = filterValue.trim().toLowerCase();
  
      if (this.dataSource.paginator) {
        this.dataSource.paginator.firstPage();
      }
    }

    createNewUser(id: number): UserData {
      const name =
        this.NAMES[Math.round(Math.random() * (this.NAMES.length - 1))] +
        ' ' +
        this.NAMES[Math.round(Math.random() * (this.NAMES.length - 1))].charAt(0) +
        '.';
    
      return {
        id: id.toString(),
        name: name,
        progress: Math.round(Math.random() * 100).toString(),
        fruit: this.FRUITS[Math.round(Math.random() * (this.FRUITS.length - 1))],
      };
    }
  }  