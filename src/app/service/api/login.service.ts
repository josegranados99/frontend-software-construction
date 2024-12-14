import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {LOGIN_ROUTE} from '../../utilities/domains/urls';
import { Login } from '../../models/login/Login';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  public loginrUrl = LOGIN_ROUTE;

  constructor(private http: HttpClient) {}

  public login(credentials: Login): Observable<any> {
    return this.http.post<any>(this.loginrUrl, credentials);
  }
}
