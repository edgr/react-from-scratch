import React, { useContext } from "react";
import { TextField } from "@mui/material";
import PokemonContext from "../PokemonContext";

const PokemonSearch = () => {
  const { dispatch } = useContext(PokemonContext);

  return (
    <TextField
      label="Search for your pokemon"
      variant="outlined"
      fullWidth
      onChange={(e) =>
        dispatch({
          type: "SET_SEARCH",
          payload: e.target.value,
        })
      }
    />
  );
};

export default PokemonSearch;
