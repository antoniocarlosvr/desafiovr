import { Component, OnInit } from '@angular/core';
import { Loja } from '../models/Loja.model';
import { LojaService } from '../services/loja.service';
import { Produto } from '../models/Produto.model';
import { ProdutoLoja } from '../models/ProdutoLoja.model';
import { ProdutoLojaService } from '../services/produtoloja.service';

@Component({
  selector: 'app-loja',
  templateUrl: './loja.component.html',
  styleUrls: ['./loja.component.css']
})
export class LojaComponent  implements OnInit{
  
  //public loja: Loja = new Loja(0,"");
  public lojas: Loja[] = [];
  loja : Loja = {
    id: 0,
    descricao: ""
  }

  public produtos: Produto[] = [];
  produto: Produto = {
    id: 0,
    descricao: "",
    custo: 0,
    status: true
  }

  public produtolojas: ProdutoLoja[] = [];
  produtoloja: ProdutoLoja = {
    id: 0,
    produto: this.produto.id,
    loja: this.loja.id,
    precovenda: 0
  }

  ngOnInit(): void {
    this._lojaService.getLojas().subscribe((retorno) => {
      this.lojas = retorno
      console.log(this.lojas)
    }),
    this._produtolojaService.getProdutoLojas().subscribe((retorno) => {
      this.produtolojas = retorno
      console.log(this.produtolojas)
    });
  }
  
  constructor(private _lojaService: LojaService, private _produtolojaService: ProdutoLojaService) { }
  
  add() {
    this._lojaService.addLoja(this.loja).subscribe(
      loja => {this.loja = new Loja(0,"")},
      err => {console.log("ERRO = Cadastro inválido!")}
    );
    window.location.href = "/loja";
  }

  update(id:number) {

    if (id != null) {
      this._lojaService.updateLoja(this.loja).subscribe(
        loja => {this.loja = new Loja(0,"")},
        err => {console.log("ERRO = Atualização inválida!")}
      );
      window.location.href = "/loja";
    }
    
  }

  addLoja(loja: Loja): void {
    this.loja = loja;
  }

  modalEditarAberto = true;
  setLoja(loja: Loja): void {
    this.loja = loja;
    this.modalEditarAberto = true;
  }
}