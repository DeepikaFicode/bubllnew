import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {
  adminForm: FormGroup;
  emailvalue: any;
  username: string;
  companyForm: FormGroup;
  contsaa = [];
  Customvar = [{
    companyId: 'coo23',
    companyName: 'test',
    email: 'test@gmail.com',
    noOfLIcensedSite: '20',
    validFrom: '07/05/2019',
    validTo: '31/05/2019',

  },
    {
      companyId: 'coo24',
      companyName: 'testCompany',
      email: 'deepika@gmail.com',
      noOfLIcensedSite: '20',
      validFrom: '07/05/2019',
      validTo: '31/05/2019',
    }
  ];
  filterData;
  constructor(private route: ActivatedRoute,  private router: Router, private formBuilder: FormBuilder, ) {
    this.filterData = this.Customvar;
  }

  ngOnInit() {
    this.companyForm = this.formBuilder.group ({
      companyId : ['', []],
      companyName : ['', []],
      email : ['', []]
    });
  }
  filterById(value) {
    this.filterData = this.Customvar.filter((moredata) => {
      return moredata.companyId.toLowerCase().indexOf(value.toLowerCase()) > -1;
    });
  }
  filterByName(value) {
    this.filterData = this.Customvar.filter((moredata) => {
      return moredata.companyName.toLowerCase().indexOf(value.toLowerCase()) > -1;
    });
  }
  filterByEmail(value) {
    this.filterData = this.Customvar.filter((moredata) => {
      return moredata.email.toLowerCase().indexOf(value.toLowerCase()) > -1;
    });
  }



  goToProfile() {
    this.router.navigate(['administrator/companyProfile']);
  }

  goToCompany() {
    this.router.navigate(['administrator/create']);
  }


  onSubmit() {
    if ( this.companyForm.value.companyId != '' ) {
      this.filterById(this.companyForm.value.companyId);
    }
    //
    // if( this.companyForm.value.companyName != '' ){
    //   this.filterByName(this.companyForm.value.companyName);
    // }
    //
    // if( this.companyForm.value.email != '' ){
    //   this.filterByEmail(this.companyForm.value.email);
    // }

  }

  onRefresh() {
    // this.companyForm.value.companyId = null;
    this.filterById = null;
    // this.filterByName = null;
    // this.filterByEmail = null;
  }

}
