# Ngrx memory leak error

The project shows that StoreRouterConnectingModule with routing in guards causes memory leak.

## Reproduce

Pull the repo. Run the dev server.

* If you go to `/` it is redirected to `/login` where you can login. After 1s delay (simulating some backend work) you will be on the home page. Everything works.
* If you go to `/home` you will be redirected to `/` by the guard, but the code gets stuck and leaking memory.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.


This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.1.1.