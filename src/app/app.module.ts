import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SharedModule } from './shared/shared.module';
import {  HttpClientModule} from '@angular/common/http';
import { CoreModule } from './core/core.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdministratorModule } from './administrator/administrator.module';
import { UserService } from './service/user.service';
import { LanguageService } from './service/administratorService/language.service';
import { ApiService } from './service/api.service';
import { JwtService } from './service/jwt.service';


// import { CompanyProfileComponent } from './administrator/company-profile/company-profile.component';
// import { SupportLoginComponent } from './administrator/support-login/support-login.component';
// import { ExcelService} from './shared/excelservice/excel.service';
@NgModule({
  declarations: [
    AppComponent,
    // CompanyProfileComponent,
    // SupportLoginComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    SharedModule,
    AdministratorModule,
    HttpClientModule


  ],
  providers: [UserService, ApiService, JwtService, LanguageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
