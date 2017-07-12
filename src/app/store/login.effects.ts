import { Injectable, NgZone } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/timer';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import { Action } from '@ngrx/store';
import { Actions, Effect, toPayload } from '@ngrx/effects';
import { Router } from '@angular/router';
import { LOGIN, LoginSuccessAction, LOGIN_SUCCESS } from 'app/store';

@Injectable()
export class LoginEffects {
    @Effect() login$: Observable<Action> = this.actions$.ofType(LOGIN)
        .mergeMap(() => {
            return Observable.timer(1000).map(() => new LoginSuccessAction());
        });
    @Effect({ dispatch: false }) redirectIfLoggedIn$: Observable<Action> = this.actions$.ofType(LOGIN_SUCCESS)
        .do(() => {
            this.router.navigateByUrl('/home');
        });

    constructor(private actions$: Actions, private router: Router) { }
}
