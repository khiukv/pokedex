import {useContext} from 'react';
import {PokedexContext} from '../context';
import {PokemonCard} from '../components/PokemonCard';

function MyPokemons() {
  const {myPokemons = []} = useContext(PokedexContext);

  return (
    <div className="container content">
      <h1 className="main-title">My Pokemons</h1>
        <div className="pokemon-list">
          {myPokemons.map(item => {
            return <PokemonCard key={item.id} id={item.id} name={item.name} image={item.image} />
          })}
      </div>
    </div>
  );
}

export {MyPokemons};