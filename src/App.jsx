import axios from 'axios'
import './App.css'
import React, { useEffect, useState } from 'react'
import PokemonCard from './components/PokemonCard'

const App = () => {
    const [pokemons, setPokemons] = useState([])

    const getPokemons = async () => {
        const response = await axios.get('https://pokeapi.co/api/v2/pokemon/')

        setPokemons(response.data.results)
    }

    useEffect(() => {
        getPokemons()
    }, [])
    return (
        <>
            <ul>
                {pokemons.map((pokemon, index) => (
                    <li key={index}>
                        <PokemonCard pokemon={pokemon} />
                    </li>
                ))}
            </ul>
        </>
    )
}

export default App
