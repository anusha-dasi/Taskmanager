import { LoginComponent } from './login/login.component';
import { ProjectsComponent } from './admin/projects/projects.component';
import { AboutComponent } from './admin/about/about.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path:"login",component:LoginComponent},
  {path:"dashboard",component:DashboardComponent},
  {path:"about",component:AboutComponent},
  {path:"projects",component:ProjectsComponent},
  {path:"",redirectTo:"login",pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
