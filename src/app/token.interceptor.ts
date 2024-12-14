import { HttpInterceptorFn } from '@angular/common/http';
import { TOKEN_BACKEND } from './utilities/domains/mySession';

export const tokenInterceptor: HttpInterceptorFn = (req, next) => {
  const myToken = localStorage.getItem(TOKEN_BACKEND) as string;
  const newReq = req.clone({ setHeaders: { Authorization: 'bearer ' + myToken } });
  return next(newReq);
};
