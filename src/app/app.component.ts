import { Component } from '@angular/core';
import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
  selector: 'my-app',
  template: `  <h1>{{title}}</h1>
  <h2>My Heroes</h2>
  <ul class="heroes">
  <li *ngFor="let hero of heroes"
  (click)="onSelect(hero)" [class.selected]="hero === selectedHero">
  <span class="badge">{{hero.id}}</span> {{hero.name}}
  </li>
  <hero-detail [hero]="selectedHero"></hero-detail>
  `,
  styleUrls: ['./app.component.css'],
  providers: [HeroService]
})

export class AppComponent implements OnInit {

  constructor(private heroService: HeroService) {}

  title = "Tour of Heroes";
  selectedHero: Hero;
  heroes: Hero[];

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroesSlowly().then(heroes => this.heroes = heroes);
  }


  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

}
