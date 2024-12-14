import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { TokenInfo } from '../../models/login/TokenInfo';
import { TOKEN_BACKEND } from '../../utilities/domains/mySession';
import { jwtDecode } from 'jwt-decode';

@Injectable({
  providedIn: 'root',
})
export class SecurityService {
  public tokenInfoObj: TokenInfo;

  constructor(private http: HttpClient, private router: Router) {
    this.tokenInfoObj = new TokenInfo('', '', '', '', '');
  }

  public async validToken(): Promise<boolean> {
    const localToken = localStorage.getItem(TOKEN_BACKEND);

    if (localToken) {
      try {
        const valid: TokenInfo = jwtDecode(localToken);

        this.tokenInfoObj = {
          ...valid,
        };

        return true;
      } catch (error) {
        console.log(`Error: ${error}`);

        return false;
      }
    }

    return false;
  }

  public showTokenInfo(): TokenInfo {
    return this.tokenInfoObj;
  }

  public logout(): void {
    localStorage.removeItem(TOKEN_BACKEND);
    this.router.navigate(['/login']);
  }
}
