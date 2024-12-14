import { Observer } from 'rxjs';

export const observerAny: Observer<any> = {
  next(res) {
    console.log(`Response: ${res}`);
  },
  error(myError){
    console.log(`Error: ${myError}`);
    
  },
  complete(){}
};
