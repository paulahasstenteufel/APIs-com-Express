const fs = require('fs');

function callback(erro) {
    if (erro) {
        // Informar ao usuário que a gravação falhou
    } else {
        // Informar ao usuário que a gravação deu certo
    }
}

class Pessoa {
    constructor(nome, cargo) {
        this.nome = nome; // propriedade nome
        this.cargo = cargo; // propriedade cargo
    }

    arquivar() { // método
        const informacao = this.nome + ", " + this.cargo;
        fs.appendFile('usuario.txt', informacao, 'utf8', callback);
    }
}

let humano = new Pessoa("Marco", "Motorista");
humano.arquivar();
