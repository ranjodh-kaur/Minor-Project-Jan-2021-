import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { STAFF_LOGIN } from '../utils';

@Injectable({
  providedIn: 'root'
})
export class StaffGuard implements CanActivate {

  constructor(
    private router: Router
  ){ }

  canActivate(): boolean {
    if(JSON.parse(localStorage.getItem('loginType')) != STAFF_LOGIN) {

      this.router.navigate(['login']);
      return false;
    }

    return true;
  }

}
