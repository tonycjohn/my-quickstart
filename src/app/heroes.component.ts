import { Component,OnInit } from '@angular/core';
import {Hero} from './hero';
import {HeroService} from './hero.service';
//providers:[HeroService]

@Component({
  selector: 'my-heroes',
  templateUrl:'./app.component.html',
  styleUrls:['./app.component.css']
})
export class HeroesComponent implements OnInit{
  title = 'Tour of Heroes';
  heroes:Hero[];
  selectedHero: Hero;

  constructor(private heroService:HeroService){}

  getHeroes():void{
    this.heroService.getHeroes().then(heroes=>this.heroes=heroes);
  }

  ngOnInit():void{
    this.getHeroes();
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}
