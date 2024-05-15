const Card = ({ fruit, onClick }) => {
	return (
		<div className="card">
			<img src={fruit} onClick={onClick} />
		</div>
	);
};

export default Card;
