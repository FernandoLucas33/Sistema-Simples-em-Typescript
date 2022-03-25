import { Negociacao } from "./negociacao.js";
//Array<Negociacao> e a mesma coisa Negociacao [] 
export class Negociacoes {
    private negociacoes: Negociacao [] = [];

    public adiciona( negociacao: Negociacao){
            this.negociacoes.push(negociacao);

    }

    //ReadonlyArray<Negociacao> e a mesma coisa readonly Negociacao []
    public lista(): readonly Negociacao [] {
        return this.negociacoes;

    }
}
