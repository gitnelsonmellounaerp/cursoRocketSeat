module.exports = "Enviando dados do meu módulo";

function getFlags(flags) {

    const index = process.argv.indexOf(flags) + 1;
    return process.argv[index];
    
};

module.exports = getFlags;