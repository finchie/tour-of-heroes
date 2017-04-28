import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [HeroService]
})
export class AppComponent implements OnInit{
  title = 'Tour of Heroes';
  selectedHero: Hero;
  heroes : Hero[];
  
  constructor(private heroService: HeroService) { };
  
  ngOnInit(): void {
      this.getHeroes();
    }
  
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
  
  getHeroes(): void {
      this.heroService.getHeroesSlowly().then(heroes => this.heroes = heroes);
  }
}