import { Injectable } from '@angular/core';
import { Reservation } from '../models/dish';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {
  private reservations: Reservation[] = [];

  createReservation(reservation: Reservation): void {
    const newReservation: Reservation = {
      ...reservation,
      id: Date.now(), // Generate unique ID
      date: new Date(reservation.date)
    };

    this.reservations.push(newReservation);
    console.log('Reservation created:', newReservation);
  }

  getReservations(): Reservation[] {
    return [...this.reservations];
  }

  getReservationById(id: number): Reservation | undefined {
    return this.reservations.find(res => res.id === id);
  }

  cancelReservation(id: number): void {
    this.reservations = this.reservations.filter(res => res.id !== id);
  }

  updateReservation(id: number, updates: Partial<Reservation>): void {
    const index = this.reservations.findIndex(res => res.id === id);
    if (index !== -1) {
      this.reservations[index] = { ...this.reservations[index], ...updates };
    }
  }
}
