import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProdutoLoja } from '../models/ProdutoLoja.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProdutoLojaService {

  private url = "http://localhost:8080/produto-loja"

  constructor(private _httpClient: HttpClient) { }

  addProdutoLoja(produtoLoja: ProdutoLoja) : Observable<ProdutoLoja[]> {
    const _url = `${this.url}/criar`;
    return this._httpClient.post<ProdutoLoja[]>(_url,produtoLoja);
  }

  getProdutoLojas() : Observable<ProdutoLoja[]> {
    const _url = `${this.url}/listar`;
    return this._httpClient.get<ProdutoLoja[]>(_url);
  }

  getProdutoLojasById(id:any) : Observable<ProdutoLoja[]> {
    const _url = `${this.url}/${id}`;
    return this._httpClient.get<ProdutoLoja[]>(_url);
  }

  updateProdutoLoja(produtoLoja:ProdutoLoja) : Observable<ProdutoLoja[]>{
    const _url = `${this.url}/atualizar`;
    return this._httpClient.patch<ProdutoLoja[]>(_url,produtoLoja);
  }
}
