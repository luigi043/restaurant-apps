import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Reservation } from '../../../models/dish';
import { ReservationService } from '../../../services/restaurant.service';

@Component({
  selector: 'app-reservation',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="reservation-page">
      <div class="container">
        <div class="page-header">
          <h1>Make a Reservation</h1>
          <p>Book your table for a memorable dining experience</p>
        </div>

        <div class="reservation-container">
          <div class="reservation-form-section">
            <form (ngSubmit)="onSubmit()" #reservationForm="ngForm" class="reservation-form">
              <div class="form-grid">
                <div class="form-group">
                  <label for="name" class="form-label">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    [(ngModel)]="reservation.name"
                    required
                    class="form-control"
                    placeholder="Enter your full name"
                  >
                </div>

                <div class="form-group">
                  <label for="email" class="form-label">Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    [(ngModel)]="reservation.email"
                    required
                    email
                    class="form-control"
                    placeholder="your@email.com"
                  >
                </div>

                <div class="form-group">
                  <label for="phone" class="form-label">Phone *</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    [(ngModel)]="reservation.phone"
                    required
                    class="form-control"
                    placeholder="(11) 99999-9999"
                  >
                </div>

                <div class="form-group">
                  <label for="date" class="form-label">Date *</label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    [(ngModel)]="selectedDate"
                    required
                    class="form-control"
                    [min]="today"
                  >
                </div>

                <div class="form-group">
                  <label for="time" class="form-label">Time *</label>
                  <select
                    id="time"
                    name="time"
                    [(ngModel)]="reservation.time"
                    required
                    class="form-control"
                  >
                    <option value="">Select time</option>
                    <option *ngFor="let time of availableTimes" [value]="time">
                      {{ time }}
                    </option>
                  </select>
                </div>

                <div class="form-group">
                  <label for="guests" class="form-label">Number of Guests *</label>
                  <select
                    id="guests"
                    name="guests"
                    [(ngModel)]="reservation.guests"
                    required
                    class="form-control"
                  >
                    <option value="">Select guests</option>
                    <option *ngFor="let num of [1,2,3,4,5,6,7,8]" [value]="num">
                      {{ num }} {{ num === 1 ? 'person' : 'people' }}
                    </option>
                  </select>
                </div>
              </div>

              <div class="form-group">
                <label for="specialRequests" class="form-label">Special Requests</label>
                <textarea
                  id="specialRequests"
                  name="specialRequests"
                  [(ngModel)]="reservation.specialRequests"
                  class="form-control"
                  rows="4"
                  placeholder="Any special requirements or celebrations?"
                ></textarea>
              </div>

              <button
                type="submit"
                class="btn-submit"
                [disabled]="!reservationForm.valid || isSubmitting">
                <span *ngIf="!isSubmitting">Book Table</span>
                <span *ngIf="isSubmitting">Booking...</span>
              </button>

              <div *ngIf="bookingSuccess" class="success-message">
                ✅ Reservation confirmed! We've sent a confirmation to your email.
              </div>
            </form>
          </div>

          <div class="reservation-info-section">
            <div class="info-card">
              <h3>📅 Opening Hours</h3>
              <div class="hours-list">
                <div class="hour-item">
                  <span>Monday - Thursday</span>
                  <span>11:00 AM - 10:00 PM</span>
                </div>
                <div class="hour-item">
                  <span>Friday - Saturday</span>
                  <span>11:00 AM - 11:00 PM</span>
                </div>
                <div class="hour-item">
                  <span>Sunday</span>
                  <span>12:00 PM - 9:00 PM</span>
                </div>
              </div>
            </div>

            <div class="info-card">
              <h3>📍 Location</h3>
              <p>123 Food Street</p>
              <p>Restaurant District</p>
              <p>City, State 12345</p>
              <p class="phone">📞 (11) 99999-9999</p>
            </div>

            <div class="info-card">
              <h3>ℹ️ Important Info</h3>
              <ul class="info-list">
                <li>Reservations held for 15 minutes</li>
                <li>Call for parties of 8+ people</li>
                <li>Notify us of any allergies</li>
                <li>Free parking available</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .reservation-page {
      padding: 2rem 0 4rem;
      min-height: calc(100vh - 200px);
    }

    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 20px;
    }

    .page-header {
      text-align: center;
      margin-bottom: 3rem;
    }

    .page-header h1 {
      color: #2c3e50;
      font-size: 2.5rem;
      margin-bottom: 0.5rem;
    }

    .page-header p {
      color: #666;
      font-size: 1.1rem;
    }

    .reservation-container {
      display: grid;
      grid-template-columns: 1fr 350px;
      gap: 3rem;
    }

    .reservation-form {
      background: white;
      padding: 2.5rem;
      border-radius: 12px;
      box-shadow: 0 4px 15px rgba(0,0,0,0.1);
    }

    .form-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 1.5rem;
      margin-bottom: 1.5rem;
    }

    .form-group {
      margin-bottom: 1.5rem;
    }

    .form-label {
      display: block;
      margin-bottom: 0.5rem;
      font-weight: 600;
      color: #2c3e50;
    }

    .form-control {
      width: 100%;
      padding: 12px;
      border: 2px solid #e0e0e0;
      border-radius: 6px;
      font-size: 1rem;
      transition: border-color 0.3s;
    }

    .form-control:focus {
      outline: none;
      border-color: #3498db;
      box-shadow: 0 0 0 3px rgba(52, 152, 219, 0.1);
    }

    .btn-submit {
      width: 100%;
      padding: 15px;
      background: #3498db;
      color: white;
      border: none;
      border-radius: 6px;
      font-size: 1.1rem;
      font-weight: bold;
      cursor: pointer;
      transition: background 0.3s;
      margin-top: 1rem;
    }

    .btn-submit:hover:not(:disabled) {
      background: #2980b9;
    }

    .btn-submit:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }

    .success-message {
      margin-top: 1.5rem;
      padding: 1rem;
      background: #d4edda;
      color: #155724;
      border-radius: 6px;
      text-align: center;
    }

    .reservation-info-section {
      display: flex;
      flex-direction: column;
      gap: 2rem;
    }

    .info-card {
      background: white;
      padding: 2rem;
      border-radius: 12px;
      box-shadow: 0 4px 15px rgba(0,0,0,0.1);
    }

    .info-card h3 {
      color: #2c3e50;
      margin-bottom: 1.5rem;
      font-size: 1.3rem;
    }

    .hours-list {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }

    .hour-item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-bottom: 1rem;
      border-bottom: 1px solid #f0f0f0;
    }

    .hour-item:last-child {
      border-bottom: none;
      padding-bottom: 0;
    }

    .phone {
      color: #3498db;
      font-weight: bold;
      margin-top: 1rem;
    }

    .info-list {
      list-style: none;
      padding: 0;
    }

    .info-list li {
      padding: 0.5rem 0;
      color: #666;
      position: relative;
      padding-left: 1.5rem;
    }

    .info-list li:before {
      content: "•";
      color: #3498db;
      font-weight: bold;
      position: absolute;
      left: 0;
    }

    @media (max-width: 1024px) {
      .reservation-container {
        grid-template-columns: 1fr;
      }
    }

    @media (max-width: 768px) {
      .form-grid {
        grid-template-columns: 1fr;
      }

      .reservation-form {
        padding: 1.5rem;
      }
    }
  `]
})
export class ReservationComponent implements OnInit {
  reservation: Reservation = {
    id: 0,
    name: '',
    email: '',
    phone: '',
    date: new Date(),
    time: '',
    guests: 2,
    specialRequests: ''
  };

  selectedDate: string = '';
  availableTimes = ['11:00', '12:00', '13:00', '14:00', '18:00', '19:00', '20:00', '21:00'];
  today = new Date().toISOString().split('T')[0];
  isSubmitting = false;
  bookingSuccess = false;

  constructor(private reservationService: ReservationService) {}

  ngOnInit(): void {
    this.selectedDate = this.today;
  }

  onSubmit(): void {
    if (!this.reservation.name || !this.reservation.email || !this.reservation.phone || !this.reservation.time) {
      return;
    }

    this.isSubmitting = true;

    // Set the date from selectedDate string
    this.reservation.date = new Date(this.selectedDate);

    // Simulate API call
    setTimeout(() => {
      this.reservationService.createReservation(this.reservation);
      this.isSubmitting = false;
      this.bookingSuccess = true;

      // Reset form after success
      setTimeout(() => {
        this.resetForm();
      }, 3000);
    }, 1500);
  }

  resetForm(): void {
    this.reservation = {
      id: 0,
      name: '',
      email: '',
      phone: '',
      date: new Date(),
      time: '',
      guests: 2,
      specialRequests: ''
    };
    this.selectedDate = this.today;
    this.bookingSuccess = false;
  }
}
