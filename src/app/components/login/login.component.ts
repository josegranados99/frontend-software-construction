import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm, FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import sha512 from 'jssha';
import { Login } from '../../models/login/Login';
import { catchError, map, Subscription } from 'rxjs';
import { LoginService } from '../../service/api/login.service';
import { observerAny } from '../../utilities/observers/anyType';
import { msgAny } from '../../utilities/message/msgToastr';
import { ToastrService } from 'ngx-toastr';
import { TOKEN_BACKEND } from '../../utilities/domains/mySession';
import { TokenInfo } from '../../models/login/TokenInfo';
import { jwtDecode } from 'jwt-decode';

@Component({
  selector: 'app-login',
  imports: [FormsModule, RouterModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent implements OnInit, OnDestroy {
  private tmp: any;
  public loginObject: Login;
  public passSha512: sha512;
  public subs: Subscription;

  constructor(private loginService: LoginService, private router: Router, private msgToast: ToastrService) {
    this.loginObject = new Login('', '');
    this.passSha512 = this.tmp;
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
    this.passSha512 = new sha512('SHA-512', 'TEXT', { encoding: 'UTF8' });
    const pass = this.loginObject.accessPassword;
    const passEncrypt = this.passSha512.update(pass).getHash('HEX');
    const email = this.loginObject.accessEmail;

    const sendObj = new Login(email, passEncrypt);

    this.subs = this.loginService
      .login(sendObj)
      .pipe(
        map((res: any) => {
          const token = res;
          console.log('Token', token);

          localStorage.setItem(TOKEN_BACKEND, token);
          const tokenLocal = localStorage.getItem(TOKEN_BACKEND) as string;
          const decodeToken: TokenInfo = jwtDecode(tokenLocal);

          this.router.navigate(['/dash/board']);
          msgAny('success', 'Successfully', 'Login', this.msgToast);
        }),
        catchError((myError) => {
          console.log(`Error: ${JSON.stringify(myError)}`);
          msgAny('error', 'Invalid credentials', 'Error', this.msgToast);
          myForm.resetForm();
          throw myError;
        })
      )
      .subscribe(observerAny);
    console.log(`Usuario: ${this.loginObject.accessEmail}, Pass:${passEncrypt}`);
  }
}
