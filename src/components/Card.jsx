function Card({ num }) {
	return (
		<div className="card">
			<img
				className="card-image"
				src="src/assets/photo-1481349518771-20055b2a7b24.avif"
			></img>
			<p className="card-text">Card {num}</p>
		</div>
	);
}

export default Card;
