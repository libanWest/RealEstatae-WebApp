import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import routeConfig from './app/routes'; //property not company

bootstrapApplication(AppComponent,{
  providers:[
    provideRouter(routeConfig)// array defines our application routes
  ]

}).catch(err => console.error(err));
