



const liste = document.querySelector('.premier-titre');
liste.innerText = 'Hello to the whole world';
const allItem = document.querySelectorAll('li');

const parent = document.querySelector('.parent');
parent.innerHTML = '<h1>text</h1>';



let newItem = document.createElement('li');
newItem.innerText = 'Nouvel item !';
liste.appendChild(newItem);

liste.remove();