import React, { useEffect, useState } from 'react'
import axios from 'axios'

const PokemonCard = ({ pokemon }) => {
    const [pokemonOne, setPokemonOne] = useState({})
    const getPokemonPicture = async (url) => {
        const response = await axios.get(url)
        setPokemonOne(response.data)
    }

    useEffect(() => {
        getPokemonPicture(pokemon.url)
    }, [])

    return (
        <>
            <h3>{pokemonOne.name}</h3>
            <img
                src={pokemonOne.sprites?.front_default}
                alt={pokemonOne.name}
            />
        </>
    )
}

export default PokemonCard
