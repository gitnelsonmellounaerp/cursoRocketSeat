/*

    Crie um algoritmo que transforme as notas do sistema numerico em notas de caracteres

    * de 90 para cima - conceito A
    * entre 80 - 89 - conceito B 
    * entre 70-79 - conceito C
    * entre 60-69 - conceito D
    * menor que 60 - conceito F


*/





function getScore(valorNota){
    if (valorNota >= 90){
        console.log("Conceito A");
    }else if (valorNota >= 80 && valorNota <= 89){
        console.log("Conceito B");
    }else if (valorNota >= 70 && valorNota <=79){
        console.log("Conceito C");
    }else if (valorNota >= 60 && valorNota <=69){
        console.log("Conceito D");
    }else{
        console.log("Conceito F")
    }
    
}

console.log(getScore(10));


/*Crie um objeto que irá possuir 2 propriedades
    * receitas: []
    * despesas: []
    

    Cria uma função que irá cálcular o total de despesas e irá mostrar uma mensagem
    se a família está com o saldo positivo ou negadotivo, seguido do valor do saldo


*/

let familia = {

    receitas: [10, 100, 1000],
    despesas: [50, 100, 750]

};

let receitas = {
    receita1: 10,
    receita2: 100,
    receita3: 1000

};
 


let despesas = {

    despesas1: 50,
    despesas2: 100,
    despesas3: 750


};

let totalReceitas = receitas.receita1 + receitas.receita2 + receitas.receita3;
let totalDespesas = despesas.despesas1 + despesas.despesas2 + despesas.despesas3;

function sum(array) {
    let total = 0;

    for(let value of array) {
        total += value;
    }

    return total;
}

function calculateBalance(){
    const calculateReceitas = sum(familia.receitas);
    const calculateDespesas = sum(familia.despesas);

    const total = calculateReceitas - calculateDespesas;

    if(total >= 0){
        return console.log("Seu saldo é posivito e seu saldo é: " + total);
    }else {
        return console.log("Seu saldo é negativo e seu saldo é: " + total);
    }
}

function calculoGastos(totalDespesas, totalreceitas) {

    let saldo = totalreceitas - totalDespesas;

    if(totalReceitas < totalDespesas){
       return console.log("A familia gasta mais do que ganha e seu saldo é: " + saldo + "R$");
       
    }else if (totalReceitas === totalDespesas){
        return console.log("A família tem gasto moderado, mas cuidado. Seu saldo é: " + saldo + "R$");
        
    }else{
        return console.log("A familia faz uma boa gestao das suas economias e seu saldo é: " + saldo + "R$");

    }
}

calculoGastos(totalDespesas, totalReceitas);
calculateBalance();

/*Buscando e encontrando dados de array

    * Contar o número de categorias e o número de livros em cada categoria
    * Constar o número de autores
    * Mostrar livros do autor augusto curry
    * transformas a função acima em uma função que irá receber o nome do autor e a quantidade de livros.

*/

let livroCategoria = [
    {
        categoria: "suspense",
        livros:[
            {
                title: "O tempo e o vento",
                autores: "Erico verissimos"
            },
            {
                title: "Harry Potter",
                autores: "J.K Token"
            },
            {
                title: "poca honstas",
                autores: "Mike Gabriel"
            }
        ]
        
    },
    {
        categoria: "inteligencia emocional",
        livros:[
            {
                title: "Você é insubstituível",
                autores: "Augusto Curry"
            },
            {
                title: "Ansiedade - Como enfrentar o mal do século",
                autores: "Augusto Curry"
            },
            {
                title: "Os 7 hábitos das pessoas altamente eficazes",
                autores: "Stephen R. Covery"
            }
        ]
    }
]

const totalCategories = livroCategoria.length;
console.log("O número total de categorias é: " + totalCategories);

for (let categoria of livroCategoria) {
    console.log("Total de livros da categoria: ", categoria.categoria);
    console.log(categoria.livros.length);
}

function contarAutores(){
    let autores = [];

    for(let categoria of livroCategoria){
        for (let livros of categoria.livros){
            if (autores.indexOf(livros.autores) == -1){
                autores.push(livros.title);

            }
        }
    }

    console.log(autores.length);
}

contarAutores();

function livrosPorAutor(){
    let books = [];

    for(let categoria of livroCategoria){
        for (let livros of categoria.livros){
            if (livros.autores === 'Augusto Curry'){
                books.push(livros.title);

            }
        }
    }

    console.log(books);
}

livrosPorAutor()