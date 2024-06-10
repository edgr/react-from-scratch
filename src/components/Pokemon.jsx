import React, { useContext } from "react";
import { TableCell, TableRow } from "@mui/material";
import { Typography, Box } from "@mui/material";
import PokemonButton from "./PokemonButton";
import PokemonContext from "../PokemonContext";

const Pokemon = ({ pokemon }) => {
  const {
    state: { selected },
  } = useContext(PokemonContext);

  const xX = "xx";

  let hp = xX;
  let attack = xX;
  let defense = xX;
  let spAttack = xX;
  let spDefense = xX;
  let speed = xX;

  if (selected && selected.id === pokemon.id) {
    const skill = pokemon.base;
    hp = skill.HP;
    attack = skill.Attack;
    defense = skill.Defense;
    spAttack = skill["Sp. Attack"];
    spDefense = skill["Sp. Defense"];
    speed = skill.Speed;
  }

  const Skill = (rating) => {
    if (!selected) return <span>{rating}</span>;
    if (selected && selected.id !== pokemon.id) return <span>{rating}</span>;

    return <b>{rating}</b>;
  };

  return (
    <TableRow>
      <TableCell>
        <Typography variant="string">{pokemon.name.english}</Typography>
      </TableCell>
      <TableCell>
        <Typography variant="string">{pokemon.type.join(", ")}</Typography>
      </TableCell>
      <TableCell>
        <Box display="flex" gap={1}>
          <Typography variant="string">HP: {Skill(hp)}</Typography>
          <Typography variant="string">Att.: {Skill(attack)}</Typography>
          <Typography variant="string">Def.: {Skill(defense)}</Typography>
          <Typography variant="string">Sp. Att.: {Skill(spAttack)}</Typography>
          <Typography variant="string">Sp. Def.: {Skill(spDefense)}</Typography>
          <Typography variant="string">Speed: {Skill(speed)}</Typography>
        </Box>
      </TableCell>
      <TableCell align="right">
        <PokemonButton pokemon={pokemon} />
      </TableCell>
    </TableRow>
  );
};

export default Pokemon;
