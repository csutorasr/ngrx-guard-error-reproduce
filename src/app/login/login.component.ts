import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { LoginState, LoginAction } from 'app/store';

interface AppState {
  login: LoginState
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
  }

  login() {
    this.store.dispatch(new LoginAction());
  }

}
