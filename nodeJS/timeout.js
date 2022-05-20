const timeOut = 3000;
const finished = () => {
    console.log("done!")
};

setTimeout(finished, timeOut); //Não passa o finished como função, senão ela cancela direto