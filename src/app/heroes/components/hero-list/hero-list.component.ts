import { Component, OnInit } from '@angular/core';
import { MarvelApiService } from '../../services/heroes-api.service';
import { Hero } from '../../hero.model';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SearchBarComponent } from "../../../search-bar/serch-bar.component";
import { SpinnerComponent } from "../../../spinner/spinner.component";
import { ToastrService } from 'ngx-toastr';

@Component({
  standalone: true,
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.scss'],
  imports: [
    CommonModule, RouterModule, SearchBarComponent, SpinnerComponent
  ]
})
export class HeroListComponent implements OnInit {
  heroes: Hero[] = [];
  offset = 0;
  loading = false;
  currentSearch = '';

  constructor(
    private marvelApi: MarvelApiService,
    private toastService: ToastrService
  ) { }

  ngOnInit(): void {
    this.loadMoreHeroes();
  }

  async loadMoreHeroes(): Promise<void> {
    this.toastService.success('Se están mostrando 20 más', 'HEROES');
    if (this.loading) return;
    this.loading = true;
    const newHeroes = await this.marvelApi.getHeroes(this.offset, this.currentSearch);
    this.heroes = [...this.heroes, ...newHeroes];
    this.offset += newHeroes.length;
    this.loading = false;
  }

  async searchHeroes(name: string): Promise<void> {
    this.currentSearch = name;
    this.offset = 0;
    this.heroes = [];
    await this.loadMoreHeroes();
  }
}
