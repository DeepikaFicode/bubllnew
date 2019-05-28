import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute  } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-create-company',
  templateUrl: './create-company.component.html',
  styleUrls: ['./create-company.component.css']
})
export class CreateCompanyComponent implements OnInit {
  companyForm: FormGroup;
  show = false;
  submitted = false;

  data: any = [{
    rowid: '1',
    companyid: 'coo23',
    companyname: 'test',
    email: 'test@gmail.com',
    validFrom: '07/05/2019',
    validTo: '31/05/2019',
    address: 'mohali',
    supportRequired: 'Yes',
    controllerLimit: '2',
    status: 'Active',

  },
    {
      rowid: '1',
      companyid: 'coo23',
      companyname: 'test',
      email: 'test@gmail.com',
      validFrom: '07/05/2019',
      validTo: '31/05/2019',
      address: 'mohali',
      supportRequired: 'Yes',
      controllerLimit: '2',
      status: 'Active',
    },
    {
      rowid: '1',
      companyid: 'coo23',
      companyname: 'test',
      email: 'test@gmail.com',
      validFrom: '07/05/2019',
      validTo: '31/05/2019',
      address: 'mohali',
      supportRequired: 'Yes',
      controllerLimit: '2',
      status: 'Active',
    }];
  constructor(private formBuilder: FormBuilder,
              private route: ActivatedRoute,
              private router: Router
              // private excelService: ExcelService
             ) { }

  // exportAsXLSX(): void {
  //   this.excelService.exportAsExcelFile(this.data, 'sample');
  // }

  ngOnInit() {
    this.companyForm = this.formBuilder.group ({
      name : ['', [Validators.required]],
      email : ['', [Validators .required]],
      phone : ['', [Validators.required]],
      contactPerson : ['', [Validators.required]],
      town : ['', [Validators.required]],
      country : ['', [Validators.required]],
      addressLine1 : ['', [Validators.required]],
      addressLine2: ['', [Validators.required]],
      postcode: ['', [Validators.required]],
      numberOfLicense: ['', [Validators.required]],
      validForm: ['', [Validators.required]],
      validTo: ['', [Validators.required]],
      status: ['', [Validators.required]],
      support: ['', [Validators.required]],
      controllerChangeLimit: ['', [Validators.required]],
      updateBackground: ['', [Validators.required]]
    });
  }
  onSubmit() {
    this.show = true;
    this.submitted = true;
    if (this.companyForm.invalid) {
      return;
    }
    console.log(this.companyForm.value);
  }

}
