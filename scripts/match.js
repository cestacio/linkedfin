const namesList = document.querySelector('[data-names]');

const people = [
  {name: 'Bob', level: 'C1', location: 'PHL'},
  {name: 'Jane', level: 'C1', location: 'SEA'},
  {name: 'Joseph', level: 'A2', location: 'PHL'},
  {name: 'Miki', level: 'M3', location: 'ATL'},
  {name: 'Selena', level: 'V1', location: 'CHI'},
  {name: 'Katie', level: 'P2', location: 'HOU'},
  {name: 'Trevor', level: 'C2', location: 'DAL'},
  {name: 'Chris', level: 'A1', location: 'SFO'},
  {name: 'Connor', level: 'M1', location: 'LAX'},
  {name: 'Zachary', level: 'V4', location: 'CHI'},
  {name: 'Stephanie', level: 'P1', location: 'SFO'},
  {name: 'Ryan', level: 'C2', location: 'NYC'},
  {name: 'Mara', level: 'M2', location: 'HOU'}
]

function selectNames() {
  const duplicates = [];
  for (let i = 0; i < 5; i++) {
    let selectedName = people[getRandomIndex()].name;
    if (duplicates.includes(selectedName)) {
      i--;
      continue;
     }
    duplicates.push(selectedName);
    makeElement("li", selectedName);
  }

}

function makeElement(element, selectedName) {
  let node = document.createElement(element);                 // Create a <li> node
  let textnode = document.createTextNode(selectedName);         // Create a text node
  node.appendChild(textnode);
  namesList.appendChild(node);
}

const getRandomIndex = () => Math.floor(Math.random()*people.length);


document.getElementById("new-fins").addEventListener("click", () => {
  namesList.innerHTML = "";
  selectNames();
});

selectNames();
