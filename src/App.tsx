import React, { useState, useEffect } from "react";
import VideoPlayer from "./components/VideoPlayer";
import VideoPlayerContainer from "./components/VideoPlayerContainer";
import axios from "axios";

function App() {
  const [videoSrc, setVideoSrc] = useState<string | undefined>();

  useEffect(() => {
    const fetchVideoSrc = async () => {
      try {
        // Update the URL to your Golang server and the appropriate video endpoint
        const response = await axios.get(
          "http://localhost:8080/videos/golangvideostreaming.mp4",
          { responseType: "blob" }
        );

        // Create a blob URL from the video data
        const blob = new Blob([response.data], { type: "video/mp4" });
        const blobUrl = URL.createObjectURL(blob);
        setVideoSrc(blobUrl);
      } catch (error) {
        console.error("Error fetching video:", error);
      }
    };

    fetchVideoSrc();
  }, []);

  return (
    <VideoPlayerContainer
      isHorizontallyCentered
      size={{ height: "500px", width: "600px" }}
      backgroundColor="gray"
    >
      {videoSrc && (
        <VideoPlayer src={videoSrc} size={{ width: "100%", height: "100%" }} />
      )}
    </VideoPlayerContainer>
  );
}

export default App;
