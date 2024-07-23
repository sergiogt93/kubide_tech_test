import { Injectable } from '@angular/core';
import { Hero } from '../hero.model';

@Injectable({
  providedIn: 'root'
})
export class MarvelApiService {
  private baseUrl = 'https://gateway.marvel.com:443/v1/public';
  private apiKey = 'd07e9c8f79990d8f4c466318198043ca';

  constructor() { }

  async getHeroes(offset: number = 0, nameStartsWith: string = ''): Promise<Hero[]> {
    let url = `${this.baseUrl}/characters?apikey=${this.apiKey}&offset=${offset}`;
    if (nameStartsWith) {
      url += `&nameStartsWith=${nameStartsWith}`;
    }

    const response = await fetch(url);
    const data = await response.json();
    return data.data.results;
  }

  async getHeroById(id: string): Promise<Hero> {
    const url = `${this.baseUrl}/characters/${id}?apikey=${this.apiKey}`;
    const response = await fetch(url);
    const data = await response.json();
    return data.data.results[0];
  }
}
