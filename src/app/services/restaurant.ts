import { Injectable } from '@angular/core';
import { Dish } from '../models/dish';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {
  private dishes: Dish[] = [
    {
      id: 1,
      name: 'Margherita Pizza',
      description: 'Classic pizza with tomato sauce, mozzarella, and basil',
      price: 12.99,
      category: 'Pizza',
      imageUrl: 'assets/images/pizza-margherita.jpg',
      rating: 4.8,
      preparationTime: 20,
      isVegetarian: true,
      isSpicy: false,
      ingredients: ['Tomato sauce', 'Mozzarella', 'Fresh basil', 'Olive oil'],
      tags: ['Popular', 'Italian']
    },
    {
      id: 2,
      name: 'Spaghetti Carbonara',
      description: 'Traditional Italian pasta with eggs, cheese, pancetta, and pepper',
      price: 15.99,
      category: 'Pasta',
      imageUrl: 'assets/images/carbonara.jpg',
      rating: 4.7,
      preparationTime: 25,
      isVegetarian: false,
      isSpicy: false,
      ingredients: ['Spaghetti', 'Eggs', 'Parmesan', 'Pancetta', 'Black pepper'],
      tags: ['Classic', 'Creamy']
    },
    {
      id: 3,
      name: 'Caesar Salad',
      description: 'Fresh romaine lettuce with Caesar dressing, croutons, and parmesan',
      price: 9.99,
      category: 'Salad',
      imageUrl: 'assets/images/caesar-salad.jpg',
      rating: 4.5,
      preparationTime: 10,
      isVegetarian: true,
      isSpicy: false,
      ingredients: ['Romaine lettuce', 'Caesar dressing', 'Croutons', 'Parmesan cheese'],
      tags: ['Healthy', 'Fresh']
    },
    {
      id: 4,
      name: 'BBQ Ribs',
      description: 'Tender pork ribs with homemade BBQ sauce',
      price: 22.99,
      category: 'Main Course',
      imageUrl: 'assets/images/bbq-ribs.jpg',
      rating: 4.9,
      preparationTime: 45,
      isVegetarian: false,
      isSpicy: true,
      ingredients: ['Pork ribs', 'BBQ sauce', 'Spices', 'Herbs'],
      tags: ['Spicy', 'Grilled']
    }
  ];

  getDishes(): Dish[] {
    return this.dishes;
  }

  getDishById(id: number): Dish | undefined {
    return this.dishes.find(dish => dish.id === id);
  }

  getDishesByCategory(category: string): Dish[] {
    return this.dishes.filter(dish => dish.category === category);
  }

  getCategories(): string[] {
    return [...new Set(this.dishes.map(dish => dish.category))];
  }

  searchDishes(query: string): Dish[] {
    const lowerQuery = query.toLowerCase();
    return this.dishes.filter(dish =>
      dish.name.toLowerCase().includes(lowerQuery) ||
      dish.description.toLowerCase().includes(lowerQuery) ||
      dish.tags.some(tag => tag.toLowerCase().includes(lowerQuery))
    );
  }
}
