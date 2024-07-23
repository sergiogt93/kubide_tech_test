// src/app/components/hero-detail/hero-detail.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MarvelApiService } from '../../services/heroes-api.service';
import { Hero } from '../../hero.model';
import { CommonModule } from '@angular/common';
import { SpinnerComponent } from "../../../spinner/spinner.component";

@Component({
  standalone: true,
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss'],
  imports: [CommonModule, SpinnerComponent]
})
export class HeroDetailComponent implements OnInit {
  hero: Hero | null = null;
  loading = false;

  constructor(
    private route: ActivatedRoute,
    private marvelApi: MarvelApiService
  ) { }

  async ngOnInit(): Promise<void> {
    if (this.loading) return;
    this.loading = true;
    const id = this.route.snapshot.paramMap.get('id')!;
    this.hero = await this.marvelApi.getHeroById(id);
    console.log(this.hero);
    this.loading = false;
  }
}
