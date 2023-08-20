import React, { useRef, useEffect, useState } from "react";
import "./VideoPlayer.css"; // Import a separate CSS file for styling

interface VideoPlayerProps {
  src: string;
  size?: { width?: string; height?: string };
}

function VideoPlayer({ src, size }: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.src = src;
    }
  }, [src]);

  const playerStyle: React.CSSProperties = {
    ...size,
  };

  const handlePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div style={playerStyle}>
      <video ref={videoRef} style={{ width: "100%" }}>
        <track
          src="/path-to-your-caption-file.vtt" // Provide the path to your .vtt caption file
          kind="subtitles"
          label="English"
          srcLang="en"
          default
        />
        Your browser does not support the video tag.
      </video>
      <div className="controls">
        <button className="control-button" onClick={handlePlayPause}>
          {isPlaying ? "Pause" : "Play"}
        </button>
        <button
          className="control-button"
          onClick={() => (videoRef.current!.playbackRate = 0.5)}
        >
          0.5x
        </button>
        <button
          className="control-button"
          onClick={() => (videoRef.current!.playbackRate = 1)}
        >
          1x
        </button>
        <button
          className="control-button"
          onClick={() => (videoRef.current!.playbackRate = 1.5)}
        >
          1.5x
        </button>
        <button
          className="control-button"
          onClick={() => (videoRef.current!.playbackRate = 2)}
        >
          2x
        </button>
        {/* <button
          className="control-button"
          onClick={() => (videoRef.current!.loop = !videoRef.current!.loop)}
        >
          {videoRef.current!.loop ? "Loop On" : "Loop Off"}
        </button> */}
        <button
          className="control-button"
          onClick={() => videoRef.current?.requestFullscreen()}
        >
          Fullscreen
        </button>
      </div>
    </div>
  );
}

export default VideoPlayer;
