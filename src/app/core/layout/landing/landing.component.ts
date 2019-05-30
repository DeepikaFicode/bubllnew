import { Component, OnInit, Injectable } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { UserService } from '../../../service/user.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {
  authType: String = '';
  title: String = '';
  isSubmitting = false;
  authForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService,
    private fb: FormBuilder
  ) {
    // use FormBuilder to create a form group
    this.authForm = this.fb.group({
      'userId': ['', Validators.required],
      'password': ['', Validators.required]
    });
  }

  ngOnInit() {
  }

  submitForm() {
    this.isSubmitting = true;

    const credentials = this.authForm.value;
    this.userService
      .attemptAuth(credentials)
      .subscribe(
        data => this.router.navigateByUrl('/administrator'),
        //data => console.log(data),
        err => {
         console.log(err);
          this.isSubmitting = false;
        }
      );
  }
}
