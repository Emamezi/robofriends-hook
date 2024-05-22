import React from "react";

function Scroll(props) {
  return (
    <div
      style={{
        overflowY: "scroll",
        border: "5px solid black",
        height: "80vh",
      }}
    >
      {/* display child of scroll */}
      {props.children}
    </div>
  );
}
export default Scroll;
