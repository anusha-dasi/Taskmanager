import { FormsModule } from '@angular/forms';
import { ProjectsService } from './../projects.service';

import { DashboardService } from './../dashboard.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about/about.component';
import { MyprofileComponent } from './myprofile/myprofile.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProjectsComponent } from './projects/projects.component';



@NgModule({
  declarations: [
    DashboardComponent,
    AboutComponent,
    MyprofileComponent,
    ProjectsComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[
    DashboardComponent,
    AboutComponent,
    MyprofileComponent,
    ProjectsComponent
  ],
  providers:[DashboardService,ProjectsService]
})
export class AdminModule { }
