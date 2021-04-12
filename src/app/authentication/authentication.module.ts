import { SharedModule } from './../shared/shared.module';
import { ForgotComponent } from './forgot/forgot.component';
import { AuthenticationRoutingModule } from './authentication-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';




@NgModule({
  declarations: [
    ForgotComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    AuthenticationRoutingModule,
    SharedModule,
    ButtonModule,
    InputTextModule
  ]
})
export class AuthenticationModule { }
