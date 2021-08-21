import React, { useRef } from "react";
import useIntersectionObserver from "@react-hook/intersection-observer";

const Youtube = ({ url, title }) => {
  const containerRef = useRef();
  const lockRef = useRef(false);
  const { isIntersecting } = useIntersectionObserver(containerRef);
  if (isIntersecting) {
    lockRef.current = true;
  }
  return (
    <div
      style={{
        overflow: "hidden",
        paddingTop: "56.25%",
        position: "relative",
        width: "100%",
      }}
      ref={containerRef}
    >
      {lockRef.current && (
        <iframe
          style={{
            bottom: 0,
            height: "100%",
            left: 0,
            position: "absolute",
            right: 0,
            top: 0,
            width: "100%",
          }}
          src={url}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      )}
    </div>
  );
};

export default Youtube;
