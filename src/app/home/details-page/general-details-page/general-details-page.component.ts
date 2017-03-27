import { Component, OnInit } from '@angular/core';

import { Hero } from './../../../models/hero';

@Component({
  selector: 'app-general-details-page',
  templateUrl: './general-details-page.component.html',
  styleUrls: ['./general-details-page.component.scss']
})
export class GeneralDetailsPageComponent implements OnInit {
  heroesList: Array<Hero> = [];
  headers: Array<string> = ['name', 'type', 'agility', 'strength', 'intelligence', 'carry', 'gank', 'support'];
  herosInfo: Array<any> = [
    {
      name: 'Anti-Mage',
      type: 'melee',
    },
    {
      name: 'Axe',
      type: 'melee',
    },
    {
      name: 'Weaver',
      type: 'range',
    },
    {
      name: 'Bane',
      type: 'range',
    },
    {
      name: 'Drow',
      type: 'range',
    },
    {
      name: 'CM',
      type: 'range',
    },
    {
      name: 'Earthshaker',
      type: 'melee',
    },
    {
      name: 'Jugg',
      type: 'melee',
    },
    {
      name: 'SF',
      type: 'range',
    },
    {
      name: 'Pudge',
      type: 'melee',
    },
  ];

  constructor() { }

  randomStatsGenerator() {
    return Math.floor(Math.random()*100);
  }

  heroesListConstructor() {
    for (var i = 0; i < 10; i++) {
      this.heroesList.push({
        name: this.herosInfo[i].name,
        type: this.herosInfo[i].type,
        agility: this.randomStatsGenerator(),
        strength: this.randomStatsGenerator(),
        intelligence: this.randomStatsGenerator(),
        gank: this.randomStatsGenerator(),
        carry: this.randomStatsGenerator(),
        support: this.randomStatsGenerator(),
      })
    }
  }

  ngOnInit() {
    this.heroesListConstructor();
  }

}
