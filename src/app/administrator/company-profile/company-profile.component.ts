import { Component, OnInit } from '@angular/core';
import { FormGroup} from '@angular/forms';
import { ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-company-profile',
  templateUrl: './company-profile.component.html',
  styleUrls: ['./company-profile.component.css']
})
export class CompanyProfileComponent implements OnInit {

  getdata = [{
    user: 'deepika',
    email: 'deepika@gmail.com'

  },
    {
      user: 'Chhavi',
      email: 'Chhavi@gmail.com'

    }
  ];

  getwellbeingdata = [{

    date: 'Oct 26, 2018',
    user: 'deepika',
    object: 'light',
    room: 'room'

  },
    {
      date: 'Oct 26, 2018',
      user: 'chhavi',
      object: 'AC',
      room: 'room'
    }
  ];

  getsystemEventdata = [{

    date: 'Oct 26, 2018',
    user: 'deepika',
    object: 'light',
    room: 'room'

  },
    {
      date: 'Oct 26, 2018',
      user: 'chhavi',
      object: 'AC',
      room: 'room'
    }
  ];

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {

  }
  goToCompany() {
    this.router.navigate(['administrator/companyUserSystemEvent']);
  }


  goToUserWellbeing() {
    this.router.navigate(['administrator/companyUserWellbeing']);
  }

}
