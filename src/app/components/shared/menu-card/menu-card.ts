import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Dish } from '../../../models/dish';
import { CartService } from '../../../services/cart.service';

@Component({
  selector: 'app-menu-card',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './menu-card.html',
  styleUrls: ['./menu-card.scss']
})
export class MenuCardComponent {
  @Input() dish!: Dish;

  constructor(private cartService: CartService) {}

  addToCart(): void {
    this.cartService.addToCart(this.dish);
    // Optional: Add notification/toast here
  }
}
