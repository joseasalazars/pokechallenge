import React, { Component } from "react";
import axios from "axios";

import styled from "styled-components";

import Pagination from "react-js-pagination";
import PokemonTable from "../components/PokemonTable";
import Loader from "../components/Loader";

interface PokemonsProps {}

interface PokemonsState {
  pokemons: Object[];
  isLoading: Boolean;
  totalPokemons: Number;
  activePage: Number;
  hide: Boolean;
}

class Pokemons extends Component<PokemonsProps, PokemonsState> {
  constructor(props) {
    super(props);
    this.state = {
      pokemons: [],
      isLoading: false,
      totalPokemons: 0,
      activePage: 1,
      hide: false
    };
  }

  async retrieveEachPokemon(pokemons) {
    var results: Object[] = [];
    for (let p of pokemons) {
      let pokemon = await axios.get(p.url);
      results.push(pokemon);
    }
    this.setState({ pokemons: results, isLoading: false, hide: false });
  }

  apiCall(offset) {
    this.setState({ isLoading: true });
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/?limit=60&offset=${offset}`)
      .then(response => {
        this.setState({
          totalPokemons: response.data.count
        });
        this.retrieveEachPokemon(response.data.results);
      })
      .catch(err => {
        console.log(err);
        this.setState({ isLoading: false });
        alert(
          "There has been an error loading the pokemons, please try again!"
        );
      });
  }
  componentDidMount() {
    this.apiCall(60);
  }

  handlePageChange(pageNumber) {
    this.apiCall(pageNumber * 60);
    this.setState({ activePage: pageNumber, hide: true });
  }

  render() {
    return (
      <div>
        {!this.state.isLoading &&
        this.state.pokemons &&
        this.state.totalPokemons > 0 &&
        this.state.pokemons.length > 0 ? (
          <div>
            <Header>
              <h1>Pokemons</h1>
            </Header>
            <PokemonTable
              pokemons={this.state.pokemons}
              index={this.state.activePage}
            />
            <PaginationRow>
              <div style={{ display: "inline-block" }}>
                <Pagination
                  hideNavigation={this.state.hide}
                  hideFirstLastPages={this.state.hide}
                  itemClass="page-item"
                  linkClass="page-link"
                  activePage={this.state.activePage}
                  itemsCountPerPage={60}
                  totalItemsCount={Number(this.state.totalPokemons) - 60}
                  pageRangeDisplayed={5}
                  onChange={this.handlePageChange.bind(this)}
                />
              </div>
            </PaginationRow>
          </div>
        ) : (
          <Loader />
        )}
      </div>
    );
  }
}

export default Pokemons;

const PaginationRow = styled.div`
  text-align: center;
  margin-top: 1rem;
`;

const Header = styled.div`
  padding: 30px;
  text-align: center;
  background: #018bdc;
  color: white;
  font-size: 30px;
  margin-bottom: 2rem;
`;
