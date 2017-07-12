import { Action } from '@ngrx/store';

export const LOGIN = '[login] LOGIN';
export const LOGIN_SUCCESS = '[login] LOGIN_SUCCESS';
export const LOGOUT = '[login] LOGOUT';

export class LoginAction implements Action {
    type = LOGIN;
}
export class LoginSuccessAction implements Action {
    type = LOGIN_SUCCESS;
}
export class LogoutAction implements Action {
    type = LOGOUT;
}
