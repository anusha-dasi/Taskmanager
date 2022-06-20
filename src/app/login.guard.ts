import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {

  constructor(private router: Router) {

  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    // If user is not logged in and tried to access other routes - then we need
    //navigate back to login screen.

    console.log(route);
    console.log(state);
    console.log(route.data);
    let isAuthorized = false;
    if (sessionStorage.getItem("loggedInUser") != null) {
      let currentUser = { role: "" };
      if (sessionStorage.getItem("currentUser") != null) {
        currentUser = JSON.parse(sessionStorage.getItem("currentUser") || '{}');
        if (route.data["expectedRole"] === currentUser.role) {
          isAuthorized = true;
        }
        else {
          isAuthorized = false;
          alert("You are not authorized to this screen...");
        }
      }
    }
    else {
      isAuthorized = false;
      alert("Please login first..");
      this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
      //  this.router.navigateByUrl("/login", { queryParams: { returnUrl: state.url } });
    }







    return isAuthorized;

  }

}
