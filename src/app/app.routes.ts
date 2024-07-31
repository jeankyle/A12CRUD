import { Routes } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {ForgotComponent} from './forgot/forgot.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {ErrorComponent} from "./error/error.component";

export const routes: Routes = [
  { path: 'login', redirectTo: 'login', pathMatch: 'full' },
  { path: '', component: LoginComponent },
  { path: 'forgot', component: ForgotComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: '**', component: ErrorComponent },
];
