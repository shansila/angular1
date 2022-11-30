import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AngularComponent } from './angular/angular.component';
import { CourseComponent } from './course/course.component';
import { EventComponent } from './event/event.component';
import { MainComponent } from './main/main.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { PlacementComponent } from './placement/placement.component';

const routes: Routes = [
  {path:'',redirectTo:'Home',pathMatch:'full'},
  {path:'Home',component:MainComponent},
  {path:'Placement',component:PlacementComponent},
  {path:'Course',component:CourseComponent},
  {path:'Event',component:EventComponent},
  { path: 'teacher', loadChildren: () => import('./teacher/teacher.module').then(m => m.TeacherModule) },
  {path:'**',component:PagenotfoundComponent} //wildcard route
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
