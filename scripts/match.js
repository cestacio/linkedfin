const namesList = document.querySelector('[data-names]');

const people = [
  { name: 'Bob Day', level: 'C1', location: 'PHL' },
  { name: 'Jane Doe', level: 'C1', location: 'SEA' },
  { name: 'Joseph Wachowski', level: 'A2', location: 'PHL' },
  { name: 'Miki Hashamoto', level: 'M3', location: 'ATL' },
  { name: 'Selena Garcia-Rodriguez lliijiilj', level: 'V1', location: 'CHI' },
  { name: 'Katie Lutz', level: 'P2', location: 'HOU' },
  { name: 'Trevor Daniel', level: 'C2', location: 'DAL' },
  { name: 'Chris Van Pelt', level: 'A1', location: 'SFO' },
  { name: 'Connor McGregor', level: 'M1', location: 'LAX' },
  { name: 'Zachary Johnson', level: 'V4', location: 'CHI' },
  { name: 'Stephanie Stephenson', level: 'P1', location: 'SFO' },
  { name: 'Ryan Smith', level: 'C2', location: 'NYC' },
  { name: 'Mara De La Luna', level: 'M2', location: 'HOU' }
];

function selectNames() {
  const duplicates = [];
  for (let i = 0; i < 5; i++) {
    let selectedName = people[getRandomIndex()].name;
    if (duplicates.includes(selectedName)) {
      i--;
      continue;
    }
    duplicates.push(selectedName);
    makeElement('li', selectedName);
  }
}

function makeElement(element, selectedName) {
  let node = document.createElement(element); // Create a <li> node
  let link = document.createElement('a'); // create an <a> tag
  let textnode = document.createTextNode(selectedName); // Create a text node
  link.setAttribute('href', './user_profile_new.html');
  link.appendChild(textnode);
  node.appendChild(link);
  node.classList.add('list-group-item');
  namesList.appendChild(node);
}

const getRandomIndex = () => Math.floor(Math.random() * people.length);

document.getElementById('new-fins').addEventListener('click', () => {
  namesList.innerHTML = '';
  selectNames();
});

selectNames();
