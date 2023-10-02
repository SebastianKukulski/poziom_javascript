//1
const header = document.querySelector('header');
header.style.backgroundColor = 'yellow';
//2

const h1InHeader = header.querySelector('h1');


console.log(h1InHeader);


h1InHeader.style.fontFamily = 'Arial Black';
h1InHeader.textContent = 'Preambuła';
//3

const sections = document.querySelectorAll('section');
sections.forEach((section) => {
    section.style.border = '2px solid brown';
});
//4
const h1InSection = document.querySelector('.main_column h1');
console.log(h1InSection);
h1InSection.textContent = 'Specjalność szefa';

//5
const mainColumn = document.querySelector('.main_column');
const pElement = document.createElement('p');
pElement.textContent = 'Kebab na frytkach_-_';
mainColumn.appendChild(pElement);
//6
const footer = document.querySelector('footer');
const divElement = document.createElement('div');
divElement.style.backgroundColor = 'pink';
const pElementInDiv = document.createElement('p');
pElementInDiv.style.textAlign = 'center';
pElementInDiv.textContent = '©';
divElement.appendChild(pElementInDiv);
footer.appendChild(divElement);
 //7
const kolumnaIII = document.querySelector('section.side_column:nth-child(3)');
const h1ToRemove = kolumnaIII.querySelector('h1');
h1ToRemove.remove();

//8
const newSection = document.createElement('section');
newSection.style.border = '2px dotted blue';
newSection.style.padding = '10px 20px';
newSection.textContent = 'Zderzak';
document.body.appendChild(newSection);