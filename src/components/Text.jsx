import React, { useState } from "react";
import Draggable from "react-draggable";

const Text = () => {
  const [editMode, seteditMode] = useState(false);
  const [val, setVal] = useState("Double Click To Edit");
  return (
    <div>
      <Draggable>
        {editMode ? (
          <input
            onDoubleClick={(e) => seteditMode(false)}
            value={val}
            onChange={(e) => setVal(e.target.value)}
          />
        ) : (
          <h1 onDoubleClick={(e) => seteditMode(true)}>{val}</h1>
        )}
      </Draggable>
    </div>
  );
};

export default Text;
