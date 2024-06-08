import React, { useContext } from "react";
import { TextField } from "@mui/material";
import PokemonContext from "../PokemonContext";

const PokemonSearch = () => {
  const { setSearch } = useContext(PokemonContext);

  return (
    <TextField
      label="Search for your pokemon"
      variant="outlined"
      onChange={(e) => setSearch(e.target.value)}
    />
  );
};

export default PokemonSearch;
