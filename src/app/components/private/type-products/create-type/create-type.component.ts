import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm, FormsModule } from '@angular/forms';
import { catchError, map, Subscription, throwError } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { ProductType } from '../../../../models/product-type/ProductType';
import { ProductTypeService } from '../../../../service/api/product-type.service';
import { CommonModule } from '@angular/common';
import { observerAny } from '../../../../utilities/observers/anyType';
import { msgAny } from '../../../../utilities/message/msgToastr';

@Component({
  selector: 'app-create-type',
  imports: [FormsModule, CommonModule],
  templateUrl: './create-type.component.html',
  styleUrl: './create-type.component.css',
})
export class CreateTypeComponent implements OnInit, OnDestroy {
  private tmp: any;
  public productTypeObj: ProductType;
  public subs: Subscription;

  constructor(private productTpService: ProductTypeService, private msgToast: ToastrService) {
    this.productTypeObj = new ProductType(0, '');
    this.subs = this.tmp;
  }
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }
  ngOnDestroy(): void {
    if (this.subs) {
      this.subs.unsubscribe();
    }
  }

  public sendForm(myForm: NgForm): void {
    this.subs = this.productTpService
      .create(this.productTypeObj)
      .pipe(
        map((res: any) => {
          console.log('response', res);
          msgAny('success', 'Product type successfully created', 'Success', this.msgToast);
          myForm.resetForm();
        }),
        catchError((myError: any) => {
          myForm.resetForm();
          msgAny('error', `Fatal error: ${myError.error.response.message}`, 'Error', this.msgToast);
          console.log(`Error ${JSON.stringify(myError)}`);
          throw myError;
        })
      )
      .subscribe(observerAny);
  }
}
