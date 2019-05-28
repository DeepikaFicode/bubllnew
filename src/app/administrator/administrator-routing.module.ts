import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from '../core/layout/dashboard/dashboard.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { LanguageAdminComponent } from './language-admin/language-admin.component';
import { SettingsComponent } from './settings/settings.component';
import {CreateCompanyComponent} from './create-company/create-company.component';
import {SystemEventComponent} from './system-event/system-event.component';
import {WellBeingComponent} from './well-being/well-being.component';
import { BroadcastNotificationComponent } from '../shared/user-communication/broadcast-notification/broadcast-notification.component';
import { ManualDocumentsComponent} from '../shared/user-communication/manual-documents/manual-documents.component';
import { SendManualComponent} from '../shared/user-communication/send-manual/send-manual.component';

const routes: Routes = [
  {
    path: 'administrator',
    component: DashboardComponent,
    children: [
      { path: 'dashboard', component: AdminDashboardComponent },
      { path: 'LanguageMaster', component: LanguageAdminComponent },
      { path: 'masterSetting', component: SettingsComponent },
      { path: 'createCompany', component: CreateCompanyComponent },
      { path: 'companyUserSystemEvent', component: SystemEventComponent },
      { path: 'companyUserWellbeing', component: WellBeingComponent },
      { path: 'broadcastNotification', component: BroadcastNotificationComponent },
      { path: 'manualDocuments', component: ManualDocumentsComponent },
      { path: 'sendManual', component: SendManualComponent }
    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministratorRoutingModule { }
