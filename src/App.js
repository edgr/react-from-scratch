import './App.css';
import React, { useEffect } from 'react';

const Pokemon = ({ pokemon, onSelect }) => (
  <tr>
    <td>{pokemon.name.french}</td>
    <td>{pokemon.type.join(', ')}</td>
    <td><button onClick={() => onSelect(pokemon)}>Select me!</button></td>
  </tr>
)

const PokemonInfo = ({ name, base }) => (
  <>
    <h2>Selected Pokemon: {name.english}</h2>
    {Object.keys(base).map(key => (
      <div key={key}>
        <span>{key}: {base[key]}</span>
      </div>
    ))}
  </>
)

function App() {
  const [search, setSearch] = React.useState("")
  const [selected, setSelected] = React.useState(null)
  const [pokemons, setPokemons] = React.useState([])

  useEffect(() => {
    fetch('https://edgr.github.io/react-from-scratch/pokemons.json')
      .then(response => response.json())
      .then(data => setPokemons(data))

  }, [])

  return (
    <div className="App">
      <h1>Pokemons!</h1>
      <input onChange={(e) => setSearch(e.target.value)} />
      {selected && (
        <PokemonInfo {...selected} />
      )}
      <table width='100%'>
        <thead>
          <tr>
            <th>Name</th>
            <th>Type</th>
          </tr>
        </thead>
        <tbody>
          {pokemons
            .filter((pokemon) => pokemon.name.english.toLowerCase().includes(search.toLowerCase()))
            .slice(0, 20)
            .map(pokemon => (
              <Pokemon pokemon={pokemon} key={pokemon.id} onSelect={setSelected} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
