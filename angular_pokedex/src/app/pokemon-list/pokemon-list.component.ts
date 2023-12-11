import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../services/pokemon.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.sass']
})
export class PokemonListComponent implements OnInit {

  pokemons = ["Bulbasaur","Ivysaur", "Venusaur", "Charmander"]

  constructor(private pokemonService: PokemonService) { }

  ngOnInit(): void {
  }

}
