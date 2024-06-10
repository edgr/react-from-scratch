import React, { useContext } from "react";
import Pokemon from "./Pokemon";
import {
  Typography,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
} from "@mui/material";
import PokemonContext from "../PokemonContext";
import useFilteredPokemons from "../useFilteredPokemons";

const PokemonTable = () => {
  const {
    state: { pokemons, search },
  } = useContext(PokemonContext);

  const filteredPokemons = useFilteredPokemons(pokemons, search);

  if (!pokemons) return null;

  return (
    <Table borderAxis="both" variant="plain" size="small">
      <TableHead>
        <TableRow style={{ height: 33 }}>
          <TableCell align="left">
            <Typography variant="h6">Name</Typography>
          </TableCell>
          <TableCell align="left">
            <Typography variant="h6">Type</Typography>
          </TableCell>
          <TableCell align="left">
            <Typography variant="h6">Skills</Typography>
          </TableCell>
          <TableCell align="right">
            <Typography variant="h6">Select</Typography>
          </TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {filteredPokemons.map((pokemon) => (
          <Pokemon key={pokemon.id} pokemon={pokemon} />
        ))}
      </TableBody>
    </Table>
  );
};

export default PokemonTable;
