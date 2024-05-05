import { useState, useEffect } from "react";

const POKE_API_URL = "https://pokeapi.co/api/v2";

function GetRandomPokemon() {
	const [pokemonData, setPokemonData] = useState(null);

	useEffect(() => {
		const fetchRandomPokemon = async () => {
			try {
				const response = await fetch(
					`${POKE_API_URL}/pokemon?limit=50`
				);
				if (!response.ok) {
					throw new Error("Network response was not ok");
				}
				const pokemonList = await response.json();

				const randomIndex = Math.floor(
					Math.random() * pokemonList.results.length
				);
				const randomPokemonName = pokemonList.results[randomIndex].name;

				const pokemonResponse = await fetch(
					`${POKE_API_URL}/pokemon/${randomPokemonName}`
				);
				if (!pokemonResponse.ok) {
					throw new Error("Network response was not ok");
				}
				const pokemonData = await pokemonResponse.json();

				setPokemonData(pokemonData);
			} catch (error) {
				console.error("Error fetching random Pokémon:", error);
			}
		};

		fetchRandomPokemon();
	}, []);

	return (
		<div>
			{pokemonData && (
				<div>
					<h1>{pokemonData.name}</h1>
					<img
						src={pokemonData.sprites.front_default}
						alt={pokemonData.name}
					/>
				</div>
			)}
		</div>
	);
}

export default GetRandomPokemon;
