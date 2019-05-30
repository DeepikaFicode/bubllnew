import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { ISettingsEmail, IPagedResults, ISettingsEmails } from '../../shared/interfaces';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  emailBaseUrl = 'https://reqres.in/api/users';
  constructor(private http: HttpClient) { }

  getSettingsEmails(page: number, pageSize: number): Observable<IPagedResults<ISettingsEmail[]>> {
    return this.http.get<ISettingsEmail[]>(
      `${this.emailBaseUrl}?page=${page}&per_page=${pageSize}`,
      { observe: 'response' })
      .pipe(
        map(res => {
          const totalRecords = +res.headers.get('X-InlineCount');
          const customers = res.body as ISettingsEmail[];
          return {
            results: customers,
            totalRecords: 0
          };
        }),
        catchError(this.handleError)
      );
  }

  private handleError(error: HttpErrorResponse) {
    console.error('server error:', error);
    if (error.error instanceof Error) {
      const errMessage = error.error.message;
      return Observable.throw(errMessage);
      // Use the following instead if using lite-server
      // return Observable.throw(err.text() || 'backend server error');
    }
    return Observable.throw(error || 'Node.js server error');
  }
}
