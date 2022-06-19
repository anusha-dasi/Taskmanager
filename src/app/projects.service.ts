import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Project } from './project';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  urlPrefix: string = "http://localhost:9090";
  constructor(private httpClient: HttpClient) { }
  getAllprojects(): Observable<Project[]> {
    return this.httpClient.get<Project[]>(this.urlPrefix + "/api/projects").
      pipe(map(
        (data: Project[]) => {
          for (let j = 0; j < data.length; j++) {
            data[j].teamSize =data[j].teamSize * 100;
          }
          return data;
        }
      ));
  }
  insertProject(newProject: Project): Observable<Project> {
    return this.httpClient.post<Project>(this.urlPrefix + "/api/projects", newProject);
  }
  updateProject(updatedProject: Project): Observable<Project> {
    return this.httpClient.put<Project>(this.urlPrefix + "/api/projects", updatedProject);
  }
  deleteProject(Id: number): Observable<string> {
    return this.httpClient.delete<string>(this.urlPrefix + "/api/projects?ProjectID=" + Id);
  }
  serachProject(searchBy: number, searchText: string): Observable<Project[]> {
    return this.httpClient.get<Project[]>(this.urlPrefix + "/api/projects/search/" + searchBy + "/" + searchText);
  }
}
