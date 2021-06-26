import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  configUrl = 'https://kedar-demo-app.herokuapp.com/api/v1/tours'

  constructor(public http: HttpClient) { }

  getData() {
    return this.http.get<any>(this.configUrl);
  }
}
