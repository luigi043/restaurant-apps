import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MenuCardComponent } from '../../shared/menu-card/menu-card';
import { FilterSidebarComponent } from '../../shared/filter-sidebar/filter-sidebar';
import { Dish } from '../../../models/dish';
import { RestaurantService } from '../../../services/restaurant';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule, FormsModule, MenuCardComponent, FilterSidebarComponent],
  template: `
    <div class="menu-page">
      <div class="container">
        <div class="page-header">
          <h1>Our Menu</h1>
          <p>Discover our delicious dishes prepared with fresh ingredients</p>
        </div>

        <div class="search-bar">
          <input
            type="text"
            [(ngModel)]="searchQuery"
            (input)="onSearch()"
            placeholder="Search dishes..."
            class="search-input"
          >
          <span class="search-icon">🔍</span>
        </div>

        <div class="menu-layout">
          <div class="filters-section">
            <app-filter-sidebar
              [categories]="categories"
              [selectedCategory]="selectedCategory"
              (categoryChange)="onCategoryChange($event)"
              (filterChange)="onFilterChange($event)"
            ></app-filter-sidebar>
          </div>

          <div class="dishes-section">
            <div class="dishes-header">
              <h2>{{ selectedCategory || 'All Dishes' }}</h2>
              <span class="dishes-count">{{ filteredDishes.length }} items</span>
            </div>

            <div *ngIf="filteredDishes.length === 0" class="no-results">
              <div class="empty-state">🍽️</div>
              <h3>No dishes found</h3>
              <p>Try adjusting your search or filters</p>
            </div>

            <div class="dishes-grid">
              <app-menu-card
                *ngFor="let dish of filteredDishes"
                [dish]="dish">
              </app-menu-card>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .menu-page {
      padding: 2rem 0 4rem;
      min-height: calc(100vh - 200px);
    }

    .container {
      max-width: 1400px;
      margin: 0 auto;
      padding: 0 20px;
    }

    .page-header {
      text-align: center;
      margin-bottom: 2rem;
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

    .search-bar {
      max-width: 500px;
      margin: 0 auto 2rem;
      position: relative;
    }

    .search-input {
      width: 100%;
      padding: 12px 20px 12px 45px;
      border: 2px solid #e0e0e0;
      border-radius: 25px;
      font-size: 1rem;
      transition: all 0.3s;
    }

    .search-input:focus {
      outline: none;
      border-color: #3498db;
      box-shadow: 0 0 0 3px rgba(52, 152, 219, 0.1);
    }

    .search-icon {
      position: absolute;
      left: 15px;
      top: 50%;
      transform: translateY(-50%);
      color: #95a5a6;
    }

    .menu-layout {
      display: grid;
      grid-template-columns: 250px 1fr;
      gap: 2rem;
    }

    .dishes-section {
      padding: 1rem;
    }

    .dishes-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 2rem;
      padding-bottom: 1rem;
      border-bottom: 2px solid #f0f0f0;
    }

    .dishes-header h2 {
      color: #2c3e50;
      margin: 0;
      font-size: 1.8rem;
    }

    .dishes-count {
      background: #f0f0f0;
      padding: 5px 15px;
      border-radius: 20px;
      color: #666;
      font-weight: 600;
    }

    .dishes-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
      gap: 2rem;
    }

    .no-results {
      text-align: center;
      padding: 4rem 0;
    }

    .empty-state {
      font-size: 4rem;
      margin-bottom: 1rem;
      opacity: 0.5;
    }

    .no-results h3 {
      color: #2c3e50;
      margin-bottom: 0.5rem;
    }

    .no-results p {
      color: #666;
    }

    @media (max-width: 1024px) {
      .menu-layout {
        grid-template-columns: 1fr;
      }

      .filters-section {
        order: 2;
      }

      .dishes-section {
        order: 1;
      }
    }

    @media (max-width: 768px) {
      .dishes-grid {
        grid-template-columns: 1fr;
      }

      .dishes-header {
        flex-direction: column;
        align-items: flex-start;
        gap: 1rem;
      }
    }
  `]
})
export class MenuComponent implements OnInit {
  dishes: Dish[] = [];
  filteredDishes: Dish[] = [];
  categories: string[] = [];
  selectedCategory: string = '';
  searchQuery: string = '';
  filters: any = {};

  constructor(private restaurantService: RestaurantService) {}

  ngOnInit(): void {
    this.dishes = this.restaurantService.getDishes();
    this.filteredDishes = [...this.dishes];
    this.categories = this.restaurantService.getCategories();
  }

  onSearch(): void {
    if (this.searchQuery.trim()) {
      this.filteredDishes = this.restaurantService.searchDishes(this.searchQuery);
    } else {
      this.filteredDishes = [...this.dishes];
    }
    this.applyFilters();
  }

  onCategoryChange(category: string): void {
    this.selectedCategory = category;
    this.applyFilters();
  }

  onFilterChange(filters: any): void {
    this.filters = filters;
    this.applyFilters();
  }

  applyFilters(): void {
    let filtered = [...this.dishes];

    // Apply category filter
    if (this.selectedCategory) {
      filtered = filtered.filter(dish => dish.category === this.selectedCategory);
    }

    // Apply search filter
    if (this.searchQuery.trim()) {
      filtered = this.restaurantService.searchDishes(this.searchQuery).filter((dish: { id: number; }) =>
        filtered.some(f => f.id === dish.id)
      );
    }

    // Apply other filters
    if (this.filters.vegetarianOnly) {
      filtered = filtered.filter(dish => dish.isVegetarian);
    }

    if (this.filters.spicyOnly) {
      filtered = filtered.filter(dish => dish.isSpicy);
    }

    if (this.filters.maxPrice) {
      filtered = filtered.filter(dish => dish.price <= this.filters.maxPrice);
    }

    if (this.filters.minRating) {
      filtered = filtered.filter(dish => dish.rating >= this.filters.minRating);
    }

    this.filteredDishes = filtered;
  }
}
