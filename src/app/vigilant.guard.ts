import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { SecurityService } from './service/guard/security.service';

export const vigilantGuard: CanActivateFn = async (route, state) => {
  const router = inject(Router);
  const security = inject(SecurityService);

  const validateToken = await security.validToken();

  if (validateToken) {
    return true;
  } else {
    router.navigate(['/login']);
  }
  return false;
};
