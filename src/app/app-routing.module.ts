import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './core/layout/landing/landing.component';
import { DashboardComponent } from './core/layout/dashboard/dashboard.component';
// const routes: Routes = [];
const routes: Routes = [
  {
    path: '',
    component: LandingComponent
  },
  {
    path: 'administrator',
    redirectTo: '/administrator/dashboard',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
