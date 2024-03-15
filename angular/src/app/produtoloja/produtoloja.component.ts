import { Component } from '@angular/core';
import { ProdutoLojaService } from '../services/produtoloja.service';
import { ProdutoLoja } from '../models/ProdutoLoja.model';
import { Produto } from '../models/Produto.model';
import { Loja } from '../models/Loja.model';
import { LojaService } from '../services/loja.service';

@Component({
  selector: 'app-produtoloja',
  templateUrl: './produtoloja.component.html',
  styleUrls: ['./produtoloja.component.css']
})
export class ProdutolojaComponent {

  query: string = '';

  public produtos: Produto[] = [];
  produto: Produto = {
    id: 0,
    descricao: "",
    custo: 0,
    status: true
  }

  public lojas: Loja[] = [];
  loja : Loja = {
    id: 0,
    descricao: ""
  }

  public produtolojas: ProdutoLoja[] = [];
  produtoloja: ProdutoLoja = {
    id: 0,
    produto: 0,
    loja: 0,
    precovenda: 0
  }
  
  ngOnInit(): void {
    console.log(this.query)
    this._lojaService.getLojas().subscribe((retorno) => {
      this.lojas = retorno
      console.log(this.lojas)
    }),
    this._produtolojaService.getProdutoLojas().subscribe((retorno) => {
      this.produtolojas = retorno
      console.log(this.produtolojas)
    });

  }

  constructor(private _lojaService: LojaService, private _produtolojaService: ProdutoLojaService) {}

  search(query: string) {
    this.lojas = this.lojas.filter(loja => loja.descricao.toLowerCase().includes(query.toLowerCase()));
    this.produtos = this.produtos.filter(produto => produto.descricao.toLowerCase().includes(query.toLowerCase()));
  }

  modalEditarAberto = true;
  setProdutoLoja(produtoloja: ProdutoLoja): void {
    this.produtoloja = produtoloja;
    this.modalEditarAberto = true;
  }

  add() {
    console.log(this.produtoloja)
    this._produtolojaService.addProdutoLoja(this.produtoloja).subscribe(
      produtoloja => { this.produtoloja = new ProdutoLoja(0, 0, 0, 0) },
      err => { console.log("ERRO = Cadastro inválido!") }
    )
    
    window.location.href = "/";
  }

  update(id: number) {
    if (id != null) {
      this._produtolojaService.updateProdutoLoja(this.produtoloja).subscribe(
        
        produtoloja => { this.produtoloja = new ProdutoLoja(0, 0, 0, 0) },
        err => { console.log("ERRO = Atualização inválida!") }
      );
  
      window.location.href = "/";
    }
  }

  addProdutoLoja(produtoloja: ProdutoLoja): void {
    this.produtoloja = produtoloja;
  }

}
