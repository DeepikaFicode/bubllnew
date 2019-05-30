import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute  } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormArray, FormControl } from '@angular/forms';
import { ExcelService} from '../../shared/excelservice/excel.service';
import {ModalService} from '../../shared/modal/modal.service';
import {CompanyService} from '../../__service/administratorService/company.service';
import {SettingsService} from '../../service/administratorService/settings.service';

@Component({
  selector: 'app-create-company',
  templateUrl: './create-company.component.html',
  styleUrls: ['./create-company.component.css']
})

export class CreateCompanyComponent implements OnInit {
  fromdate: Date;
  todate: Date;
  show = false;
  submitted = false;
  authType: String = '';
  companyForm: FormGroup;


  defaultModalContent = {
    header: 'Hello',
    body: 'Are you sure you want to continue?',
    cancelButtonText: 'Cancel',
    OKButtonText: 'OK',
    cancelButtonVisible: true
  };

  language = [
    { id: 100, name: 'Chinese (Simplified)' },
    { id: 200, name: 'English ' },
    { id: 300, name: 'French ' },
    { id: 400, name: 'German ' },
    { id: 500, name: 'Russian ' }
  ];
  private cd: any;
  constructor(private formBuilder: FormBuilder,
              private route: ActivatedRoute,
              private router: Router,
              private excelService: ExcelService,
              private modalService: ModalService,
              private compayService: CompanyService,

             ) {
    // use FormBuilder to create a form group

  }

  exportAsXLSX(): void {
    // @ts-ignore
    this.excelService.exportAsExcelFile( 'sample');
  }

  ngOnInit() {
    this.companyForm = this.formBuilder.group({
      companyId: ['', Validators.required],
      name: ['', Validators.required],
      email: ['', Validators.required],
      phone: ['', Validators.required],
      contactPerson: ['', Validators.required],
      allocatedLicencesPerSite: ['', Validators.required],
      companyLicenseValidFrom: ['', Validators.required],
      companyLicenseValidTo: ['', Validators.required],
      status: ['', Validators.required],
      logoImg: ['', Validators.required],
      isSupport: ['', Validators.required],
      controllerChangeLimit: ['', Validators.required],
      address: ['', Validators.required],
      address2: ['', Validators.required],
      town: ['', Validators.required],
      county: ['', Validators.required],
      postalCode: ['', Validators.required],

    });
    //this.addCheckboxes();

  }
  onSubmit() {
    this.show = true;
    this.submitted = true;
    if (this.companyForm.valid) {
      return;
    }
    console.log ('Form Submitted!', this.companyForm.value);

    console.log(this.companyForm.value);
  }

  private addCheckboxes() {
    this.language.map((o, i) => {
      const control = new FormControl(i === -1); // if first item set to true, else false
      (this.companyForm.controls.language as FormArray).push(control);
    });
  }

  onFileChange(event) {
    const reader = new FileReader();

    if (event.target.files && event.target.files.length) {
      const [file] = event.target.files;
      reader.readAsDataURL(file);

      reader.onload = () => {
        this.companyForm.patchValue({
          file: reader.result
        });
        console.log( reader.result);
        // need to run CD since file load runs outside of zone
        this.cd.markForCheck();
      };
    }
  }

  loadModal($event) {
    this.modalService.show(this.defaultModalContent);
  }
}
