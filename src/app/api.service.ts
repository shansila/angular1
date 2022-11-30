import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
baseurl:string='https://digitalschool1.herokuapp.com/teacher/'
  constructor(private http : HttpClient) { }
  addstudent(formdata:any){
    
    return this.http.post(this.baseurl +'add-student',formdata)
  }
}
