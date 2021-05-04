
import {PokemonCard} from './PokemonCard';

function PokemonList(props) {
  const {pokemons} = props;
  return (
    <div className="pokemon-list">
      {pokemons.map(item => {
        return <PokemonCard key={item.id} id={item.id} name={item.name} image={item.image} />
      })}
    </div>
  );
}

export {PokemonList};