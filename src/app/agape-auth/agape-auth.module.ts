import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import {RouterModule} from "@angular/router";
import {AuthRoutes} from "./agape-auth.routes";
import {FormsModule} from "@angular/forms";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AuthRoutes),
    FormsModule
  ],
  declarations: [LoginComponent, RegisterComponent]
})
export class AgapeAuthModule { }
