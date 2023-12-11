import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private httpClient: HttpClient) {
    this.carregarPokemons().subscribe
  }

 carregarPokemons(): Observable<any> {
  const requisicao = this.httpClient.get<any>('https://pokeapi.co/api/v2/pokemon/ditto/?limit=151')

  console.log(requisicao)
  return requisicao
  }
}
