import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Dish } from '../../../models/dish';
import { MenuCardComponent } from '../../shared/menu-card/menu-card';
import { HeroSectionComponent } from '../../shared/hero-section/hero-section';
import { PromoBannerComponent } from '../../shared/promo-banner/promo-banner';
import { RestaurantService } from '../../../services/reservation';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink, MenuCardComponent, HeroSectionComponent, PromoBannerComponent],
  template: `
    <div class="home-page">
      <app-hero-section></app-hero-section>

      <app-promo-banner></app-promo-banner>

      <section class="featured-dishes">
        <div class="container">
          <h2>Featured Dishes</h2>
          <div class="dishes-grid">
            <app-menu-card
              *ngFor="let dish of featuredDishes"
              [dish]="dish">
            </app-menu-card>
          </div>

          <div class="view-all">
            <a routerLink="/menu" class="btn-view-all">View Full Menu →</a>
          </div>
        </div>
      </section>

      <section class="features">
        <div class="container">
          <div class="features-grid">
            <div class="feature-card">
              <div class="feature-icon">🚚</div>
              <h3>Fast Delivery</h3>
              <p>Get your favorite food delivered in under 30 minutes</p>
            </div>
            <div class="feature-card">
              <div class="feature-icon">⭐</div>
              <h3>Fresh Ingredients</h3>
              <p>We use only the freshest ingredients for every dish</p>
            </div>
            <div class="feature-card">
              <div class="feature-icon">💰</div>
              <h3>Best Prices</h3>
              <p>Quality food at prices that won't break the bank</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  `,
  styles: [`
    .home-page {
      padding-bottom: 4rem;
    }

    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 20px;
    }

    .featured-dishes {
      padding: 4rem 0;
      background: #f8f9fa;
    }

    .featured-dishes h2 {
      text-align: center;
      color: #2c3e50;
      margin-bottom: 3rem;
      font-size: 2.5rem;
    }

    .dishes-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
      gap: 2rem;
      margin-bottom: 3rem;
    }

    .view-all {
      text-align: center;
    }

    .btn-view-all {
      display: inline-block;
      padding: 12px 30px;
      background: #2c3e50;
      color: white;
      text-decoration: none;
      border-radius: 6px;
      font-weight: 600;
      transition: background 0.3s;
    }

    .btn-view-all:hover {
      background: #1a2530;
    }

    .features {
      padding: 4rem 0;
      background: white;
    }

    .features-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 2rem;
    }

    .feature-card {
      text-align: center;
      padding: 2rem;
      background: #f8f9fa;
      border-radius: 12px;
      transition: transform 0.3s;
    }

    .feature-card:hover {
      transform: translateY(-5px);
    }

    .feature-icon {
      font-size: 3rem;
      margin-bottom: 1rem;
    }

    .feature-card h3 {
      color: #2c3e50;
      margin-bottom: 1rem;
    }

    .feature-card p {
      color: #666;
      line-height: 1.6;
    }

    @media (max-width: 768px) {
      .featured-dishes,
      .features {
        padding: 2rem 0;
      }

      .dishes-grid {
        grid-template-columns: 1fr;
      }
    }
  `]
})
export class HomeComponent implements OnInit {
  featuredDishes: Dish[] = [];

  constructor(private restaurantService: RestaurantService) {}

  ngOnInit(): void {
    this.featuredDishes = this.restaurantService.getDishes().slice(0, 4);
  }
}
