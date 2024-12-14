import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PRODUCT_TYPE_CREATE_ROUTE, PRODUCT_TYPE_LIST_ROUTE } from '../../utilities/domains/urls';
import { ProductType } from '../../models/product-type/ProductType';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductTypeService {
  public createUrl: string = PRODUCT_TYPE_CREATE_ROUTE;
  public listUrl: string = PRODUCT_TYPE_LIST_ROUTE;
  constructor(private http: HttpClient) {}

  public create(typeObj: ProductType): Observable<any> {
    return this.http.post<any>(this.createUrl, typeObj);
  }

  public list(): Observable<any> {
    return this.http.get<any>(this.listUrl);
  }
}
