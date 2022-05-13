let array = new Array ("a", "b", "c", "d", "e", "f");
console.log(array);

// contar elementos de um array

console.log(array.length);

// transformar cadeia de caracteres em elementos de um array

let word = "manipulacao";

console.log(Array.from(word));

//adicionar um item no fim do array

console.log(array.push("g"));
console.log(array);

//colocando um elemento no inicio do array
console.log(array.unshift("9"));
console.log(array);

//remover um elemento do fim do array

console.log(array.pop());
console.log(array);

//remover um elemento do inicio do array

console.log(array.shift());
console.log(array);

//pegar apenas alguns elementos do array

console.log(array.slice(1, 3));

//remover 1 ou mais itens em qualquer posicao do array

console.log(array.splice(1, 1)); // primeiro argumento é a posição e quantos elementos quer tirar
console.log(array);

//encontrar a posição de um elemento do array

let arrayIndex = array.indexOf("e");
console.log(arrayIndex);