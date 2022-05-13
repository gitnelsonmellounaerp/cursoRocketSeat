// exemplo de objeto
const person = {
 name: "Nelson",
 idade: 31,
 weight: 101.20,
 isAdmin: true
};

// exemplo de array
const animals = [
    'lion',
    'cat',
    'monkery',

    //colocando um objeto dentro do array

    {
        name: 'cat',
        age: 3
    }

];

let age, isHuman; // agrupamento de variaveis
age = 18;
isHuman = true;

console.log("A variavel age é do tipo: " + typeof age + " . E seu valor é: " + age); 
console.log("A variavel isHuman é do tipo: " + typeof isHuman + " . E seu valor é: " + isHuman);
console.log("O nelson tem " + age + " Anos e sera que é humano? " + isHuman); //imprimindo variaveis concatenando com texto

//imprimindo objetos seus atributos
console.log(person);
console.log(person.name);
console.log(person.idade);
console.log(person.weight);
console.log(person.isAdmin);

//imprimindo arrays e seus atributos

console.log(animals);
console.log("Tamanho do array: " + animals.length);
console.log("posicao 1 " + animals[0]);
console.log("posicao 2 " + animals[1]);
console.log("posicao 3 "  + animals[2]);

//imprimindo objeto dentro do array

console.log(animals[3].name);
console.log(animals[3].age);
