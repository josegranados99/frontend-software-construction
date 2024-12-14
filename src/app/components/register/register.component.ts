import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm, FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import sha512 from 'jssha';
import { jwtDecode } from 'jwt-decode';
import { ToastrService } from 'ngx-toastr';
import { RegisterService } from '../../service/api/register.service';
import { TokenInfo } from '../../models/login/TokenInfo';
import { Register } from '../../models/register/Register';
import {
  TOKEN_BACKEND,
  UNIQUE_SESSION,
} from '../../utilities/domains/mySession';
import { catchError, map, Subscription } from 'rxjs';
import { observerAny } from '../../utilities/observers/anyType';
import { msgAny } from '../../utilities/message/msgToastr';

@Component({
  selector: 'app-register',
  imports: [FormsModule, RouterModule, CommonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent implements OnInit, OnDestroy {
  public register: Register;
  public passSha512: sha512;
  public tmp: any;
  public subsCreateUser: Subscription;

  constructor(
    private registerService: RegisterService,
    private router: Router,
    private msgToast: ToastrService
  ) {
    this.register = new Register('', '', '', '');
    this.passSha512 = this.tmp;
    this.subsCreateUser = this.tmp;
  }
  ngOnInit(): void {
    //throw new Error('Method not implemented.');
  }
  ngOnDestroy(): void {
    if (this.subsCreateUser) {
      this.subsCreateUser.unsubscribe();
    }
  }

  public sendForm(myForm: NgForm): void {
    this.passSha512 = new sha512('SHA-512', 'TEXT', { encoding: 'UTF8' });
    const pass = this.register.accessPassword;
    const name = this.register.userName;
    const lastname = this.register.userLastname;
    const email = this.register.accessEmail;
    const passEncrypt = this.passSha512.update(pass).getHash('HEX');
    const payload = new Register(name, lastname, email, passEncrypt);

    delete payload.confirmPassword;

    this.subsCreateUser = this.registerService
      .createUser(payload)
      .pipe(
        map((res: any) => {
          console.log(`Response backend: ${JSON.stringify(res)}`);
        }),
        catchError((myError) => {
          console.log(`Error: ${JSON.stringify(myError)}`);
          msgAny('error', 'Error creating user', 'Error', this.msgToast);
          throw myError;
        })
      )
      .subscribe(observerAny);
    // console.log('Hiciste click enviar formulario: ', payload);
  }
}
