import { useEffect, useState } from "react";
import "./App.css";

function App() {
	const [pokemonData, setPokemonData] = useState([]);

	useEffect(() => {
		fetch("https://pokeapi.co/api/v2/pokemon?limit=5")
			.then((response) => response.json())
			.then((data) => {
				setPokemonData(data.results);
			});
	}, []); // Empty dependency array ensures useEffect runs only once after the initial render

	const shuffleCards = () => {
		setPokemonData((prevData) => {
			// Create a copy of the data array
			const shuffledData = [...prevData];

			// Shuffle the copy
			for (let i = shuffledData.length - 1; i > 0; i--) {
				const j = Math.floor(Math.random() * (i + 1));
				[shuffledData[i], shuffledData[j]] = [
					shuffledData[j],
					shuffledData[i],
				];
			}

			return shuffledData;
		});
	};

	return (
		<div>
			<h1 className="title">Memory Card Game</h1>
			<div className="card-container" onClick={shuffleCards}>
				{pokemonData.map((pokemon, index) => (
					<div key={index} className="card">
						<img
							src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
								index + 1
							}.png`}
							alt={pokemon.name}
						/>
						<h3>{pokemon.name}</h3>
					</div>
				))}
			</div>
		</div>
	);
}

export default App;

// Take some time to think about the features you want to implement, which components you need, how to structure your application, and how to get the images from an API. Your application should include a scoreboard, which counts the current score, and a “Best Score”, which shows the highest score you’ve achieved thus far. There should be a function that displays the cards in a random order anytime a user clicks one. Be sure to invoke that function when the component mounts.
// You also need a handful of cards that display images and possibly informational text. These cards and texts need to be fetched from an external API. You can use anything from Giphy to a Pokemon API.
// Now that you’ve thought about the structure of your application, set up the folder structure and start creating the components.
