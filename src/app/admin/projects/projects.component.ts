import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/project';
import { ProjectsService } from 'src/app/projects.service';

@Component({
  selector: 'projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  projects: Project[] = [];
  newproject: Project = new Project();
  editProject: Project = new Project();
  id: number = 0;
  Text : string ="";


  constructor(private projectsService: ProjectsService) { }

  ngOnInit() {
    this.getAllProjects();
  }
  getAllProjects() {
    this.projectsService.getAllprojects().subscribe(
      (Response: Project[]) => {
        this.projects = Response;
        console.log(Response);
      }
    );
  }
  onSaveClick() {
    this.projectsService.insertProject(this.newproject).subscribe(
      (Response) => {
        console.log(Response);

        // var p:Project = new Project();
        // p.projectID = Response.projectID;
        // p.projectName = Response.projectName;
        // p.dateOfStart = Response.dateOfStart;
        // p.teamSize = Response.teamSize;
        // this.projects.push(p);
        this.getAllProjects();
        this.newproject.projectID = null;
        this.newproject.projectName = null;
        this.newproject.dateOfStart = null;
        this.newproject.teamSize = null;
      }, (error) => {
        console.log(error);
      }
    );
  }
  onEditClick(event: any, index: number) {
    this.editProject.projectID = this.projects[index].projectID;
    this.editProject.projectName = this.projects[index].projectName;
    this.editProject.dateOfStart = this.projects[index].dateOfStart;
    this.editProject.teamSize = this.projects[index].teamSize;
  }
  onUpdateClick() {
    this.projectsService.updateProject(this.editProject).subscribe((Response: Project) => {
      this.getAllProjects();
    },
      (error) => {
        console.log(error);

      });
  }
  onDeleteClick(event: any, index: number) {
    this.projectsService.deleteProject(this.projects[index].projectID).subscribe((Response) => {
      this.getAllProjects();
    },
      (error) => {
        console.log(error);
      })
  }
  onSearchClick(){
    this.projectsService.serachProject(this.id,this.Text).subscribe(
      (Response:Project[])=>
      {
        this.projects = Response;
      },
      (error)=>
      {
        console.log();
      }
    )
  }

}
