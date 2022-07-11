//getElementById() e getElementByclassName() - perga nome do elemento pelo id / pega elemento pela classe 

const classes = document.getElementsByClassName('title'); //(retorna uma html collection)
console.log(classes);

const title = document.getElementById('teste-title'); //(retorna um elemento)
console.log(title);

// getElementByTagName() - pegar os elementos pela tag html (retorna um html)

const elementMeta = document.getElementsByTagName ('meta'); //(retorna uma html collection)
console.log(elementMeta);

//querySelector() pega o primeiro que encontrar - querySelectorAll() - pega todos os que ele achar 

const seletor = document.querySelector('.title'); //retorna um elemento e pega o primeiro que ele achar e pode ser qualquer seletor
console.log(seletor);

const seletor2 = document.querySelector('[src]'); //retorna um elemento
console.log(seletor2);

const seletor3 = document.querySelectorAll('#teste-title'); //(retorna um nodelist)
console.log(seletor3);

// textContent - Altera o conteúdo de um texto 

const alteraTexto = document.querySelector('h1');
alteraTexto.textContent += ' olá mundo'; //altera no html visivel (+= concatena com o que já tem) /innerText - altera o texto interno (mesma coisa que o textContent)
console.log(alteraTexto);


// manipulacao de atributos setAtribute('id', 'valueOfAtribute',)

const colocaId = document.querySelector('.teste');
colocaId.setAttribute("id", "teste");
const divID = document.querySelector('#teste')
console.log(divID);

colocaId.removeAttribute("id"); // remove o atributo 

// alterando atributos com style

const selectorBody = document.querySelector('body');
console.log(selectorBody.parentNode); // pega o elemento pai (ou seja o html) - pode ser também parentElement
selectorBody.style.backgroundColor = "grey";


//css com classList (ele pega uma classe css e adiciona na tag) - pode adicionar mais de uma 

const classListTest = document.querySelector('h2');
classListTest.classList.add("classList");
classListTest.classList.toggle("classList"); //toggle se as classe existir, ele tira, se não existir ele coloca