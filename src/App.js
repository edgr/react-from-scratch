import React, { useEffect } from "react";
import "./App.css";
import PokemonTable from "./components/PokemonTable";
import PokemonSearch from "./components/PokemonSearch";
import PokemonContext from "./PokemonContext";
import pokemonReducer from "./PokemonReducer";
import { Typography } from "@mui/material";

function App() {
  const [state, dispatch] = React.useReducer(pokemonReducer, {
    search: "",
    selected: null,
    pokemons: [],
  });

  useEffect(() => {
    fetch(process.env.REACT_APP_FETCH_URL)
      .then((response) => response.json())
      .then((data) =>
        dispatch({
          type: "SET_POKEMONS",
          payload: data,
        })
      );
  }, []);

  return (
    <PokemonContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      <div className="App">
        <Typography variant="h1">Pokemons!</Typography>
        <PokemonSearch />
        <PokemonTable />
      </div>
    </PokemonContext.Provider>
  );
}

export default App;
