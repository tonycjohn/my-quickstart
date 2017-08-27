import {Component, OnInit} from '@angular/core';

import {Hero} from './hero';
import {HeroService} from './hero.service';

@Component({
  selector:'my-dashboard',
  templateUrl:'./dashboard.component.html'
})

export class DashboardComponent implements OnInit{
  heroes:Hero[]=[];
  callCounter=0;
  constructor(private heroService:HeroService){}

  ngOnInit():void{
    this.heroService.getHeroes().then(heroes=>this.heroes=heroes.slice(1,5));
    this.callCounter++;
  }
}
