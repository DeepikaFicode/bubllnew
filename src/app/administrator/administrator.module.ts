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
import { CompanyProfileComponent} from './company-profile/company-profile.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MasterLicenseDetailsComponent } from './viewImeiNo/master-license-details/master-license-details.component';
import { RemoteLicenseDetailsComponent } from './viewImeiNo/remote-license-details/remote-license-details.component';
import { ExcelService} from '../shared/excelservice/excel.service';
import { ModalService} from '../shared/modal/modal.service';

@NgModule({
  declarations: [AdminDashboardComponent,
    LanguageAdminComponent,
    SettingsComponent,
    CreateCompanyComponent,
    SystemEventComponent,
    WellBeingComponent,
    CompanyProfileComponent,
    MasterLicenseDetailsComponent,
    RemoteLicenseDetailsComponent
    ],
  imports: [
    CommonModule,
    AdministratorRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ExcelService],
})
export class AdministratorModule { }
