import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-angular',
  templateUrl: './angular.component.html',
  styleUrls: ['./angular.component.css']
})
export class AngularComponent implements OnInit {
  usertype='junior'
  isallowed=false
  students=[
  {
    'name':'shansila',
    'age':'24',
    'gender':'female',
    'phonenumber':'43266635',
    'email':'sghgh@gmail.com'
  },
  {
    'name':'sruthi',
    'age':'26',
    'gender':'female',
    'phonenumber':'4326663878',
    'email':'shghgh@gmail.com'
  }
  ]
  courses=[
    {
      'name':'python',
      'duration':'3months',
      'total_amount':'454656',
      'no_of_seats':'26'
    },
    {
      'name':'angular',
      'duration':'2months',
      'total_amount':'2669',
      'no_of_seats':'14'
    },
    {
      'name':'php',
      'duration':'2months',
      'total_amount':'26788',
      'no_of_seats':'20'
    }
  ]
  color='white'
  fontsize='20px'
  showred=true
  showfontsize=false
  displayblue=false

  constructor() { }

  ngOnInit(): void {
  }

}
