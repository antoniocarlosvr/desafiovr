import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Loja } from '../models/Loja.model';

@Injectable({
  providedIn: 'root'
})
export class LojaService {

  private url = "http://localhost:8080/loja"

  constructor(private _httpClient: HttpClient) { }

  addLoja(loja: Loja): Observable<Loja[]> {
    const _url = `${this.url}/criar`
    return this._httpClient.post<Loja[]>(_url,loja);
  }

  getLojas(): Observable<Loja[]> {
    const _url = `${this.url}/listar`
    return this._httpClient.get<Loja[]>(_url);
  }

  updateLoja(loja:Loja) : Observable<Loja[]>{
    const update = `${this.url}/atualizar`;
    return this._httpClient.patch<Loja[]>(update,loja);
  }
}