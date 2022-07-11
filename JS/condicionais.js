/* Mesma coisa que todo o resto, no entando pode declarar condicoes dentro de variaveis*/


let temperature = 37.5;
let highTemperature = temperature >= 38.5;
let mediumTemperature = temperature > 36.5 && temperature < 38.5;


if (highTemperature){
    console.log("Temperatura alta");
}else if (mediumTemperature){
    console.log("Temperatura media");

}else {
    console.log("Temperatura Baixa");
}

//switch case 


function calculadora(number1, operator, number2) {

    let result;

    switch (operator){
        case '+' :
            result = number1 + number2;
            break;
        case '-' :
            result = number1 - number2;
            break;
        case '*' :
            result = number1 * number2;
            break;
        case '/' :
            result = number1 / number2;
            break;
        default :
            console.log("Nao implementado");

    }

    return result;

}

console.log(calculadora(1, "+", 2));

//estrutura de repeticao for

/* break - para a execucao do loop
   continue - pula aquela linha de codigo

for(let i = 0; i < 10; i++){

    if(i === 5){
        break;
    }

}

for(let i = 0; i < 10; i++){

    if(i === 5){
        break; vai parar a execucao quando chegar no 5
    }

}

for(let i = 0; i < 10; i++){

    if(i === 5){
        continue; vai pular o 5 e vai continuar a execucao normal
    }

}


*/

let testeName = "Nelson";

for(let i = 0; i < 10; i++){

    console.log(testeName);

}

/* for of  */

let name = 'Nelson';
let names = ['joao', 'paulo', 'pedro'];


for (let char of names){
    console.log(char);
}

/*for in pega uma propriedade de um objeto */

let person = {

    name:'Nelson',
    age:'30',
    height:'1.80'
}

for (let property in person){
    console.log(property);
    console.log(person[property]);
}