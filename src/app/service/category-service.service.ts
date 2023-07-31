import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Category } from '../model/model';
@Injectable({
  providedIn: 'root'
})
export class CategoryServiceService {

  baseUrl = "http//localhost:9090"
  
  
  constructor(private httpClient: HttpClient,
              private obsevable: Observable<Category>) {}

  public fetchAll():Observable<any>{
    return this.httpClient.get(this.baseUrl);
  }

  public addCategory(category : Category): Observable<any>{
     return this.httpClient.post(this.baseUrl,category);
  }

  public updatecategory(id: number,category:Category) : Observable<any>{
    return this.httpClient.put(this.baseUrl,category);
  }

  public deleteCategory(id:number){
    return this.httpClient.delete(this.baseUrl+id);
  }
}
