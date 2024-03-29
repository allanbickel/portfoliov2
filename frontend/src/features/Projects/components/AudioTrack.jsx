import { useEffect, useRef, useState } from "react";
import WaveSurfer from "wavesurfer.js";
import "./AudioTrack.css";

function AudioTrack({
    filename,
    index,
    handlePlayPause,
    setAudiotrackArray,
    audiotrackArray,
}) {
    const [wavesurfer, setWavesurfer] = useState(null);
    const containerRef = useRef(null);

    useEffect(() => {
        const ws = WaveSurfer.create({
            container: containerRef.current,
            barWidth: 2,
            progressColor: "#D6D6D6",
            cursorWidth: 0,
            waveColor: "#B4BBB4",
            scrollParent: false,
            normalize: true,
        });

        setWavesurfer(ws);

        return () => {
            ws.destroy();
        };
    }, []);

    useEffect(() => {
        const filepath = `../../../../../backend/audiotracks/${filename}`;

        if (!audiotrackArray[index] && wavesurfer) {
            wavesurfer.load(filepath);
            setAudiotrackArray((prevArray) => [...prevArray, wavesurfer]);
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [wavesurfer]);

    return (
        <>
            <div
                className="waveform"
                ref={containerRef}
                onClick={() => handlePlayPause(index, { on: "click" })}
                // onDoubleClick={() => handlePlayPause(index, { on: "dbclick" })}
                id={index}
            ></div>
        </>
    );
}

export default AudioTrack;
