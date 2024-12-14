import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductType } from '../../../../models/product-type/ProductType';
import { catchError, map, Subscription } from 'rxjs';
import { ProductTypeService } from '../../../../service/api/product-type.service';
import { observerAny } from '../../../../utilities/observers/anyType';

@Component({
  selector: 'app-list-type',
  imports: [CommonModule],
  templateUrl: './list-type.component.html',
  styleUrl: './list-type.component.css',
})
export class ListTypeComponent implements OnInit, OnDestroy {
  public tmp: any;
  public arrayProductTp: ProductType[];
  public subs: Subscription;

  constructor(private ptService: ProductTypeService) {
    this.arrayProductTp = [];
    this.subs = this.tmp;
  }
  ngOnInit(): void {
    this.getAll();
  }
  ngOnDestroy(): void {
    if (this.subs) {
      this.subs.unsubscribe();
    }
  }

  public getAll(): void {
    this.subs = this.ptService
      .list()
      .pipe(
        map((res: ProductType[]) => {
          this.arrayProductTp = res;
        }),
        catchError((myError) => {
          console.log(`Error: ${JSON.stringify(myError)}`);
          throw myError;
        })
      )
      .subscribe(observerAny);
  }
}
