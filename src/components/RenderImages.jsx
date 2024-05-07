import { useEffect, useState } from "react";

function RenderGifs() {
	const [gifImages, setGifImages] = useState([]);

	useEffect(() => {
		async function fetchGifs() {
			const response = await fetch(
				"https://api.giphy.com/v2/emoji?api_key=gI7uLuJvDv5Ukw2hI43fdL6kQ6alVRDU&limit=10&offset=0"
			);
			const gifsData = await response.json();
			setGifImages(gifsData.data);
		}

		fetchGifs();
	}, []);

	const renderGifImages = () => {
		return gifImages.map((gif, index) => (
			<img
				key={index}
				className="gif-images"
				src={gif.images.original.url}
				alt="gif"
			/>
		));
	};

	return <div className="gif-container">{renderGifImages()}</div>;
}

export default RenderGifs;
