export type Brand = "Lattafa" | "Swiss Arabian" | "Armaf" | "Maison Alhambra";

export interface Product {
  id: string;
  name: string;
  brand: Brand;
  volume: string;
  price: number;
  image: string;
  inStock: boolean;
}

export interface CartItem extends Product {
  qty: number;
}