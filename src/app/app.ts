import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {  FooterComponent } from './components/layout/footer/footer';
import { HeaderComponent } from "./components/layout/header/header";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  template: `
    <div class="app-container">
      <app-header></app-header>
      <main class="main-content">
        <router-outlet></router-outlet>
      </main>
      <app-footer></app-footer>
    </div>
  `,
  styles: [`
    .app-container {
      min-height: 100vh;
      display: flex;
      flex-direction: column;
    }
    .main-content {
      flex: 1;
      padding: 20px;
    }
  `]
})
export class AppComponent {
  title = 'Restaurant App';
}
