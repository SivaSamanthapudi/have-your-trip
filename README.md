# Shell

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.2.16.

# Commands for Initial Setup:

`npm install -g @angular/cli@16`
`npm install --save-dev @angular-architects/module-federation@16`
`npm install --save-dev json5`
`npm install --save-dev @schematics/angular`
`npm install @angular-devkit/schematics`
`npm install @angular-devkit/core @angular-devkit/schematics-cli`
`npm install --save-dev webpack@5.88.2 webpack-cli@5.1.4`
`npm install concurrently --save-dev`

# Step 1:Create the Shell Application & Enable Module Federation for the shell:

`ng new shell --routing --style=scss`
`cd shell`
`ng add @angular-architects/module-federation@16 --project shell --type host`

# Step 2: Create the Remote Micro Frontend (e.g., flights-app)

Navigate to root directory and execute below: cd ../
`ng generate application flights-app --routing --style=scss`
`ng add @angular-architects/module-federation@16 --project flights-app --type remote --port 4201`

# Step 3: Create the Remote Micro Frontend (e.g., trains-app)

Navigate to root directory and execute below: cd ../
`ng generate application trains-app --routing --style=scss`
`ng add @angular-architects/module-federation@16 --project trains-app --type remote --port 4202`


## Development server
Run `ng serve flights-app -o port --4201` or `npm run start:flights-app` for a dev server. Navigate to `http://localhost:4201/`. The application will automatically reload if you change any of the source files.
Run `ng serve trains-app -o port --4202` or `npm run start:trains-app` for a dev server. Navigate to `http://localhost:4201/`. The application will automatically reload if you change any of the source files.
Run `ng serve shell -o port --4200` or `npm run start:shell` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

To Run all mfe applications and shell application with one command you can Run  `npm run:start:all` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
