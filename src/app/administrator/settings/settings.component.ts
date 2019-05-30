import { Component, OnInit, Input } from '@angular/core';

import { SettingsService } from '../../service/administratorService/settings.service';
import { HelperserviceService } from '../../service/helperservice.service';
import { ISettingsEmail, IPagedResults } from '../../shared/interfaces';
@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class SettingsComponent implements OnInit {

  emails: ISettingsEmail[] = [];
  filteredEmails: ISettingsEmail[] = [];
  totalRecords = 0;
  pageSize = 5;
  fromPage = 0;
  toPage = 0;
  devices = [5, 10, 15, 20, 25];
  // @Input() emails: ISettingsEmail[] = [];
  constructor(
    private helperService: HelperserviceService,
    private settingsService: SettingsService
  ) { }

  ngOnInit() {
    this.getSettingsEmails(1, this.pageSize);
  }

  getSettingsEmails(page: number, pageSize: number) {
    this.settingsService.getSettingsEmails((page > 1) ? (page) : 1, pageSize)
      .subscribe((response: IPagedResults<ISettingsEmail[]>) => {
        // console.log( response );
        this.emails = this.filteredEmails = response.results;
        this.totalRecords = response.totalRecords;
        this.toPage = this.filteredEmails[this.filteredEmails.length - 1].id;
        this.fromPage = this.filteredEmails[0].id;
      },
        (err: any) => console.log(err));
    // () => this.logger.log('getCustomersPage() retrieved customers for page: ' + page));
  }

  sort(prop: string) {
    this.helperService.sort(this.filteredEmails, prop);
  }

  filterChanged(data: string) {
    if (data && this.emails) {
      data = data.toUpperCase();
      const props = ['email'];
      this.filteredEmails = this.helperService.filter<ISettingsEmail>(this.emails, data, props);
    } else {
      this.filteredEmails = this.emails;
    }
  }

  pageChanged(page: number) {
    this.getSettingsEmails(page, this.pageSize);
  }

  onChange(deviceValue) {

    this.getSettingsEmails(1, deviceValue);
    this.pageSize = deviceValue;
  }

}
