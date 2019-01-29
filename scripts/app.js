const names = [
  'Bob',
  'Jane',
  'Joseph',
  'Miki',
  'Selena',
  'Katie',
  'Trevor',
  'Chris',
  'Connor',
  'Zachary',
  'Stephanie',
  'Ryan',
  'Mara'
];

const namesList = document.querySelector('[data-names]');
const duplicates = [];
let arrayOfNames = [];
for (let i = 0; i < 5; i++) {
  let selectedName = names[Math.floor(Math.random()*names.length)];
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

// node.appendChild(textnode);                              // Append the text to <li>
// document.getElementById("myList").appendChild(node);
