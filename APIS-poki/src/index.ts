
interface Pokemon {
    id: number;
    name: string;
    sprites: {
      front_default: string;
    };
  }
  
  interface PokemonAbility {
    ability: {
      name: string;
    };
  }
  
  interface PokemonType {
    type: {
      name: string;
    };
  }
  
  const fetchPokemon = async (id: number): Promise<Pokemon> => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    return response.json();
  };
  
  const fetchPokemonAbilities = async (id: number): Promise<PokemonAbility[]> => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const data = await response.json();
    return data.abilities;
  };
  
  const fetchPokemonTypes = async (id: number): Promise<PokemonType[]> => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const data = await response.json();
    return data.types;
  };
  
  const main = async () => {
    const pokemonId = 3;
  
 
    const pokemon = await fetchPokemon(pokemonId);
    console.log(`Pokémon: ${pokemon.name}, ID: ${pokemon.id}, Image: ${pokemon.sprites.front_default}`);
  
    const abilities = await fetchPokemonAbilities(pokemonId);
    console.log(`Habilidades: ${abilities.map(a => a.ability.name).join(', ')}`);
  
    const types = await fetchPokemonTypes(pokemonId);
    console.log(`Tipos: ${types.map(t => t.type.name).join(', ')}`);
  };
  
  main().catch(console.error);
  