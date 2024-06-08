import "./App.css";
import React, { useEffect } from "react";
import styled from "@emotion/styled";
import PokemonInfo from "./components/PokemonInfo";
import PokemonTable from "./components/PokemonTable";
import PokemonSearch from "./components/PokemonSearch";
import PokemonContext from "./PokemonContext";

const Title = styled.h1`
  text-align: center;
`;

function App() {
  const [search, setSearch] = React.useState("");
  const [selected, setSelected] = React.useState(null);
  const [pokemons, setPokemons] = React.useState([]);

  useEffect(() => {
    fetch(process.env.REACT_APP_FETCH_URL)
      .then((response) => response.json())
      .then((data) => setPokemons(data));
  }, []);

  return (
    <PokemonContext.Provider
      value={{
        search,
        setSearch,
        selected,
        setSelected,
        pokemons,
        setPokemons,
      }}
    >
      <div className="App">
        <Title>Pokemons!</Title>
        <PokemonSearch />
        <PokemonInfo />
        <PokemonTable />
      </div>
    </PokemonContext.Provider>
  );
}

export default App;
