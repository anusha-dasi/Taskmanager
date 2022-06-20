import { FormsModule } from '@angular/forms';
import { AdminModule } from './admin/admin.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { Jwtinterceptor2Service } from './jwtinterceptor2.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AdminModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: Jwtinterceptor2Service,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
