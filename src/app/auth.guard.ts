import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { LoginState } from 'app/store';

interface AppState {
  login: LoginState
}

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private store: Store<AppState>, private router: Router) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.store.select(s => s.login.isLoggedIn).map(v => {
      if (v) {
        return true;
      }
      this.router.navigateByUrl('/login');
      return false;
    });
  }
}
