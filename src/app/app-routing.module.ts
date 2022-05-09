import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './Component/dashboard/dashboard.component';
import { FormComponent } from './Component/form/form.component';
import { LoginComponent } from './Component/login/login.component';

const routes: Routes = [
  {path:'',component: FormComponent},
  {path:'login',component: LoginComponent},
  {path:'dashboard',component: DashboardComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
