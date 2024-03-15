export class Loja {
    id: number = 0;
    descricao: string = "";

    constructor(id:number, descicao:string) {
        this.id = id;
        this.descricao = descicao;
    }
}

export interface Loja{
    id: number;
    descricao: string;
}