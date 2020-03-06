import React, { Component } from "react";
import axios from "axios";
import styled from "styled-components";
import Loader from "../components/Loader";
import Abilities from "../components/Abilities";
import Moves from "../components/Moves";
import PokemonInfo from "../components/PokemonInfo";
import { RouteComponentProps } from "react-router-dom";

interface PokemonProps extends RouteComponentProps<any> {
  location: { pathname: String };
  history: any;
}

interface PokemonState {
  abilities: Object[];
  moves: Object[];
  pokemon: {
    name: String;
  };
  isLoading: Boolean;
}

class Pokemon extends Component<PokemonProps, PokemonState> {
  constructor(props) {
    super(props);

    this.state = {
      abilities: [],
      moves: [],
      pokemon: { name: "" },
      isLoading: false
    };
  }

  getPosition(string, subString, index) {
    return string.split(subString, index).join(subString).length;
  }

  async getAbilitiesAndMoves(pokemon) {
    var abilities: Object[] = [];
    var moves: Object[] = [];
    for (let a of pokemon.abilities) {
      let ability = await axios.get(a.ability.url);
      abilities.push(ability);
    }
    for (let m of pokemon.moves) {
      let move = await axios.get(m.move.url);
      moves.push(move);
    }

    this.setState({ abilities, moves, isLoading: false });
  }

  componentDidMount() {
    this.setState({ isLoading: true });
    axios
      .get(
        `https://pokeapi.co/api/v2/${this.props.location.pathname.substring(1)}`
      )
      .then(response => {
        this.getAbilitiesAndMoves(response.data);
        this.setState({ pokemon: response.data });
      })
      .catch(err => {
        console.log(err);
        alert(
          `There has been an error loading the information of ${this.props.location.pathname.substring(
            9
          )}, please try again!`
        );
        this.setState({ isLoading: false });
      });
  }
  render() {
    return (
      <div>
        {this.state.abilities.length > 0 &&
        this.state.moves.length > 0 &&
        this.state.pokemon ? (
          <div>
            <Header className="row">
              <i
                onClick={() => this.props.history.goBack()}
                className="material-icons"
                style={{ fontSize: 48, color: "white", cursor: "pointer" }}
              >
                arrow_back
              </i>

              <p className="col-11">{this.state.pokemon.name.toUpperCase()}</p>
            </Header>
            <div className="container-fluid">
              <PokemonInfo pokemon={this.state.pokemon} />
              <h1>Abilities</h1>
              <Abilities abilities={this.state.abilities} />
              <h1>Moves</h1>
              <Moves moves={this.state.moves} />
            </div>
          </div>
        ) : (
          <Loader />
        )}
      </div>
    );
  }
}

export default Pokemon;

const Header = styled.div`
  padding: 30px;
  text-align: center;
  background: #018bdc;
  color: white;
  font-size: 30px;
  margin-bottom: 2rem;
`;
