import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const PokemonCard = props => (
  <Card className="col-md-3 text-center mb-3">
    <div className="card text-center">
      <img
        style={{ width: "40%", height: "40%", display: "inline-block" }}
        className="card-img-top mx-auto"
        src={props.pokemon.data.sprites.front_default}
        alt={`${props.pokemon.data.name}`}
      />
      <div className="card-body text-center">
        <h5 className="card-title">{props.pokemon.data.name.toUpperCase()}</h5>
        <p className="card-text">
          Weight: {props.pokemon.data.weight}
          <br /> Height: {props.pokemon.data.height}
          <br />
          Abilities: {props.pokemon.data.abilities.length}
          <br />
          Moves: {props.pokemon.data.moves.length}
        </p>
        <Link
          to={{
            pathname: `/pokemon/${props.pokemon.data.name}`
          }}
        >
          <button className="btn btn-primary">See details</button>
        </Link>
      </div>
    </div>
  </Card>
);

export default PokemonCard;

const Card = styled.div`
  font-size: 12px;
`;
