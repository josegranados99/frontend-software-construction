export class Login {
  public accessEmail: string;
  public accessPassword: string;

  constructor(email: string, pass: string) {
    this.accessEmail = email;
    this.accessPassword = pass;
  }
}
