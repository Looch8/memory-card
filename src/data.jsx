const POKE_API_URL = "https://pokeapi.co/api/v2";

export const fetchPokemon = (pokemonName) => {
	return fetch(`${POKE_API_URL}/pokemon/${pokemonName}`).then((response) => {
		if (!response.ok) {
			throw new Error("Network response was not ok");
		}
		return response.json();
	});
};
