import { LoginService } from './../login.service';
import { LoginView } from './../login-view';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginView:LoginView= new LoginView();
  loginError:string= "";

  constructor(private loginService:LoginService,private router:Router) { }

  ngOnInit() {
  }
  onloginClick(event:any)
  {
    this.loginService.Login(this.loginView).subscribe(
      (response)=>{
        this.router.navigateByUrl("/dashboard");
      },
      (error)=>{
        console.log();
        this.loginError="Invalid Username or Password";        
      },
    )
  }

}
