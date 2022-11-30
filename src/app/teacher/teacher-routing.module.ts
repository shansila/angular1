import { ViewEncapsulation } from '@angular/compiler';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddstudentComponent } from './addstudent/addstudent.component';
import { TeacherComponent } from './teacher.component';
import { ViewstudentComponent } from './viewstudent/viewstudent.component';

const routes: Routes = [
  { path: '', component: TeacherComponent,children:[
    {path:'addstudent',component:AddstudentComponent},
    {path:'viewstudent',component:ViewstudentComponent},
  ]
 }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeacherRoutingModule { }
