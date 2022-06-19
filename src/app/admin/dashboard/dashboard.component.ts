import { DashboardService } from './../../dashboard.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  Designation: string = "";
  Username: string = "";
  NoOfTeamMembers: number = 0;
  TotalCostOfAllProjects: number = 0;
  PendingTasks: number = 0;
  UpComingProjects: number = 0;
  ProjectCost: number = 0;
  CurrentExpenditure: number = 0;
  AvailableFunds: number = 0;
  ToDay!: Date;

  Clients: string[] = [];
  Projects: string[] = [];
  Years: number[] = [];
  TeamMembersSummary: any = [];
  TeamMembers: any = [];

  constructor( private dashboardService:DashboardService) { }

  ngOnInit(): void {
    this.Designation = "Manager";
    this.Username = "Anvesh";
    this.NoOfTeamMembers = 150;
    this.TotalCostOfAllProjects = 850;
    this.PendingTasks = 43;
    this.UpComingProjects = 0.7;
    this.ProjectCost = 400;
    this.CurrentExpenditure = 200;
    this.AvailableFunds = 340;
    this.ToDay=new Date();
    this.Clients = ["ABC Infotech Ltd.", "DEF Software Solution", "GHI Industries"];
    this.Projects = ["Project A", "Project B", "Project C", "Project D"];
    for (let i = 2014; i >= 2000; i--) {
      this.Years.push(i);
    }
    this.TeamMembersSummary = this.dashboardService.getTeamMembersSummary();
    this.TeamMembers = [
      {
        Region: "East", Members: [
          { ID: 1, Name: "Rahul", Status: "Available" },
          { ID: 2, Name: "Ajay", Status: "Available" },
          { ID: 3, Name: "Kriti", Status: "Busy" },
          { ID: 4, Name: "Kushi", Status: "Busy" }
        ]
      },
      {
        Region: "West", Members: [
          { ID: 1, Name: "Sanjay", Status: "Available" },
          { ID: 2, Name: "Rambabu", Status: "Available" },
          { ID: 3, Name: "Lovely", Status: "Busy" },
          { ID: 4, Name: "Prem", Status: "Busy" }
        ]
      },
      {
        Region: "North", Members: [
          { ID: 1, Name: "Karthik", Status: "Available" },
          { ID: 2, Name: "Krishna", Status: "Available" },
          { ID: 3, Name: "Kumari", Status: "Busy" },
          { ID: 4, Name: "Kanya", Status: "Busy" }
        ]
      },
      {
        Region: "South", Members: [
          { ID: 1, Name: "Seetha", Status: "Available" },
          { ID: 2, Name: "Ram", Status: "Available" },
          { ID: 3, Name: "Laxman", Status: "Busy" },
          { ID: 4, Name: "Hanuma", Status: "Busy" }
        ]
      }
    ]
  }
  OnProjectChange($event: any) {
    if ($event.target.innerHTML == "Project A") {
      this.ProjectCost = 100;
      this.CurrentExpenditure = 150;
      this.AvailableFunds = 250;
    }
    else if ($event.target.innerHTML == "Project B") {
      this.ProjectCost = 200;
      this.CurrentExpenditure = 250;
      this.AvailableFunds = 350;
    }
    else if ($event.target.innerHTML == "Project C") {
      this.ProjectCost = 300;
      this.CurrentExpenditure = 350;
      this.AvailableFunds = 450;
    }
    else if ($event.target.innerHTML == "Project D") {
      this.ProjectCost = 400;
      this.CurrentExpenditure = 450;
      this.AvailableFunds = 550;
    }
  }

}
