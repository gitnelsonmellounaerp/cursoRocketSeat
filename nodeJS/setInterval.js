// executa uma função a cada x ms

const timeOut = 1000;
const checking = () => {
    console.log('Checking');
};

let interval = setInterval(checking, timeOut);

//clearInterval (cacelar um intervalo que foi setado antes)

setTimeout(() => clearInterval(interval), 4000);