// const names = [
//   'Bob',
//   'Jane',
//   'Joseph',
//   'Miki',
//   'Selena',
//   'Katie',
//   'Trevor',
//   'Chris',
//   'Connor',
//   'Zachary',
//   'Stephanie',
//   'Ryan',
//   'Mara'
// ];

// These functions go with the user profile page

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

function populateUserProfile() {
  const personInfo = document.querySelector('[data-person-info]');
  const random = people[Math.floor(Math.random()*people.length)];
  addElement(personInfo, 'h4', random.name);
  addElement(personInfo, 'p', random.level);
  addElement(personInfo, 'p', random.location);
}

function addElement(element, attr, text) {
  let node = document.createElement(attr);
  let textnode = document.createTextNode(text);
  node.appendChild(textnode);
  node.classList.add('card-title')
  element.appendChild(node);
}

populateUserProfile();



// node.appendChild(textnode);                              // Append the text to <li>
// document.getElementById("myList").appendChild(node);
