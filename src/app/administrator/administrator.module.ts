import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { AdministratorRoutingModule } from './administrator-routing.module';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { LanguageAdminComponent } from './language-admin/language-admin.component';
import { SettingsComponent } from './settings/settings.component';
import { CreateCompanyComponent } from './create-company/create-company.component';
import { SystemEventComponent } from './system-event/system-event.component';
import { WellBeingComponent } from './well-being/well-being.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [AdminDashboardComponent,
    LanguageAdminComponent,
    SettingsComponent,
    CreateCompanyComponent,
    SystemEventComponent,
    WellBeingComponent
    ],
  imports: [
    CommonModule,
    AdministratorRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
})
export class AdministratorModule { }
