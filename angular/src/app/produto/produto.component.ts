import { Component, OnInit, numberAttribute } from '@angular/core';
import { ProdutoService } from '../services/produto.service';
import { Produto } from '../models/Produto.model';
import { Loja } from '../models/Loja.model';
import { ProdutoLoja } from '../models/ProdutoLoja.model';
import { LojaService } from '../services/loja.service';
import { ProdutoLojaService } from '../services/produtoloja.service';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent implements OnInit {

  escolhaprecoVenda: boolean = false;

  public produtos: Produto[] = [];
  produto: Produto = {
    id: 0,
    descricao: "",
    custo: 0,
    status: true
  }

  public lojas: Loja[] = []
  loja: Loja = {
    id: 0,
    descricao: ""
  }
  
  public produtolojas: ProdutoLoja[] = [];
  produtoloja: ProdutoLoja = {
    id: 0,
    produto: this.produto.id,
    loja: this.loja.id,
    precovenda: 0
  }

  ngOnInit(): void {
    this._produtoService.getProdutos().subscribe((retorno) => {
      this.produtos = retorno
      console.log(this.produtos)
    });

    this._lojaService.getLojas().subscribe((retorno) => {
      this.lojas = retorno
      console.log(this.lojas)
    });

    this._produtolojaService.getProdutoLojas().subscribe((retorno) => {
      this.produtolojas = retorno
      console.log(this.produtolojas)
    });
  }

  constructor(private _produtoService: ProdutoService, private _lojaService: LojaService, private _produtolojaService: ProdutoLojaService) { }

  add() {
    console.log(this.produto)
    this._produtoService.addProduto(this.produto).subscribe(
      produto => { this.produto = new Produto(0, "", 0, true) },
      err => { console.log("ERRO = Cadastro inválido!") }
    )

    this.produtoloja.produto = this.produto.id;

    window.location.href = "/produto";
  }

  produtoSelecionado: Produto | null = null;

  salvarProdutoLoja() {
    this.produtoloja.produto = this.produto.id
    
    this._produtolojaService.addProdutoLoja(this.produtoloja).subscribe(
      produtoloja => { this.produtoloja = new ProdutoLoja(0, this.produto.id, this.loja.id, 0) },
      err => { console.log("ERRO = Cadastro inválido!") }
    )

    console.log(this.produtoloja)
  }
  
  update(id: number) {
    this._produtoService.updateProduto(this.produto).subscribe(

      produto => { this.produto = new Produto(0, "", 0, true) },
      err => { console.log("ERRO = Atualização inválida!") }
    );

    this._produtoService.atualizarStatus(this.produto).subscribe(
      produto => { this.produto = new Produto(0,"",0,true) },
      err => { console.log("ERRO = exclusão de inatividade!") }
    );

    window.location.href = "/produto";
  }
  
  produtoAdd: Produto | null = null;


  addProduto(produto: Produto): void {
    this.produto = produto;
  }

  modalEditarAberto = true;
  setProduto(produto: Produto): void {
    this.produto = produto;
    this.modalEditarAberto = true;
  }

  status: boolean = true;

  id: number = 0;

  opcaoSelecionado: boolean = this.produto.status;

  divAdicionar: boolean = true;
  divEditar: boolean = false;

  adicionar(): void {
    this.divAdicionar = true;
    this.divEditar = false;
  }

  editar(): void {
    this.divAdicionar = false;
    this.divEditar = true;
  }
}
