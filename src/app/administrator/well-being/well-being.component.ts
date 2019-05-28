import { Component, OnInit } from '@angular/core';
import {FormGroup} from '@angular/forms';
import {NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {NgForm } from '@angular/forms';
import {NavigateUrls} from '../../shared/navigate-urls';
@Component({
  selector: 'app-well-being',
  templateUrl: './well-being.component.html',
  styleUrls: ['./well-being.component.css']
})
export class WellBeingComponent implements OnInit {
  fromdate: Date;
  todate: Date;

  wellBeing = [{
    row: '1',
    userName: 'deepika',
    deviceName: 'tab',
    dateTime: '31/05/2019',
    latitude: '30.6759',
    longitude: '30.6759',
    address: 'Address not found',
    option: 'Too Cold',
    Comment: 'Awesome',
    roomName: 'bedroom1',

  },
    {
      row: '1',
      userName: 'nitin',
      deviceName: 'tab',
      dateTime: '31/05/2019',
      latitude: '30.6759',
      longitude: '30.6759',
      address: 'Address not found',
      option: 'Too Hot',
      Comment: 'Awesome',
      roomName: 'livingRoom',
    }
  ];
  filterData;

  constructor() {
    this.filterData = this.wellBeing;
  }

  ngOnInit() {
  }
  filterById(value) {
    this.filterData = this.wellBeing.filter((moredata) => {
      return moredata.dateTime.toLowerCase().indexOf(value.toLowerCase()) > -1;
    });

  }
  filterByName(value) {
    this.filterData = this.wellBeing.filter((moredata) => {
      return moredata.dateTime.toLowerCase().indexOf(value.toLowerCase()) > -1;
    });
  }
  searchWellBeing() {
    this.filterByDates(this.fromdate, this .todate);
  }
  filterByDates(fromDate, Todate) {
    const date1 = new Date(fromDate);
    const date2 = new Date(Todate);

    if (date1.getTime() > date2.getTime()) {
      alert('The first date is after the second date!');
    } else {

      this.filterData = this.wellBeing.filter((moredata) => {

        const arrayDate = this.convertDate(moredata.dateTime);

        if ((arrayDate.getTime() > date1.getTime()) && (arrayDate.getTime() < date2.getTime())) {
          return moredata;
        }
      });
    }
  }
    convertDate(dateToConvert) {
      const pattern = /(\d{2})\/(\d{2})\/(\d{4})/;
      const dt = new Date(dateToConvert.replace(pattern, '$3-$2-$1'));
      return dt;
    }
}
