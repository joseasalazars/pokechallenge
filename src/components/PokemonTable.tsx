import React from "react";
import PokemonCard from "./PokemonCard";
const PokemonTable = props => (
  <div className="container justify-content-md-center">
    <div className="row text-center">
      {props.pokemons.map((pokemon, index) => (
        <PokemonCard pokemon={pokemon} key={index} />
      ))}
    </div>
  </div>
);

export default PokemonTable;
