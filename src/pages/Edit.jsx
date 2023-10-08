import React, { useState, createRef } from "react";
import { exportComponentAsJPEG } from "react-component-export-image";
import { useSearchParams } from "react-router-dom";
import Text from "../components/Text";

const Edit = () => {
  const [params] = useSearchParams();
  const [count, setCount] = useState(0);
  const addText = () => {
    setCount(count + 1);
  };

  const memeRef = createRef();
  return (
    <div>
      <div ref={memeRef} className="meme mt-5 mb-5">
        <img src={params.get("url")} width="400 px" />
        {Array(count)
          .fill(0)
          .map((e) => (
            <Text />
          ))}
      </div>
      <button onClick={addText}>Add Text</button>
      <button
        variant="Success"
        onClick={(e) => {
          exportComponentAsJPEG(memeRef);
        }}
      >
        Save
      </button>
    </div>
  );
};

export default Edit;
