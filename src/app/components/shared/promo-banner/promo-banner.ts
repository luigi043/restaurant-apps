import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-promo-banner',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="promo-banner">
      <div class="promo-content">
        <div class="promo-text">
          <span class="promo-badge">🔥 HOT DEAL</span>
          <h2>50% OFF on Your First Order!</h2>
          <p>Use code: WELCOME50 at checkout</p>
        </div>
        <div class="promo-timer">
          <div class="timer-item">
            <span class="timer-number">{{ hours }}</span>
            <span class="timer-label">Hours</span>
          </div>
          <span class="timer-colon">:</span>
          <div class="timer-item">
            <span class="timer-number">{{ minutes }}</span>
            <span class="timer-label">Minutes</span>
          </div>
          <span class="timer-colon">:</span>
          <div class="timer-item">
            <span class="timer-number">{{ seconds }}</span>
            <span class="timer-label">Seconds</span>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .promo-banner {
      background: linear-gradient(135deg, #ff6b6b 0%, #ee5a24 100%);
      color: white;
      padding: 2rem;
      border-radius: 12px;
      margin: 2rem auto;
      max-width: 1200px;
      box-shadow: 0 4px 20px rgba(238, 90, 36, 0.3);
    }

    .promo-content {
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
      gap: 2rem;
    }

    .promo-text {
      flex: 1;
    }

    .promo-badge {
      display: inline-block;
      background: rgba(255, 255, 255, 0.2);
      padding: 5px 15px;
      border-radius: 20px;
      font-size: 0.9rem;
      font-weight: bold;
      margin-bottom: 1rem;
    }

    .promo-text h2 {
      font-size: 1.8rem;
      margin-bottom: 0.5rem;
      text-shadow: 1px 1px 2px rgba(0,0,0,0.2);
    }

    .promo-text p {
      font-size: 1.1rem;
      opacity: 0.9;
    }

    .promo-timer {
      display: flex;
      align-items: center;
      gap: 1rem;
      background: rgba(0, 0, 0, 0.2);
      padding: 1rem 1.5rem;
      border-radius: 10px;
      backdrop-filter: blur(10px);
    }

    .timer-item {
      display: flex;
      flex-direction: column;
      align-items: center;
      min-width: 60px;
    }

    .timer-number {
      font-size: 2rem;
      font-weight: bold;
      font-variant-numeric: tabular-nums;
      line-height: 1;
    }

    .timer-label {
      font-size: 0.8rem;
      opacity: 0.8;
      margin-top: 0.25rem;
    }

    .timer-colon {
      font-size: 1.5rem;
      font-weight: bold;
      margin-bottom: 1rem;
    }

    @media (max-width: 768px) {
      .promo-content {
        flex-direction: column;
        text-align: center;
      }

      .promo-text h2 {
        font-size: 1.5rem;
      }

      .timer-number {
        font-size: 1.5rem;
      }

      .timer-item {
        min-width: 50px;
      }
    }
  `]
})
export class PromoBannerComponent {
  hours = '24';
  minutes = '00';
  seconds = '00';

  constructor() {
    this.startTimer();
  }

  startTimer(): void {
    setInterval(() => {
      this.updateTimer();
    }, 1000);
  }

  updateTimer(): void {
    let sec = parseInt(this.seconds);
    let min = parseInt(this.minutes);
    let hr = parseInt(this.hours);

    sec--;

    if (sec < 0) {
      sec = 59;
      min--;

      if (min < 0) {
        min = 59;
        hr--;

        if (hr < 0) {
          hr = 23;
          min = 59;
          sec = 59;
        }
      }
    }

    this.seconds = sec.toString().padStart(2, '0');
    this.minutes = min.toString().padStart(2, '0');
    this.hours = hr.toString().padStart(2, '0');
  }
}
