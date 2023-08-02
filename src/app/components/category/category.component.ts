import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/model/model';
import { CategoryService } from 'src/app/service/category-service.service'


@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  categoryList: Category[] = []

  constructor(private categoryService:CategoryService) {
    
   }

  ngOnInit(): void {
    this.categoryService.fetchAll().subscribe((data)=>{
      console.log("inside subscribe")
      console.log(data.data.payload)
      this.categoryList = data.data.payload
    })
  }

  viewAll(){
      console.log("view all called")
  }

}
