export class ProductType {
  public productTypeCode: number;
  public productTypeName: string;
  public amountProduct?: number;

  constructor(code: number, name: string) {
    this.productTypeCode = code;
    this.productTypeName = name;
    this.amountProduct = 0;
  }
}
