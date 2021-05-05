import {getAllPokemons} from '../api';
import {useEffect, useContext} from 'react';
import {PokedexContext} from '../context';
import {PokemonList} from '../components/PokemonList';

function Home() {
  const {setPokemons} = useContext(PokedexContext);

  useEffect(function setPokemonsState() {
    getAllPokemons().then(data => {
      setPokemons(data);
    });
    // eslint-disable-next-line
  }, []);
  return (
    <div className="container content">
      <h1 className="main-title">Pokedex</h1>
      <PokemonList />
    </div>
  );
}

export {Home};