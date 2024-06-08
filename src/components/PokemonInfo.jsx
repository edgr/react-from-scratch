import React, { useContext } from "react";
import styled from "@emotion/styled";
import PokemonContext from "../PokemonContext";

const Selected = styled.h2`
  text-align: center;
`;

const SkillSet = styled.div`
  display: flex;
  justify-content: center;
  gap: 8px;
`;

const Skill = styled.span`
  font-style: italic;
`;

const Force = styled.span`
  font-weight: bold;
`;

const PokemonInfo = () => {
  const { selected } = useContext(PokemonContext);

  return (
    selected && (
      <>
        <Selected>Selected Pokemon: {selected.name.english}</Selected>
        {Object.keys(selected.base).map((key) => (
          <SkillSet key={key}>
            <Skill>{key}</Skill>
            <Force>{selected.base[key]}</Force>
          </SkillSet>
        ))}
      </>
    )
  );
};

export default PokemonInfo;
