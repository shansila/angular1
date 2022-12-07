import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
baseurl:string='http://127.0.0.1:8000/teacher/'
  constructor(private http : HttpClient) { }
  addstudent(formdata:any){
    
    return this.http.post(this.baseurl +'add-student',formdata)
  }

  load_students(){
    return this.http.get(this.baseurl +'load-students')
  }
  deletestudent(id:number){
    return this.http.delete(this.baseurl +'delete-student/' +id)
  }
}
