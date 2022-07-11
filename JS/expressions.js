/* expressão 'new' cria um novo objeto */

let name = new String("Nelson");
let age = new Number(31);
let date = new Date();

console.log(name, age);
console.log(date.getDate() + "/" + (date.getMonth()+1)  + "/" + date.getFullYear());

/*Operador Unarios
    typeof
    delete
*/

const person = {
    name: "Nelson",
    age: 31,
}

console.log(person);
console.log(typeof person);
delete person.name;
console.log(person);


/* Operadores de comparacao

    == compara apenas os valores (mesma coisa no php)
    === compara os valores e os tipos
    exmeplo:

    let number1 = 1;
    console.log(number1 == "1"); -> resposta é true
    console.log(number1 === "1"); -> resposta é false

*/

/* Operador condicional ternarios

    condicional ? return Se for true : else return
*/

let pao = true;
let queijo = false;

const niceBreakFast = pao && queijo ? "Café da manhã bom" : "café da manhã ruim";
console.log(niceBreakFast);