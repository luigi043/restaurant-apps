import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CartService } from '../../../services/cart.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <header class="header">
      <nav class="navbar">
        <div class="logo">
          <a routerLink="/home">🍽️ Restaurant</a>
        </div>

        <ul class="nav-links">
          <li><a routerLink="/home" routerLinkActive="active">Home</a></li>
          <li><a routerLink="/menu" routerLinkActive="active">Menu</a></li>
          <li><a routerLink="/reservation" routerLinkActive="active">Reservations</a></li>
        </ul>

        <div class="cart-section">
          <a routerLink="/cart" class="cart-link">
            🛒 Cart
            <span class="cart-count" *ngIf="cartItemsCount > 0">
              {{ cartItemsCount }}
            </span>
          </a>
        </div>
      </nav>
    </header>
  `,
  styles: [`
    .header {
      background: linear-gradient(135deg, #2c3e50 0%, #4a6491 100%);
      color: white;
      padding: 1rem 2rem;
      box-shadow: 0 2px 10px rgba(0,0,0,0.1);
    }

    .navbar {
      display: flex;
      justify-content: space-between;
      align-items: center;
      max-width: 1200px;
      margin: 0 auto;
    }

    .logo a {
      color: white;
      text-decoration: none;
      font-size: 1.8rem;
      font-weight: bold;
    }

    .nav-links {
      display: flex;
      list-style: none;
      gap: 2rem;
      margin: 0;
      padding: 0;
    }

    .nav-links a {
      color: white;
      text-decoration: none;
      font-size: 1.1rem;
      transition: color 0.3s;
    }

    .nav-links a:hover,
    .nav-links a.active {
      color: #ffd166;
    }

    .cart-section {
      position: relative;
    }

    .cart-link {
      color: white;
      text-decoration: none;
      font-size: 1.1rem;
      padding: 0.5rem 1rem;
      background: rgba(255, 255, 255, 0.1);
      border-radius: 20px;
      transition: background 0.3s;
    }

    .cart-link:hover {
      background: rgba(255, 255, 255, 0.2);
    }

    .cart-count {
      position: absolute;
      top: -8px;
      right: -8px;
      background: #ff4757;
      color: white;
      border-radius: 50%;
      width: 20px;
      height: 20px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 0.8rem;
      font-weight: bold;
    }

    @media (max-width: 768px) {
      .navbar {
        flex-direction: column;
        gap: 1rem;
      }

      .nav-links {
        gap: 1rem;
      }
    }
  `]
})
export class HeaderComponent implements OnInit {
  cartItemsCount = 0;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartService.cart$.subscribe(items => {
      this.cartItemsCount = items.reduce((total, item) => total + item.quantity, 0);
    });
  }
}
