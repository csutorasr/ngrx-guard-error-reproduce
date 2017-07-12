import { Action } from '@ngrx/store';
import { LOGIN, LOGOUT, LOGIN_SUCCESS } from 'app/store';

export class LoginState {
    isLoggedIn = false;
}

export function loginReducer(state: LoginState = new LoginState(), action: Action): LoginState {
    switch (action.type) {
        case LOGIN_SUCCESS:
            return { isLoggedIn: true };
        case LOGOUT:
            return { isLoggedIn: false };
    }
    return { ...state };
}
