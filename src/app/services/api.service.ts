import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import {catchError, retry} from 'rxjs/operators';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  configUrl = 'https://kedar-demo-app.herokuapp.com/api/v1'

  constructor(public http: HttpClient, public toast: ToastrService) { }

  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      this.toast.error('An error occurred:', error.error.message);
    } else {
     this.toast.error(
        `Status : ${error.status}, ` +
        `Response : ${error.error}`);
    }
    return throwError(
      this.toast.error('Something want wrong. please try again later.')
    );
  }

  getData() {
    // return this.http.get<any>(`${this.configUrl}/tours`);
    return this.http
    .get<any>(`${this.configUrl}/tours`)
    .pipe(
      catchError(this.handleError)
    );
  }

  login(data : Object) {
    console.log(data);
    // return this.http.post(`${this.configUrl}/users/login`, data);
    return this.http.
    post(`${this.configUrl}/users/login`, data)
    .pipe(
      catchError(this.handleError)
    );
  }
}
