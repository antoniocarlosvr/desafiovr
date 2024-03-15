import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Produto } from '../models/Produto.model';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  private url = "http://localhost:8080/produto"

  constructor(private _httpClient: HttpClient) { }

  addProduto(produto: Produto) : Observable<Produto[]> {
    const _url = `${this.url}/criar`;
    return this._httpClient.post<Produto[]>(_url,produto);
  }

  getProdutos() : Observable<Produto[]> {
    const _url = `${this.url}/listar`;
    return this._httpClient.get<Produto[]>(_url);
  }

  getProdutosById(id:any) : Observable<Produto[]> {
    const _url = `${this.url}/${id}`;
    return this._httpClient.get<Produto[]>(_url);
  }

  updateProduto(produto:Produto) : Observable<Produto[]>{
    const _url = `${this.url}/atualizar`;
    return this._httpClient.patch<Produto[]>(_url,produto);
  }

  atualizarStatus(produto:Produto) : Observable<Produto[]> {
    const _url = `${this.url}/status`;
    const options = {
      body: produto
    }
    return this._httpClient.delete<Produto[]>(_url,options);
  }
}
