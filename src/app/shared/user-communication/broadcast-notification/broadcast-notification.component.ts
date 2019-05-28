import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-broadcast-notification',
  templateUrl: './broadcast-notification.component.html',
  styleUrls: ['./broadcast-notification.component.css']
})
export class BroadcastNotificationComponent implements OnInit {
  broadcastNotificationForm: FormGroup;
  show = false;
  submitted = false;
  data: any = [{
    rowid: '1',
    datetime: '07/05/2019',
    companyemail: 'testNotification@gmail.com',
    title: 'test',
    message: 'Notification',

  },

    {
      rowid: '1',
      datetime: '08/05/2019',
      companyemail: 'testdata@gmail.com',
      title: 'test',
      message: 'SendNotification',

    }];
  filterData;
  constructor(private formBuilder: FormBuilder) {
    this.filterData = this.data;
  }

  ngOnInit() {
    this.broadcastNotificationForm = this.formBuilder.group ({
      companyemail : ['', [Validators.required]],
      title : ['', [Validators .required]],
      message : ['', [Validators.required]],

    });

  }
  onSubmit() {
    this.show = true;
    this.submitted = true;
    if (this.broadcastNotificationForm.invalid) {
      return;
    }
    console.log(this.broadcastNotificationForm.value);
  }

  filterByTitle(value) {
    this.filterData = this.data.filter((moredata) => {
      return moredata.title.toLowerCase().indexOf(value.toLowerCase()) > -1;
    });
  }

}
