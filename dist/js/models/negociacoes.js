//Array<Negociacao> e a mesma coisa Negociacao [] 
export class Negociacoes {
    constructor() {
        this.negociacoes = [];
    }
    adiciona(negociacao) {
        this.negociacoes.push(negociacao);
    }
    //ReadonlyArray<Negociacao> e a mesma coisa readonly Negociacao []
    lista() {
        return this.negociacoes;
    }
}
