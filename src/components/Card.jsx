import { useState, useEffect } from "react";
import { fetchPokemon } from "../data";

function Card() {
	const [pokemonData, setPokemonData] = useState(null);

	useEffect(() => {
		const fetchPokemonData = async () => {
			try {
				const data = await fetchPokemon("pikachu");
				setPokemonData(data);
			} catch (error) {
				console.error("Error fetching Pokémon data:", error);
			}
		};

		fetchPokemonData();
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

export default Card;
