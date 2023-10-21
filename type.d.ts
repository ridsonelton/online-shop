export interface ProductType {
    _id: number;
  title: string;
  description: string;
  oldPrice: number;
  price: number;
  brand: string;
  image: string;
  isNew: boolean;
  category: string;
}[]

export interface Item{
    _id: number;
    title: string;
    description: string;
    oldPrice: number;
    price: number;
    brand: string;
    image: string;
    isNew: boolean;
    category: string;
}

export interface StoreProduct {
  _id: number;
  title: string;
  description: string;
  oldPrice: number;
  price: number;
  brand: string;
  image: string;
  isNew: boolean;
  quantity: number;
  category: string;
}

export interface UserInfo{
  _id: string;
  title: string;
  email: string;
}