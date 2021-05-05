export function reducer(state, {type, payload}) {
  switch (type) {
    case 'SET_POKEMONS':
      return {
        ...state,
        pokemons: payload || []
      }
    case 'MY_POKEMONS': {
      const pokemonIndex = state.pokemons.findIndex(item => item.id === payload);
      const myPokemonIndex = state.myPokemons.findIndex(item => item.id === payload);
      const myNewPokemon = state.pokemons[pokemonIndex];

      if (myPokemonIndex === -1 ) {
        return {
          ...state,
          myPokemons: [...state.myPokemons, myNewPokemon],
          activeIndexes: [...state.activeIndexes, payload]
        };
      } else {
        return {
          ...state,
          myPokemons: state.myPokemons.filter(item => item.id !== payload),
          activeIndexes: state.activeIndexes.filter(item => item !== payload)
        }
      }
    }
    default:
      return state;
  }
}