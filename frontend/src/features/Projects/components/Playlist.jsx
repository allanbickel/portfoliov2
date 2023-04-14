/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState, useRef } from "react";
import "./Playlist.css";
import AudioTrack from "./AudioTrack";

function Playlist() {
	const [audiotrackArray, setAudiotrackArray] = useState([]);
	const [arrayIsFilled, setArrayIsFilled] = useState(false);
	const [displayBtn, setDisplayBtn] = useState({ index: 0 });
	const [playBtnImgSrc, setPlayBtnImgSrc] = useState(
		require("../../../assets/icons/playbtn.png")
	);

	const currPlayingTrackRef = useRef({ track: null, index: 0 });

	const fileNames = [
		"ost4.mp3",
		"ost5.mp3",
		"ost6.mp3",
		"ost7.mp3",
		"ost8.mp3",
		"ost9.mp3",
	];

	useEffect(() => {
		if (audiotrackArray.length) {
			setArrayIsFilled(true);
		}
	}, [audiotrackArray]);

	useEffect(() => {
		if (arrayIsFilled) {
			currPlayingTrackRef.current = { track: audiotrackArray[0], index: 0 };
		}
	}, [arrayIsFilled]);

	const togglePlayBtn = () => {
		setDisplayBtn({ index: currPlayingTrackRef.current.index });
		if (currPlayingTrackRef.current.track) {
			if (currPlayingTrackRef.current.track.isPlaying()) {
				setPlayBtnImgSrc(require("../../../assets/icons/pausebtn.png"));
			} else {
				setPlayBtnImgSrc(require("../../../assets/icons/playbtn.png"));
			}
		}
	};

	const handlePlayPause = (index) => {
		if (currPlayingTrackRef.current.track) {
			if (
				Number.isInteger(index) &&
				index !== currPlayingTrackRef.current.index
			) {
				currPlayingTrackRef.current.track.stop();

				currPlayingTrackRef.current = {
					track: audiotrackArray[index],
					index: index,
				};
			}

			currPlayingTrackRef.current.track.playPause();
			togglePlayBtn();
		}
	};

	useEffect(() => {
		const handleKeyDown = (e) => {
			if (e.keyCode === 32) {
				e.preventDefault();
				handlePlayPause();
			}
		};

		document.addEventListener("keydown", handleKeyDown);

		return () => {
			document.removeEventListener("keydown", handleKeyDown);
		};
	}, []);

	return (
		<>
			<h1 className="playlist-title">Trilha Sonora Original</h1>

			<div className="playlist-container">
				{fileNames.map((filename, index) => {
					return (
						<div className="track-container" key={index}>
							{displayBtn.index === index && (
								<img
									className="play-btn"
									src={playBtnImgSrc}
									alt="play"
									onClick={() => handlePlayPause()}
								/>
							)}

							<div className="track-name">{filename.split(".")[0]}</div>

							<AudioTrack
								filename={filename}
								key={index}
								index={index}
								audiotrackArray={audiotrackArray}
								setAudiotrackArray={setAudiotrackArray}
								handlePlayPause={handlePlayPause}
							/>
						</div>
					);
				})}
			</div>
		</>
	);
}

export default Playlist;
