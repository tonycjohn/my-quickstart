import { Component,OnInit } from '@angular/core';
import {Hero} from './hero';
import {HeroService} from './hero.service';
//providers:[HeroService]

@Component({
  selector: 'my-heroes',
  templateUrl:'./heroes.component.html',
  styleUrls:['./heroes.component.css']
})
export class HeroesComponent implements OnInit{
  filterName='';
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
    //window.document.getElementById("heroDetail").focus();
  }
}
