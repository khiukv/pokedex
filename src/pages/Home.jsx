import {getAllPokemons} from '../api';
import {useState, useEffect} from 'react';
import {PokemonList} from '../components/PokemonList';

function Home() {
  const [pokemons,setPokemons] = useState([]);

  useEffect(() => {
    getAllPokemons().then(data => {
      setPokemons(data);
    });
  }, [pokemons]);
  return (
    <div className="container content">
      <h1 className="main-title">My Pokemons</h1>
      <PokemonList pokemons={pokemons} />
    </div>
  );
}

export {Home};