export class Register {
  public userName: string;
  public userLastname: string;
  public accessEmail: string;
  public accessPassword: string;

  public confirmPassword?: string = '';

  constructor(name: string, lastname: string, email: string, pass: string) {
    this.userName = name;
    this.userLastname = lastname;
    this.accessEmail = email;
    this.accessPassword = pass;
  }
}
