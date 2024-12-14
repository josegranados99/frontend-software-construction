import { Injectable } from '@angular/core';
import { Register } from '../../models/register/Register';
import * as urls from '../../utilities/domains/urls';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RegisterService {
  public registerUrl = urls.USER_CREATE_ROUTE;

  constructor(private http: HttpClient) {}

  public createUser(user: Register): Observable<any> {
    return this.http.post(this.registerUrl, user);
  }
}
