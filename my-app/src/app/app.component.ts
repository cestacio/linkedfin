import { Component } from '@angular/core';
import { People } from './list-people';

const getRandomIndex = () => Math.floor(Math.random() * People.length);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // matched = true;
  duplicates = [];

  randomize() {
    const randomFins = [];
    for (let i = 0; i < 5; i++) {
      let selectedFin = People[getRandomIndex()];
      if (this.duplicates.includes(selectedFin.name)) {
        i--;
        continue;
      }
      this.duplicates.push(selectedFin.name);
      randomFins.push(selectedFin);
    }
    return randomFins;
  }

  randomPeople = this.randomize();

  onButtonClick() {
    this.randomPeople = this.randomize();
    this.duplicates = [];
  }
}
