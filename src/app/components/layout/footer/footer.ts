import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  template: `
    <footer class="footer">
      <div class="footer-content">
        <div class="footer-section">
          <h3>🍽️ Restaurant</h3>
          <p>Delicious food served with love since 2024</p>
          <div class="social-links">
            <a href="#" class="social-link">📘</a>
            <a href="#" class="social-link">📸</a>
            <a href="#" class="social-link">🐦</a>
          </div>
        </div>

        <div class="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/menu">Menu</a></li>
            <li><a href="/reservation">Reservations</a></li>
            <li><a href="/cart">Cart</a></li>
          </ul>
        </div>

        <div class="footer-section">
          <h4>Contact</h4>
          <p>📍 123 Food Street, City</p>
          <p>📞 (11) 99999-9999</p>
          <p>✉️ contact@restaurant.com</p>
        </div>

        <div class="footer-section">
          <h4>Hours</h4>
          <p>Mon-Thu: 11am - 10pm</p>
          <p>Fri-Sat: 11am - 11pm</p>
          <p>Sun: 12pm - 9pm</p>
        </div>
      </div>

      <div class="footer-bottom">
        <p>&copy; 2024 Restaurant App. All rights reserved.</p>
      </div>
    </footer>
  `,
  styles: [`
    .footer {
      background: #2c3e50;
      color: white;
      padding: 3rem 2rem 1rem;
      margin-top: auto;
    }

    .footer-content {
      max-width: 1200px;
      margin: 0 auto;
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 2rem;
      margin-bottom: 2rem;
    }

    .footer-section h3,
    .footer-section h4 {
      margin-bottom: 1rem;
      color: #ffd166;
    }

    .footer-section p {
      color: #bdc3c7;
      margin-bottom: 0.5rem;
      line-height: 1.6;
    }

    .footer-section ul {
      list-style: none;
      padding: 0;
    }

    .footer-section ul li {
      margin-bottom: 0.5rem;
    }

    .footer-section ul li a {
      color: #bdc3c7;
      text-decoration: none;
      transition: color 0.3s;
    }

    .footer-section ul li a:hover {
      color: #ffd166;
    }

    .social-links {
      display: flex;
      gap: 1rem;
      margin-top: 1rem;
    }

    .social-link {
      display: inline-block;
      width: 40px;
      height: 40px;
      background: rgba(255, 255, 255, 0.1);
      border-radius: 50%;
      text-align: center;
      line-height: 40px;
      color: white;
      text-decoration: none;
      transition: background 0.3s;
    }

    .social-link:hover {
      background: rgba(255, 255, 255, 0.2);
    }

    .footer-bottom {
      text-align: center;
      padding-top: 2rem;
      border-top: 1px solid rgba(255, 255, 255, 0.1);
      color: #95a5a6;
      font-size: 0.9rem;
    }

    @media (max-width: 768px) {
      .footer {
        padding: 2rem 1rem;
      }

      .footer-content {
        grid-template-columns: 1fr;
        text-align: center;
      }

      .social-links {
        justify-content: center;
      }
    }
  `]
})
export class FooterComponent {}
