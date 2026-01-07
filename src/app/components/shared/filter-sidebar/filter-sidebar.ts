import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-filter-sidebar',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './filter-sidebar.html',
  styleUrls: ['./filter-sidebar.scss']
})
export class FilterSidebarComponent {
  @Input() categories: string[] = [];
  @Input() selectedCategory: string = '';
  @Output() categoryChange = new EventEmitter<string>();
  @Output() filterChange = new EventEmitter<any>();

  filters = {
    vegetarianOnly: false,
    spicyOnly: false,
    maxPrice: 50,
    minRating: 0
  };

  onCategoryClick(category: string): void {
    this.selectedCategory = category;
    this.categoryChange.emit(category);
  }

  onFilterChange(): void {
    this.filterChange.emit({...this.filters});
  }

  clearFilters(): void {
    this.selectedCategory = '';
    this.filters = {
      vegetarianOnly: false,
      spicyOnly: false,
      maxPrice: 50,
      minRating: 0
    };
    this.categoryChange.emit('');
    this.filterChange.emit({...this.filters});
  }
}
