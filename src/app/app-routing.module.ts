import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from 'app/app.component';
import { HomeComponent } from 'app/home/home.component';
import { LoginComponent } from 'app/login/login.component';
import { AuthGuard } from 'app/auth.guard';

/**
 * Main module routing
 *
 * Link to about module with lazy-loading, and instead to home component
 */
@NgModule({
  imports: [
    RouterModule.forRoot([
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'login'
      },
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'home',
        component: HomeComponent,
        canActivate: [AuthGuard]
      }
    ])
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
