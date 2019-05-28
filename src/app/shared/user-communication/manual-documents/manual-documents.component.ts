import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-manual-documents',
  templateUrl: './manual-documents.component.html',
  styleUrls: ['./manual-documents.component.css']
})
export class ManualDocumentsComponent implements OnInit {
  manualDocumentForm: FormGroup;
  show = false;
  submitted = false;

  data: any = [{
    rowid: '1',
    doctitle: 'DocTestTitle',
    fuDocument: '',
  },
    {
      rowid: '1',
      doctitle: 'DocTestTitle',
      fuDocument: '',

    }];
  filterData;

  constructor(private formBuilder: FormBuilder) {

    this.filterData = this.data;
  }

  ngOnInit() {

  this.manualDocumentForm = this.formBuilder.group ({
    doctitle : ['', [Validators.required]],
    fuDocument : ['', [Validators .required]],

  });
  }
  onSubmit() {
    this.show = true;
    this.submitted = true;
    if (this.manualDocumentForm.invalid) {
      return;
    }
    console.log(this.manualDocumentForm.value);
  }

  filterByTitle(value) {
    this.filterData = this.data.filter((moredata) => {
      return moredata.doctitle.toLowerCase().indexOf(value.toLowerCase()) > -1;
    });
  }

  onFileChange(event) {
    console.log(event);
  }
}
