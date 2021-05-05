import {useState, useEffect, useContext} from 'react';
import {PokedexContext} from '../context';
import {getPokemonById} from '../api';

function PokemonCard(props) {
  const {name, image, id} = props;
  const [showDetails, setShowDetails] = useState(false);
  const [pokemonsDetails, setPokemonsDetails] = useState([]);
  const [isLoaded, setLoaded] = useState(false);
  const {myPokemonsHandler, activeIndexes} = useContext(PokedexContext);

  useEffect(() => {
    getPokemonById(id).then(data => {
      setPokemonsDetails(data);
      setLoaded(true);
    });
    // eslint-disable-next-line
  }, [activeIndexes]);

  const showDetailsHandler = () => {
    setShowDetails(!showDetails);
  }

  const myPokemonsClickHandler = (event) => {
    event.stopPropagation();
    myPokemonsHandler(id);
  }

  return (
    <div className={`card-wrap ${showDetails ? 'active' : ''}`} onClick={showDetailsHandler}>
      <div className="card-flipper">
        <div className="card front">
          <div className="favorite-icon">
            <i className={`material-icons ${activeIndexes.includes(id) ? 'active' : ''}`} onClick={myPokemonsClickHandler}>favorite</i>
          </div>
          <div className="card-image">
            <img src={image} alt={name}/>
          </div>
          <div className="card-content">
            <span className="card-title">{name}</span>
          </div>
        </div>

        <div className="card back">
        <div className="favorite-icon">
            <i className={`material-icons ${activeIndexes.includes(id) ? 'active' : ''}`} onClick={myPokemonsClickHandler}>favorite</i>
          </div>
          <div className="card-content">
            <span className="card-title">{name}</span>
            <p>Types: { isLoaded ? pokemonsDetails.types.map((type) => type.type.name).join(', ') : null}</p>
            <p>Height: {pokemonsDetails.height}</p>
            <p>Weight: {pokemonsDetails.weight}</p>
            <p>Abilities: { isLoaded ? pokemonsDetails.abilities.map((item) => item.ability.name).join(', ') : null}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export {PokemonCard};