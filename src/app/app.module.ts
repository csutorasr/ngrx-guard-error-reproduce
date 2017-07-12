import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { StoreRouterConnectingModule, routerReducer } from '@ngrx/router-store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AppRoutingModule } from 'app/app-routing.module';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { loginReducer } from 'app/store';
import { EffectsModule } from '@ngrx/effects';
import { LoginEffects } from 'app/store/login.effects';
import { AuthGuard } from 'app/auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({ routerReducer: routerReducer, login: loginReducer}),
    AppRoutingModule,
    StoreRouterConnectingModule,
    EffectsModule.forRoot([LoginEffects])
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
