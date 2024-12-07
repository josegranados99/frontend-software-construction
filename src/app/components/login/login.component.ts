import { Component } from '@angular/core';
import { NgForm, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import sha512 from 'jssha';
import { Login } from '../../models/login/Login';

@Component({
  selector: 'app-login',
  imports: [FormsModule, RouterModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  private tmp: any;
  public loginObject: Login;
  public passSha512: sha512;
  constructor() {
    this.loginObject = new Login('', '');
    this.passSha512 = this.tmp;
  }

  public sendForm(myForm: NgForm): void {
    this.passSha512 = new sha512('SHA-512', 'TEXT', { encoding: 'UTF8' });
    const pass = this.loginObject.accessPassword;
    const passEncrypt = this.passSha512.update(pass).getHash("HEX");
    console.log(
      `Usuario: ${this.loginObject.accessEmail}, Pass:${passEncrypt}`
    );
  }
}
