export interface IIngredient {
  id: string;
  name: string;
  category: string;
  unit: string;
  pricePerUnit: number | null;
  description: string | null;
  createdAt?: Date;
  updatedAt?: Date;
}
