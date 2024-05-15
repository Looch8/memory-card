const Card = ({ fruit, onClick, name }) => {
	return (
		<div className="card">
			<img src={fruit} onClick={onClick} />
			<p>{name}</p>
		</div>
	);
};

export default Card;
