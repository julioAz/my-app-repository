import React, { useEffect, useState } from 'react';
import axios from 'axios';

function UseApi({ pokemonName }: { pokemonName: string }) {
    const [pokemon, setPokemon] = useState<any[]>([]);

    const fetchPokemon = async () => {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
        setPokemon(response.data.results);
        console.log(pokemon);
    }

    useEffect(() => {
        fetchPokemon();
        console.log(pokemon);
    } , [pokemonName]);

    return (
        <>
            <h1>Pokedex</h1>
            <ul>
                {pokemon.map((pokemon: any) => (
                    <li key={pokemon.name}>{pokemon.name}</li>
                ))}
            </ul>
        </>
    )
    
}

export default UseApi