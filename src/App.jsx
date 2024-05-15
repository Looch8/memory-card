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
		{ id: 1, image: apple, name: "Apple", clicked: false },
		{ id: 2, image: banana, name: "Banana", clicked: false },
		{ id: 3, image: pear, name: "Pear", clicked: false },
		{ id: 4, image: mango, name: "Mango", clicked: false },
		{ id: 5, image: watermelon, name: "Watermelon", clicked: false },
	]);

	console.log(fruit);
	const randomizeFruit = (index) => {
		console.log("clicked Index:", index);
		const shuffledFruit = [...fruit];
		shuffledFruit[index].clicked = true;

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
				{fruit.map((fruit, index) => {
					return (
						<Card
							key={fruit.id}
							fruit={fruit.image}
							onClick={() => randomizeFruit(index)}
							clicked={fruit.clicked}
							name={fruit.name}
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
