import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  selectedSubjects = '';
	onSelected(value:string): void {
		this.selectedSubjects = value;
	}
  submit(formdata:any){
    console.log(formdata)
  }
  title = 'angularapp';
 
  timetable: any [] =[
    {
      'subject':'monday',
      'a':'sub1',
      'b':'sub2',
      'c':'sub3',
      'd':'sub4',
      'e':'sub5',
      'f':'sub6',
      'g':'sub7',
    },
    {
      'subject':'tuesday',
      'a':'sub1',
      'b':'sub2',
      'c':'sub3',
      'd':'sub4',
      'e':'sub5',
      'f':'sub6',
      'g':'sub7',
    },
    {
      'subject':'wednesday',
      'a':'sub1',
      'b':'sub2',
      'c':'sub3',
      'd':'sub4',
      'e':'sub5',
      'f':'sub6',
      'g':'sub7',
    },
    {
      'subject':'thursday',
      'a':'sub1',
      'b':'sub2',
      'c':'sub3',
      'd':'sub4',
      'e':'sub5',
      'f':'sub6',
      'g':'sub7',
    },
    {
      'subject':'friday',
      'a':'sub1',
      'b':'sub2',
      'c':'sub3',
      'd':'sub4',
      'e':'sub5',
      'f':'sub6',
      'g':'sub7',
    },
    {
      'subject':'saturday',
      'a':'sub1',
      'b':'sub2',
      'c':'sub3',
      'd':'sub4',
      'e':'sub5',
      'f':'sub6',
      'g':'sub7',
    },
    ]
    public selectedName:any;
  
    public highlightRow(t: any) {
      this.selectedName = t.subject;
    }
    constructor() { }

    ngOnInit(): void {
    }


    
    
}
