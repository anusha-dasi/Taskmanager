import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Jwtinterceptor2Service implements HttpInterceptor {

  constructor() { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    var currentUser = { token: "" };
    if (sessionStorage["currentUser"] != null) {
      currentUser = JSON.parse(sessionStorage["currentUser"]);
    }
    req = req.clone({
      setHeaders: {
        Authorization: "Bearer" + currentUser.token
      }
    });
    return next.handle(req).pipe(tap(
      (event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) {
          //do something
        }
      },
      (error: any) => {
        if (error instanceof HttpResponse) {
          console.log(error);
          alert("401 unauthorized");
        }
      }
    ))

  }
}
