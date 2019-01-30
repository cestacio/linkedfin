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
  let arrayOfNames = [];
  for (let i = 0; i < 5; i++) {
    let selectedName = people[Math.floor(Math.random()*people.length)].name;
    if (duplicates.indexOf(selectedName) !== -1) {
      i--;
      continue;
     }
    duplicates.push(selectedName);
    var node = document.createElement("LI");                 // Create a <li> node
    var textnode = document.createTextNode(selectedName);         // Create a text node
    node.appendChild(textnode);
    namesList.appendChild(node);
  }
}

document.getElementById("new-fins").addEventListener("click", () => {
  namesList.innerHTML = "";
  selectNames();
});

selectNames();
