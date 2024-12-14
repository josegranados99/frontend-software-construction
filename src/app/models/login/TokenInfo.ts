export class TokenInfo {
  public userCode: string;
  public userName: string;
  public userLastname: string;
  public accessEmail: string;
  public accessUUID: string;

  constructor(
    code: string,
    name: string,
    lastname: string,
    email: string,
    uuid: string
  ) {
    this.userCode = code;
    this.userName = name;
    this.userLastname = lastname;
    this.accessEmail = email;
    this.accessUUID = uuid;
  }
}
