
export class Produto {
    id: number = 0;
    descricao: string = "";
    custo: number = 0;
    status: boolean = true;

    constructor(id:number, descicao:string, custo:number, status:boolean) {
        this.id = id;
        this.descricao = descicao;
        this.custo = custo;
        this.status = status;
    }
}


export interface Produto {
    id: number;
    descricao: string;
    custo: number;
    status: boolean;
}