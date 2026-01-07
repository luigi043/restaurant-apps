import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-empty-state',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <div class="empty-state">
      <div class="empty-icon">{{ icon }}</div>
      <h3 class="empty-title">{{ title }}</h3>
      <p class="empty-description">{{ description }}</p>
      <a
        *ngIf="buttonText"
        [routerLink]="buttonLink"
        class="empty-button">
        {{ buttonText }}
      </a>
    </div>
  `,
  styles: [`
    .empty-state {
      text-align: center;
      padding: 4rem 2rem;
      background: white;
      border-radius: 12px;
      box-shadow: 0 2px 10px rgba(0,0,0,0.05);
    }

    .empty-icon {
      font-size: 4rem;
      margin-bottom: 1.5rem;
      opacity: 0.5;
    }

    .empty-title {
      color: #2c3e50;
      margin-bottom: 1rem;
      font-size: 1.5rem;
    }

    .empty-description {
      color: #666;
      margin-bottom: 2rem;
      max-width: 300px;
      margin-left: auto;
      margin-right: auto;
      line-height: 1.6;
    }

    .empty-button {
      display: inline-block;
      padding: 12px 30px;
      background: #3498db;
      color: white;
      text-decoration: none;
      border-radius: 6px;
      font-weight: 600;
      transition: background 0.3s;
    }

    .empty-button:hover {
      background: #2980b9;
    }
  `]
})
export class EmptyStateComponent {
  @Input() icon = '📦';
  @Input() title = 'No items found';
  @Input() description = 'Try adjusting your search or filters';
  @Input() buttonText = '';
  @Input() buttonLink = '/';
}
