"use strict";
// src/index.ts
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const fetchPokemon = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    return response.json();
});
const fetchPokemonAbilities = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const data = yield response.json();
    return data.abilities;
});
const fetchPokemonTypes = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const data = yield response.json();
    return data.types;
});
const main = () => __awaiter(void 0, void 0, void 0, function* () {
    const pokemonId = 3; // Puedes cambiar este ID para obtener diferentes Pokémon
    // Fetch Pokémon
    const pokemon = yield fetchPokemon(pokemonId);
    console.log(`Pokémon: ${pokemon.name}, ID: ${pokemon.id}, Image: ${pokemon.sprites.front_default}`);
    // Fetch habilidades
    const abilities = yield fetchPokemonAbilities(pokemonId);
    console.log(`Habilidades: ${abilities.map(a => a.ability.name).join(', ')}`);
    // Fetch tipos
    const types = yield fetchPokemonTypes(pokemonId);
    console.log(`Tipos: ${types.map(t => t.type.name).join(', ')}`);
});
main().catch(console.error);
