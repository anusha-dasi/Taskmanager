import { map } from 'rxjs/operators';
import { Observable, pipe } from 'rxjs';
import { LoginView } from './login-view';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient: HttpClient) { }
  currentUserName: any = sessionStorage.getItem("loggedInUser");

  public Login(loginView: LoginView): Observable<any> {
    return this.httpClient.post<any>("http://localhost:9090" + "/authenticate", loginView, { responseType: "json" })
      .pipe(map(user => {
        if (user) {
          console.log(user);
          this.currentUserName = user.userName;
          sessionStorage.setItem("loggedInUser", user.userName);
          sessionStorage.setItem("currentUser", JSON.stringify(user));
        }
        return user;
      }
      ));
  }
  public Logout() {
    this.currentUserName = null;
    sessionStorage.clear();

  }
}
