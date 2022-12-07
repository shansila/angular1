import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { CourseComponent } from './course/course.component';
import { EventComponent } from './event/event.component';
import { PlacementComponent } from './placement/placement.component';
import { FooterComponent } from './footer/footer.component';
import { DocumentComponent } from './document/document.component';
import { AngularComponent } from './angular/angular.component';
import { ClassComponent } from './class/class.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { FormsModule } from '@angular/forms';
import { ApiService } from './api.service';
import{ HttpClientModule} from '@angular/common/http';
import { EditstudentComponent } from './editstudent/editstudent.component'



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    CourseComponent,
    EventComponent,
    PlacementComponent,
    FooterComponent,
    DocumentComponent,
    AngularComponent,
    ClassComponent,
    PagenotfoundComponent,
    EditstudentComponent,
    
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent ]
})
export class AppModule { }
