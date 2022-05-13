// declaração de funçõces

function frasesMotivacionais() {

    console.log("Estudar é muito bom");
    console.log("Paciência e persistência");
    console.log("Revisão é a mãe do aprendizado");
};

frasesMotivacionais(); // chamada de função

//declaração de variaveis 

/* 

var = Funciona em todos os escopos, undefined se colocado em um escopo que chama ela antes
let e const = são variáveis locais (podem ser global ou dentro de um escopo)


*/

let a = 10;
let b = 10;


//função com 1 tipo de retorno
function calculos(a, b){

     return a + b;

};

console.log(calculos(a, b));

//função com outro tipo de retorno (Não é boa prática ou usar com cuidado)

function calculos(a, b){

    total = a + b;
    return total; 

}
console.log(total);

// funçoes anônimas

const sum = function (num1, num2) {

    return console.log(num1 + num2);
}

sum(5,5);


/*Escopos de funções

    Quando a função tem parâmetro, mantém-se o valor da variável declarada anteriormento
    Quando a função não tem parâmentro, ela sobrescreve o valor da vaŕiavel

    Olhar Exemplos 1 e 2

*/ 

// exemplo 01
let subject = 'Create a video';

function createThink(){
    subject = 'study';
    return subject
}

console.log(subject); // imprime o valor original de subject
console.log(createThink(subject)); // substitui o valor da variavel 
console.log(subject); // comprova no log que o valor mudou / atualiza valor de fora

//exemplo 02
let subject2 = 'create a audio player';

function createThink2(subject){
    subject = 'study2';
    return subject;
}

console.log(subject2); // imprime o valor original de subject2
console.log(createThink2(subject2)); //atribui um valor subject2 localmente, não mudando o valor da variavel subject2
console.log(subject2); // imprime o valor original de subject2 / não altera valor de fora


//arrow function

const sayMyName = () => {
    console.log("antes de executar o callback");
}

sayMyName();

//callback function ou funcoes recursivas

function testeName(name){
    console.log("Antes da callback");

    function nameTeste (){
        console.log("esotu na callback");
    }

    nameTeste();

    console.log("depois da callback");
}

testeName();

//funcao construtura

function Person (name){

    this.name = name;
    this.walk = function (){
        return "andando";
    }

}

const nelson = new Person("Nelson");
console.log(nelson);
console.log(nelson.walk());

/* type conversion*/

console.log(Number("9") + String(5));

/*Exercicio*/

let word = "parametro";
console.log(word.length);


let numberTeste = 1234;
console.log(String(numberTeste).length); // pra contar quantos digitos tem.

let numberTeste2 = 3213214.3214124;
console.log(numberTeste2.toFixed(2).replace(".", ",")); // toFixed(numero) quantas casas depois da virgula

/*Verificar se o texto tem uma palavra especifica*/

let phrase = "Eu meu chamo Nelson";
console.log(phrase.includes("Nelson")); // includes é case sensitive
let myArray = phrase.split(" ") //separa os elementos usando o espaço como parâmentro
console.log(myArray);
let phraseWithUnderScore = myArray.join("_");
console.log(phraseWithUnderScore);