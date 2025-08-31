//1. parent node 
const mainContainer = document.getElementById('main-container')
console.log(mainContainer)


// 2. create child node 
const placesSection = document.createElement('section')

//create h1
const h1 = document.createElement('h2');
h1.innerText ='Places i Want to visit ';
placesSection.appendChild (h1);


const ul = document.createElement('ul');


const li1 = document.createElement('li');
li1.innerText='badorbon';
ul.appendChild(li1);

const li2 = document.createElement('li');
li2.innerText='Dhaka';
ul.appendChild(li2);



placesSection.appendChild(ul);




// 3. append placeSection to the mainContainer

mainContainer.appendChild(placesSection)



//easir to create HTMl

const bookSection = document.createElement('section');
bookSection.innerHTML=`
<h1> Books i need to read </h1>
<ul>
    <li>Physics</li>
    <li>Chemistry</li>
</ul>
`

mainContainer.appendChild(bookSection)

