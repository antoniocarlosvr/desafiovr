
export class ProdutoLoja {
    id: number = 0;
    produto: number = 0;
    loja: number = 0;
    precovenda: number = 0;

    constructor(id:number, produto:number, loja:number, precovenda:number) {
        this.id = id;
        this.produto = produto;
        this.loja = loja;
        this.precovenda = precovenda;
    }
}


export interface ProdutoLoja {
    id: number;
    produto: number;
    loja: number;
    precovenda: number;
}