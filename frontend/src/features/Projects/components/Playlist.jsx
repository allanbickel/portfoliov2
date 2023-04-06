import { useState, useEffect } from "react";
import "./Playlist.css";
import AudioTrack from "./AudioTrack.jsx";

function Playlist() {
	const audiofiles = [
		"ost4.mp3",
		"ost5.mp3",
		"ost6.mp3",
		"ost7.mp3",
		"ost8.mp3",
		"ost9.mp3",
	];

	const [currentTrackIndex, setCurrentTrackIndex] = useState(-1);
	const [isPlaying, setIsPlaying] = useState(
		Array(audiofiles.length).fill(false)
	);

	useEffect(() => {
		const handleKeyDown = (event) => {
			if (event.code === "Space" || event.keyCode === 32) {
				event.preventDefault();
				const newIsPlaying = [...isPlaying];
				newIsPlaying[currentTrackIndex] = !newIsPlaying[currentTrackIndex];
				setIsPlaying(newIsPlaying);
			}
		};

		window.addEventListener("keydown", handleKeyDown);

		return () => {
			window.removeEventListener("keydown", handleKeyDown);
		};
	});

	const handleTrackClick = (index) => {
		const newIsPlaying = [...isPlaying];
		if (currentTrackIndex !== -1) {
			newIsPlaying[currentTrackIndex] = false;
		}
		if (!isPlaying[index]) {
			newIsPlaying[index] = true;
		}

		setIsPlaying(newIsPlaying);
		setCurrentTrackIndex(index);
	};

	return (
		<>
			<h1 className="playlist-title">Trilha Sonora Original</h1>
			<div className="playlist-container">
				{audiofiles.map((filename, index) => (
					<AudioTrack
						key={index}
						index={index}
						filepath={`https://storage.googleapis.com/ost_fda/rascunhos/${filename}`}
						isPlaying={isPlaying[index]}
						handleTrackClick={() => handleTrackClick(index)}
					/>
				))}
			</div>
		</>
	);
}

export default Playlist;
