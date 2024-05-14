import apple from "./assets/apple.avif";
import banana from "./assets/banana.avif";
import pear from "./assets/pear.avif";
import watermelon from "./assets/watermelon.avif";
import mango from "./assets/mango.avif";
import "./App.css";

const Card = ({ fruit, text }) => {
	return (
		<div className="card">
			<img src={fruit} />
			<p>{text}</p>
		</div>
	);
};

const App = () => {
	const cardImages = [apple, banana, pear, watermelon, mango];

	return (
		<div>
			<h2>Memory Game</h2>
			<div className="cards-container">
				<Card fruit={apple} text="Apple" />
				<Card fruit={banana} text="Banana" />
				<Card fruit={pear} text="Pear" />
				<Card fruit={mango} text="Mango" />
				<Card fruit={watermelon} text="Watermelon" />
			</div>
		</div>
	);
};

export default App;

// Take some time to think about the features you want to implement, which components you need, how to structure your application, and how to get the images from an API. Your application should include a scoreboard, which counts the current score, and a “Best Score”, which shows the highest score you’ve achieved thus far. There should be a function that displays the cards in a random order anytime a user clicks one. Be sure to invoke that function when the component mounts.
// You also need a handful of cards that display images and possibly informational text. These cards and texts need to be fetched from an external API. You can use anything from Giphy to a Pokemon API.
// Now that you’ve thought about the structure of your application, set up the folder structure and start creating the components.
