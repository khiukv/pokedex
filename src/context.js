import {createContext, useReducer} from 'react';
import {reducer} from './reducer';
export const PokedexContext = createContext();

const initialState = {
  pokemons: [],
  myPokemons: [],
  activeIndexes: []
};

export const ContextProvider = ({children}) => {
  const [value, dispatch] = useReducer(reducer, initialState);

  value.setPokemons = (data) => {
    dispatch({type: 'SET_POKEMONS', payload: data});
  };

  value.myPokemonsHandler = (id) => {
    dispatch({type: 'MY_POKEMONS', payload: id});
  }

  return (
    <PokedexContext.Provider value={value}>
      {children}
    </PokedexContext.Provider>
  );
}