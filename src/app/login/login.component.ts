import { LoginService } from './../login.service';
import { LoginView } from './../login-view';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginView: LoginView = new LoginView();
  loginError: string = "";

  constructor(private route: ActivatedRoute, private loginService: LoginService, private router: Router) { }

  ngOnInit() {
  }
  onloginClick(event: any) {
    this.loginService.Login(this.loginView).subscribe(
      (response) => {
        let returnUrl = this.route.snapshot.queryParams['returnUrl'];
        if (returnUrl == undefined) {
          this.router.navigateByUrl("/dashboard");
        }
        else {
          this.router.navigateByUrl(returnUrl);
        }
      },
      (error) => {
        console.log();
        this.loginError = "Invalid Username or Password";
      },
    )
  }

}
