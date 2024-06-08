import React, { useContext } from "react";
import { Button } from "@mui/material";
import { Typography } from "@mui/material";
import PokemonContext from "../PokemonContext";

const Pokemon = ({ pokemon }) => {
  const { setSelected } = useContext(PokemonContext);

  return (
    <tr>
      <td>
        <Typography variant="string">{pokemon.name.french}</Typography>
      </td>
      <td>
        <Typography variant="string">{pokemon.type.join(", ")}</Typography>
      </td>
      <td>
        <Button variant="contained" onClick={() => setSelected(pokemon)}>
          Select me!
        </Button>
      </td>
    </tr>
  );
};

export default Pokemon;
