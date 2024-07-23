// src/app/models/hero.model.ts
export interface Hero {
  id: number;
  name: string;
  description: string;
  thumbnail: {
    path: string;
    extension: string;
  };
  comics: {
    available: number;
    items: { name: string }[];
  };
}
