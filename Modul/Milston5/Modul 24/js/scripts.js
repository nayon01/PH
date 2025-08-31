// const sections = document.getElementsByTagName('section');
// const sections = document.querySelectorAll('.list')
// console.log(sections);
let game = 'Maradona'

// create element and set innerText or innerHTML
const newChild = document.createElement('li')
newChild.innerText = game

// find the parent where you will add the child
const playersList = document.getElementById('player-list')


// append the child  to the parent
playersList.appendChild(newChild);