import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../services/pokemon.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.sass']
})
export class PokemonListComponent implements OnInit {

  pokemons = []
  allPokemons = []
  pokemonsStr: string = ''

  constructor(private pokemonService: PokemonService) { }

  ngOnInit(): void {
    this.pokemonService.carregarPokemons().subscribe((items: any) =>{
      console.log(items)

      this.allPokemons = items.results
      this.pokemons = items.results

      //this.pokemonsStr = JSON.stringify(this.pokemons)
    })
  }

}
