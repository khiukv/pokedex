
import {useContext} from 'react';
import {PokedexContext} from '../context';
import {PokemonCard} from './PokemonCard';

function PokemonList() {
  const {pokemons = []} = useContext(PokedexContext);
  return (
    <div className="pokemon-list">
      {pokemons.map(item => {
        return <PokemonCard key={item.id} id={item.id} name={item.name} image={item.image} />
      })}
    </div>
  );
}

export {PokemonList};