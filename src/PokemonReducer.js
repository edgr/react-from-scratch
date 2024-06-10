const pokemonReducer = (state, action) => {
  switch (action.type) {
    case "SET_SEARCH":
      return {
        ...state,
        search: action.payload,
      };
    case "SET_SELECTED":
      return {
        ...state,
        selected: action.payload,
      };
    case "SET_POKEMONS":
      return {
        ...state,
        pokemons: action.payload,
      };
    case "REVOKE_SELECTED":
      return {
        ...state,
        selected: null,
      };
    default:
      throw new Error("Action does not exist");
  }
};

export default pokemonReducer;
