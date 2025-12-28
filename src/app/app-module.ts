import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Header } from './components/header/header';
import { Footer } from './components/footer/footer';
import { DishCard } from './components/dish-card/dish-card';
import { CartModal } from './components/cart-modal/cart-modal';
import { Home } from './pages/home/home';
import { Menu } from './pages/menu/menu';
import { Cart } from './pages/cart/cart';
import { Checkout } from './pages/checkout/checkout';

@NgModule({
  declarations: [
    App,
    Header,
    Footer,
    DishCard,
    CartModal,
    Home,
    Menu,
    Cart,
    Checkout
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideClientHydration(withEventReplay())
  ],
  bootstrap: [App]
})
export class AppModule { }
