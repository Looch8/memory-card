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
	const [score, setScore] = useState(0);
	const [bestScore, setBestScore] = useState(0);

	console.log(fruit);

	const randomizeFruit = (index) => {
		const clickedFruit = fruit[index];
		const isClicked = clickedFruit.clicked;

		if (isClicked) {
			gameover();
			return;
		}

		const shuffledFruit = fruit.map((f, idx) => {
			if (idx === index) {
				return {
					...f,
					clicked: true,
				};
			}
			return f;
		});

		setScore(score + 1);

		for (let i = shuffledFruit.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[shuffledFruit[i], shuffledFruit[j]] = [
				shuffledFruit[j],
				shuffledFruit[i],
			];
		}

		setFruit(shuffledFruit);
	};

	const gameover = () => {
		if (score > bestScore) {
			setBestScore(score);
		}
		setScore(0);
		const resetFruit = fruit.map((f) => ({
			...f,
			clicked: false,
		}));
		setFruit(resetFruit);
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
			<div className="scoreboard">
				<p>Score: {score}</p>
				<p>Best score: {bestScore}</p>
			</div>
		</div>
	);
};

export default App;
