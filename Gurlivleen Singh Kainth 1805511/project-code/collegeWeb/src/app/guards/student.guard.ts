import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { STUDENT_LOGIN } from '../utils';

@Injectable({
  providedIn: 'root'
})
export class StudentGuard implements CanActivate {

  constructor(
    private router: Router
  ){ }

  canActivate( ): boolean {
    if(JSON.parse(localStorage.getItem('loginType')) != STUDENT_LOGIN) {

      this.router.navigate(['login']);
      return false;
    }

    return true;
  }

}
