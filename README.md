# RastmobileTask

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.0.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

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


## Generated

The generated component will be stored in the `app/` directory.
ng g c new-component --module app

Projenin yazılmasında izlenilen adımları 'projehakkinda.txt' dosyasında bulabilirsiniz.

Projeyi yüklemek için lütfen aşağıdaki adımları izleyin.

1-Projeyi yüklemek istediğiniz klasörü açın
2-Terminal'i açın ve 3. kuralı çalıştırın
3-git clone https://github.com/engabdalb/rastmobiletask.git
4-'rastmobiletask' klasörünü açın ve terminali çalıştırın.
5-npm i yazıp sorgusunu çalıştırın.
6-Versiyon uyumsuzluk hatası(aşağıdaki gibi) ile karşılaşacak olursanız. npm i --legacy-peer-deps sorgusu yüklemeyi gerçekleştirecektir.
7- ng serve komutunu çalıştırıp  "* Angular Live Development Server is listening on localhost:4200, open your browser on http://localhost:4200/ **" adresi browsera yapıştırıyoruz.


npm ERR! code ERESOLVE
npm ERR! ERESOLVE could not resolve
npm ERR! 
npm ERR! While resolving: @ng-bootstrap/ng-bootstrap@15.0.1
npm ERR! Found: @angular/compiler@16.0.4
npm ERR! node_modules/@angular/compiler
npm ERR!   @angular/compiler@"^16.0.0" from the root project
npm ERR!   peer @angular/compiler@"16.0.4" from @angular/compiler-cli@16.0.4
npm ERR!   node_modules/@angular/compiler-cli
npm ERR!     dev @angular/compiler-cli@"^16.0.0" from the root project
npm ERR!     peer @angular/compiler-cli@"^16.0.0" from @angular-devkit/build-angular@16.0.5
npm ERR!     node_modules/@angular-devkit/build-angular
npm ERR!       dev @angular-devkit/build-angular@"^16.0.2" from the root project
npm ERR!     1 more (@ngtools/webpack)
npm ERR!   1 more (@angular/platform-browser-dynamic)
npm ERR!
npm ERR! Could not resolve dependency:
npm ERR! peer @angular/localize@"^16.0.0" from @ng-bootstrap/ng-bootstrap@15.0.1
npm ERR! node_modules/@ng-bootstrap/ng-bootstrap
npm ERR!   @ng-bootstrap/ng-bootstrap@"^15.0.1" from the root project
npm ERR! 
npm ERR! Conflicting peer dependency: @angular/compiler@16.0.5
npm ERR! node_modules/@angular/compiler
npm ERR!   peer @angular/compiler@"16.0.5" from @angular/localize@16.0.5
npm ERR!   node_modules/@angular/localize
npm ERR!     peer @angular/localize@"^16.0.0" from @ng-bootstrap/ng-bootstrap@15.0.1
npm ERR!     node_modules/@ng-bootstrap/ng-bootstrap
npm ERR!       @ng-bootstrap/ng-bootstrap@"^15.0.1" from the root project
npm ERR!
npm ERR! Fix the upstream dependency conflict, or retry
npm ERR! this command with --force or --legacy-peer-deps
npm ERR! to accept an incorrect (and potentially broken) dependency resolution.




