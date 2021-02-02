import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class EnrollmentService {

  _url= 'http://127.0.0.1:5000/';
  constructor(private _http: HttpClient) { }

  enroll(user: User ){
    return this._http.post<any>(this._url+'postData', user);
  }

  getEnrolledUsers() {
    return this._http.get<any>(this._url+'postData');
  }


}
