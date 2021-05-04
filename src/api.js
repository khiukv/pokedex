import {API_URL, IMG_URL} from './config';

const getAllPokemons = async () => {
    const res = await fetch(API_URL);
    const data = await res.json();
    const pokemons = data.results.map((data, index) => ({
        name: data.name,
        id: index + 1,
        image: `${IMG_URL}${index + 1}.png`
    }));

    return await pokemons;
}

const getPokemonById = async (id) => {
  const url = API_URL + id;
  const res = await fetch(url);
  const pokemons = await res.json();
  return await pokemons;
}

export {getAllPokemons, getPokemonById};