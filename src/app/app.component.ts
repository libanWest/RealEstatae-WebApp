import { Component } from '@angular/core';
import { HomeComponent } from "./home/home.component";
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-root',
  template: `
  <main>

  <header class="brand-name ">
    <a routerLink=''>
    <img class="brand-logo" src="/assets/logo.svg" alt="logo" aria-hidden="true"><!-- this is something that will be shown on all pages as a template e.g. header with logo -->
    </a>
  </header>
  <section class ="content">
    <router-outlet> </router-outlet>
    <!-- <app-home></app-home> added component in its owm section -->
  </section>
  </main>
  `, 
  styleUrls: ['./app.component.css'],
  imports: [RouterModule],
})
export class AppComponent {
  title = 'homes';
}
