import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CartItem, Dish } from '../models/dish';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItems: CartItem[] = [];
  private cartSubject = new BehaviorSubject<CartItem[]>([]);
  cart$ = this.cartSubject.asObservable();

  addToCart(dish: Dish, quantity: number = 1, specialInstructions?: string): void {
    const existingItem = this.cartItems.find(item => item.dish.id === dish.id);

    if (existingItem) {
      existingItem.quantity += quantity;
      if (specialInstructions) {
        existingItem.specialInstructions = specialInstructions;
      }
    } else {
      this.cartItems.push({
        dish,
        quantity,
        specialInstructions
      });
    }

    this.cartSubject.next([...this.cartItems]);
  }

  removeFromCart(dishId: number): void {
    this.cartItems = this.cartItems.filter(item => item.dish.id !== dishId);
    this.cartSubject.next([...this.cartItems]);
  }

  updateQuantity(dishId: number, quantity: number): void {
    const item = this.cartItems.find(item => item.dish.id === dishId);
    if (item) {
      item.quantity = quantity;
      this.cartSubject.next([...this.cartItems]);
    }
  }

  clearCart(): void {
    this.cartItems = [];
    this.cartSubject.next([]);
  }

  getCartItems(): CartItem[] {
    return [...this.cartItems];
  }

  getTotalItems(): number {
    return this.cartItems.reduce((total, item) => total + item.quantity, 0);
  }

  getTotalPrice(): number {
    return this.cartItems.reduce((total, item) =>
      total + (item.dish.price * item.quantity), 0
    );
  }
}
