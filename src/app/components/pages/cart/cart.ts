import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { CartItemComponent } from '../../shared/cart-item/cart-item';
import { EmptyStateComponent } from '../../shared/empty-state/empty-state';
import { CartService } from '../../../services/cart.service';
import { CartItem } from '../../../models/dish';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink, CartItemComponent, EmptyStateComponent],
  templateUrl: './cart.html',
  styleUrls: ['./cart.scss']
})
export class CartComponent implements OnInit {
  cartItems: CartItem[] = [];
  subtotal = 0;
  tax = 0;
  deliveryFee = 4.99;
  total = 0;
  promoCode = '';

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.loadCart();
  }

  loadCart(): void {
    this.cartService.cart$.subscribe(items => {
      this.cartItems = items;
      this.calculateTotals();
    });
  }

  calculateTotals(): void {
    this.subtotal = this.cartService.getTotalPrice();
    this.tax = this.subtotal * 0.10;

    if (this.subtotal >= 25) {
      this.deliveryFee = 0;
    }

    this.total = this.subtotal + this.tax + this.deliveryFee;
  }

  onQuantityChange(dishId: number, quantity: number): void {
    this.cartService.updateQuantity(dishId, quantity);
  }

  onRemoveItem(dishId: number): void {
    this.cartService.removeFromCart(dishId);
  }

  clearCart(): void {
    this.cartService.clearCart();
  }
}
