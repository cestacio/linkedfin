import { Component, OnInit } from '@angular/core';
import { PEOPLE } as people from '../list-people';

const getRandomIndex = () => Math.floor(Math.random()*people.length);
const duplicates = [];

@Component({
  selector: 'app-interest',
  templateUrl: './interest.component.html',
  styleUrls: ['./interest.component.css']
})
export class InterestComponent implements OnInit {

  constructor() { }

  randomize() {
    const randomFins = [];
    for (let i = 0; i < 5; i++) {
      let selectedFin = people[getRandomIndex()];
      if (duplicates.includes(selectedFin.name)) {
        i--;
        continue;
       }
      duplicates.push(selectedFin.name);
      randomFins.push(selectedFin);
    }
    return randomFins;
  }

  randomPeople = randomize();
  onButtonClick() {
    this.randomPeople = randomize();
  }

}
