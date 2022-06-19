import { Injectable } from '@angular/core';

@Injectable()
export class DashboardService {

getTeamMembersSummary():any[]
{
  var TeamMembersSummary = [
    { Region: "East", TeamMembersCount: 40, TemporarilyUnavailableMembers: 5 },
    { Region: "West", TeamMembersCount: 30, TemporarilyUnavailableMembers: 4 },
    { Region: "North", TeamMembersCount: 20, TemporarilyUnavailableMembers: 3 },
    { Region: "South", TeamMembersCount: 10, TemporarilyUnavailableMembers: 2 }
  ];
  return TeamMembersSummary;
}
}
