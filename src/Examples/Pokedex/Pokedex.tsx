import React from 'react';
import UseApi from './Data/UseApi';

function Pokedex (){

    return (
        <>
            <h1>Pokedex</h1>
            <UseApi pokemonName={'pikachu'}/>
        </>
    )
}

export default Pokedex