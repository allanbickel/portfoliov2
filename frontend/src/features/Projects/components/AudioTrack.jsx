import { useEffect, useRef, useState } from "react";
import WaveSurfer from "wavesurfer.js";
import "./AudioTrack.css";

const SoundWave = ({ filepath, isPlaying }) => {
	const waveformRef = useRef(null);
	const [wavesurferInstance, setWavesurferInstance] = useState(null);

	useEffect(() => {
		const wavesurfer = WaveSurfer.create({
			container: waveformRef.current,
			barWidth: 2,
			progressColor: "#D6D6D6",
			cursorWidth: 0,
			waveColor: "#B4BBB4",
			scrollParent: false,
		});

		wavesurfer.load(filepath);
		setWavesurferInstance(wavesurfer);

		return () => {
			wavesurfer.destroy();
		};
	}, [filepath]);

	useEffect(() => {
		if (wavesurferInstance) {
			if (isPlaying) {
				if (!wavesurferInstance.isPlaying()) {
					// add null check
					wavesurferInstance.play();
				}
			} else {
				if (wavesurferInstance.isPlaying()) {
					// add null check
					wavesurferInstance.pause();
				}
			}
		}
	}, [wavesurferInstance, isPlaying]);

	return <div className="waveform" ref={waveformRef}></div>;
};

const PlayButton = ({ isPlaying, handleTrackClick }) => {
	const icon = () => {
		if (isPlaying) {
			return require("../../../assets/icons/pausebtn.png");
		} else {
			return require("../../../assets/icons/playbtn.png");
		}
	};

	return (
		<>
			<img
				className="play-btn"
				src={icon()}
				onClick={handleTrackClick}
				alt="PLAY"
			/>
		</>
	);
};

function AudioTrack({ filepath, isPlaying, handleTrackClick, index }) {
	return (
		<>
			<div className="playback-container">
				<PlayButton
					isPlaying={isPlaying}
					handleTrackClick={() => handleTrackClick(index)}
				/>
				<div className="track-container">
					<p className="track-name">
						{filepath.split("/").pop().split(".")[0]}
					</p>

					<SoundWave filepath={filepath} isPlaying={isPlaying} />
				</div>
			</div>
		</>
	);
}

export default AudioTrack;
