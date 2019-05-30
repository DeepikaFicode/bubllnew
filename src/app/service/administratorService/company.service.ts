import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import {ApiService} from '../api.service';
import {JwtService} from '../jwt.service';
import {CreateCompany} from '../../shared/interfaces';
import {BubllConstants} from '../../shared/BubllConstants';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  companyBaseUrl = 'createCompany';
  constructor(
    private apiService: ApiService,
    private http: HttpClient,
    private jwtService: JwtService) {

  }

  companyCreate(formParametrs): Observable<CreateCompany> {
    console.log(formParametrs);
    return this.apiService.put('/createCompany', formParametrs)

      .pipe(map(
        data => {
          console.log(data);
          return data;
        }
      ));
  }

}

