export interface Dish {
  id: number;
  name: string;
  description: string;
  price: number;
  category: string;
  imageUrl: string;
  rating: number;
  preparationTime: number;
  isVegetarian: boolean;
  isSpicy: boolean;
  ingredients: string[];
  tags: string[];
}

export interface CartItem {
  dish: Dish;
  quantity: number;
  specialInstructions?: string;
}

export interface Reservation {
  id: number;
  name: string;
  email: string;
  phone: string;
  date: Date;
  time: string;
  guests: number;
  specialRequests?: string;
}

export interface Order {
  id: number;
  items: CartItem[];
  total: number;
  status: 'pending' | 'confirmed' | 'preparing' | 'delivered';
  orderDate: Date;
}
