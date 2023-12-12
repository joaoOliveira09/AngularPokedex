import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pokemon } from '../interfaces/pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private httpClient: HttpClient) {
  }



 carregarPokemons(): Observable<{ results: Pokemon }> {
    return this.httpClient.get<{ results: Pokemon }>('https://pokeapi.co/api/v2/pokemon?limit=151')
  }
}
