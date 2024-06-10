import React, { useContext } from "react";
import { Button } from "@mui/material";
import PokemonContext from "../PokemonContext";

const PokemonButton = ({ pokemon }) => {
  const {
    state: { selected },
    dispatch,
  } = useContext(PokemonContext);

  const select = () => {
    return dispatch({
      type: "SET_SELECTED",
      payload: pokemon,
    });
  };

  const unselect = () => {
    return dispatch({
      type: "REVOKE_SELECTED",
    });
  };

  const action = () => {
    if (!selected) return select();

    selected.id === pokemon.id ? unselect() : select();
  };

  if (selected && selected.id === pokemon.id) {
    return (
      <Button
        variant="contained"
        size="small"
        color="error"
        onClick={() => action()}
      >
        Unreveal!
      </Button>
    );
  }

  return (
    <Button variant="contained" size="small" onClick={() => action()}>
      Reveal!
    </Button>
  );
};

export default PokemonButton;
