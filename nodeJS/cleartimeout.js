//cancela um timeout

const timeOut = 3000;
const finished = () => {
    console.log("done!")
};

let timer = setTimeout(finished, timeOut); //para utilizar precisa armazenar o timeout dentro de uma variavel 
clearTimeout(timer); 