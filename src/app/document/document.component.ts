import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-document',
  templateUrl: './document.component.html',
  styleUrls: ['./document.component.css']
})
export class DocumentComponent implements OnInit {

student_list:any=[]
get_students(){
  this.service.load_students().subscribe(res=>{
    this.student_list=res
    console.log(this.student_list)
  })
}
response:any={}
message:string=''
  submit(formdata:any){
    console.log(formdata)
    this.service.addstudent(formdata).subscribe(res=>{
      this.response=res
      console.log(this.response)
      if (this.response.statusCode== 200){
        this.message="data is inserted successfully"
      }
      if(this.response.statusCode==409){
        this.message="same message already exist"
      }
    })
 

  }

  constructor(private service : ApiService) { }

  ngOnInit(): void {
    // this.loadstudent()
  }
  // loadstudent(){
  //   this.service.student_list().subscribe(res=>{
  //     this.studentdata=res
  //     console.log(this.studentdata)
      
  //   })
  // }
  deletestudent(id:number){
    this.service.deletestudent(id).subscribe(res=>{
      console.log(res)
      // this.loadstudent()
    })
  }

}
