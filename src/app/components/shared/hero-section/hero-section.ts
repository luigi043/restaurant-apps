import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <section class="hero-section">
      <div class="hero-content">
        <div class="hero-text">
          <h1 class="hero-title">Experience Culinary Excellence</h1>
          <p class="hero-subtitle">
            Fresh ingredients, authentic flavors, and unforgettable dining experiences
          </p>
          <div class="hero-buttons">
            <a routerLink="/menu" class="btn-order">Order Now</a>
            <a routerLink="/reservation" class="btn-reserve">Book a Table</a>
          </div>
        </div>

        <div class="hero-stats">
          <div class="stat">
            <span class="stat-number">50+</span>
            <span class="stat-label">Menu Items</span>
          </div>
          <div class="stat">
            <span class="stat-number">4.8</span>
            <span class="stat-label">Average Rating</span>
          </div>
          <div class="stat">
            <span class="stat-number">30min</span>
            <span class="stat-label">Delivery Time</span>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .hero-section {
      background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
                  url('/assets/images/hero-bg.jpg') center/cover no-repeat;
      color: white;
      padding: 6rem 2rem;
      text-align: center;
      margin-bottom: 2rem;
      border-radius: 0 0 20px 20px;
    }

    .hero-content {
      max-width: 1200px;
      margin: 0 auto;
    }

    .hero-text {
      margin-bottom: 3rem;
    }

    .hero-title {
      font-size: 3.5rem;
      margin-bottom: 1rem;
      line-height: 1.2;
      text-shadow: 2px 2px 4px rgba(0,0,0,0.5);
    }

    .hero-subtitle {
      font-size: 1.3rem;
      margin-bottom: 2rem;
      opacity: 0.9;
      max-width: 600px;
      margin-left: auto;
      margin-right: auto;
    }

    .hero-buttons {
      display: flex;
      gap: 1rem;
      justify-content: center;
      flex-wrap: wrap;
    }

    .btn-order,
    .btn-reserve {
      padding: 15px 30px;
      border-radius: 30px;
      text-decoration: none;
      font-weight: bold;
      font-size: 1.1rem;
      transition: all 0.3s;
      min-width: 180px;
    }

    .btn-order {
      background: #e74c3c;
      color: white;
      border: 2px solid #e74c3c;
    }

    .btn-order:hover {
      background: #c0392b;
      border-color: #c0392b;
      transform: translateY(-2px);
    }

    .btn-reserve {
      background: transparent;
      color: white;
      border: 2px solid white;
    }

    .btn-reserve:hover {
      background: white;
      color: #2c3e50;
      transform: translateY(-2px);
    }

    .hero-stats {
      display: flex;
      justify-content: center;
      gap: 3rem;
      flex-wrap: wrap;
    }

    .stat {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .stat-number {
      font-size: 2.5rem;
      font-weight: bold;
      color: #ffd166;
      margin-bottom: 0.5rem;
    }

    .stat-label {
      font-size: 1rem;
      opacity: 0.9;
    }

    @media (max-width: 768px) {
      .hero-section {
        padding: 4rem 1rem;
      }

      .hero-title {
        font-size: 2.5rem;
      }

      .hero-subtitle {
        font-size: 1.1rem;
      }

      .hero-buttons {
        flex-direction: column;
        align-items: center;
      }

      .btn-order,
      .btn-reserve {
        width: 100%;
        max-width: 300px;
      }

      .hero-stats {
        gap: 2rem;
      }

      .stat-number {
        font-size: 2rem;
      }
    }
  `]
})
export class HeroSectionComponent {}
