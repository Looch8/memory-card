import apple from "./assets/apple.avif";
import banana from "./assets/banana.avif";
import pear from "./assets/pear.avif";
import watermelon from "./assets/watermelon.avif";
import mango from "./assets/mango.avif";
import "./App.css";
import { useState } from "react";
import Card from "./components/Card";

const App = () => {
	const [fruit, setFruit] = useState([
		apple,
		banana,
		pear,
		mango,
		watermelon,
	]);

	const randomizeFruit = () => {
		const shuffledFruit = [...fruit];

		for (let i = shuffledFruit.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[shuffledFruit[i], shuffledFruit[j]] = [
				shuffledFruit[j],
				shuffledFruit[i],
			];
		}

		setFruit(shuffledFruit);
	};

	return (
		<div>
			<h2>Memory Game</h2>
			<div className="cards-container">
				{fruit.map((fruit) => {
					return (
						<Card
							key={fruit}
							fruit={fruit}
							onClick={randomizeFruit}
						/>
					);
				})}
			</div>
		</div>
	);
};

export default App;

// Take some time to think about the features you want to implement, which components you need, how to structure your application, and how to get the images from an API. Your application should include a scoreboard, which counts the current score, and a “Best Score”, which shows the highest score you’ve achieved thus far. There should be a function that displays the cards in a random order anytime a user clicks one. Be sure to invoke that function when the component mounts.
// You also need a handful of cards that display images and possibly informational text. These cards and texts need to be fetched from an external API. You can use anything from Giphy to a Pokemon API.
// Now that you’ve thought about the structure of your application, set up the folder structure and start creating the components.
