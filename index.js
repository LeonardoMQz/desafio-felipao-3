class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar() {
        let ataque;

        if (this.tipo === "mago") {
            ataque = "magia";
        } else if (this.tipo === "guerreiro") {
            ataque = "espada";
        } else if (this.tipo === "monge") {
            ataque = "artes marciais";
        } else if (this.tipo === "ninja") {
            ataque = "shuriken";
        } else {
            ataque = "usou um ataque desconhecido"; 
        }

        console.log(`O ${this.tipo} atacou usando ${ataque}`);
    }
}

const nomeHeroi = "Leo";
const idadeHeroi = 23;
const tipoHeroi = "mago";

const heroiPersonalizado = new Heroi(nomeHeroi, idadeHeroi, tipoHeroi);

heroiPersonalizado.atacar();
