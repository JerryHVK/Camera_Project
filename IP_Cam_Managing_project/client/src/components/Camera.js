import React from "react";
import { useParams } from "react-router-dom";

function Camera({ cameras }) {
  const { id } = useParams();
  const camera = cameras[id];

  return (
    <div className="camera">
      <h2>{camera.name}</h2>
      <p>url: {camera.url}</p>
    </div>
  );
}

export default Camera;
