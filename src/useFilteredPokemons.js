const useFilteredPokemons = (pokemons, search) => {
  return pokemons
    .filter((pokemon) =>
      pokemon.name.english.toLowerCase().includes(search.toLowerCase())
    )
    .slice(0, 20);
};

export default useFilteredPokemons;
