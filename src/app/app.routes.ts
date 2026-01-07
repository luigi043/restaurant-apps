import { Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home';
import { MenuComponent } from './components/pages/menu/menu';
import { CartComponent } from './components/pages/cart/cart';
import { ReservationComponent } from './components/pages/reservation/reservation';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'cart', component: CartComponent },
  { path: 'reservation', component: ReservationComponent },
  { path: '**', redirectTo: '/home' }
];
