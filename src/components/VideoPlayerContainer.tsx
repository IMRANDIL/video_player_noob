import React from "react";

interface VideoPlayerContainerProps {
  children: React.ReactNode;
  isHorizontallyCentered?: boolean;
  isVerticallyCentered?: boolean;
  size?: { width?: string; height?: string };
  backgroundColor?: string;
  isCentered?: boolean;
}

function VideoPlayerContainer({
  children,
  isHorizontallyCentered,
  size,
  backgroundColor,
  isVerticallyCentered,
  isCentered,
}: VideoPlayerContainerProps) {
  const wrapperStyle: React.CSSProperties = {
    display: "flex",
    justifyContent: isHorizontallyCentered
      ? "center"
      : isCentered
      ? "center"
      : "flex-start",
    alignItems: isCentered
      ? "center"
      : isVerticallyCentered
      ? "center"
      : "flex-start",
    flexDirection: isCentered ? "column" : "row",
    ...size,
    backgroundColor: backgroundColor,
  };

  return <div style={wrapperStyle}>{children}</div>;
}

export default VideoPlayerContainer;
