import React, { useContext } from "react";
import Pokemon from "./Pokemon";
import { Typography } from "@mui/material";
import PokemonContext from "../PokemonContext";

const PokemonTable = () => {
  const { search, pokemons } = useContext(PokemonContext);

  return (
    pokemons && (
      <table width="100%">
        <thead>
          <tr>
            <th>
              <Typography variant="h6">Name</Typography>
            </th>
            <th>
              <Typography variant="h6">Type</Typography>
            </th>
          </tr>
        </thead>
        <tbody>
          {pokemons
            .filter((pokemon) =>
              pokemon.name.english.toLowerCase().includes(search.toLowerCase())
            )
            .slice(0, 20)
            .map((pokemon) => (
              <Pokemon key={pokemon.id} pokemon={pokemon} />
            ))}
        </tbody>
      </table>
    )
  );
};

export default PokemonTable;
