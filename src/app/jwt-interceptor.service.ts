import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JwtInterceptorService implements HttpInterceptor {

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    var currentUser = { token: "" };
    if (sessionStorage['currentUser'] != null) {
      currentUser = JSON.parse(sessionStorage['currentUser']);
    }

    req = req.clone({
      setHeaders: {
        Authorization: "Bearer " + currentUser.token
      }
    }
    );

    return next.handle(req).pipe(tap(

      (event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) {
          //do something with response
        }
      },

      (error: any) => {
        if (error instanceof HttpErrorResponse) {
          if (error.status == 401) {
            console.log(error);
            alert("401 UnAuthorized");
          }
        }
      }

    ));

  }




}
