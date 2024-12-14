import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Register } from '../../models/register/Register';
import { USER_CREATE_ROUTE } from '../../utilities/domains/urls';

@Injectable({
  providedIn: 'root',
})
export class RegisterService {
  public registerUrl = USER_CREATE_ROUTE;

  constructor(private http: HttpClient) {}

  public createUser(user: Register): Observable<any> {
    return this.http.post<any>(this.registerUrl, user);
  }
}
