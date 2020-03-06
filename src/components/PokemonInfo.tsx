import React from "react";

const PokemonInfo = props => (
  <div className="container ">
    <div className="row align-items-center">
      <div className="col-6">
        <img
          style={{ width: "60%", height: "60%" }}
          className="card-img-top mx-auto"
          src={props.pokemon.sprites.front_default}
          alt={`${props.pokemon.name}`}
        />
      </div>
      <div className="col-6">
        <p>
          <b style={{ fontSize: 30 }}>{props.pokemon.name.toUpperCase()}</b>{" "}
          <br />
          Weight: {props.pokemon.weight} <br /> Height: {props.pokemon.height}
        </p>
        <p className="mb-0">Types:</p>
        <ul>
          {props.pokemon.types.map((type, index) => (
            <li key={index}>{type.type.name}</li>
          ))}
        </ul>
      </div>
    </div>
  </div>
);

export default PokemonInfo;
