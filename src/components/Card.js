import React from "react";

function Card({ id, name, email }) {
  return (
    <div className="pa2 ma3 grow dib">
      <img
        src={`https://robohash.org/${id}?set=set2?200x200`}
        alt="robo img"
        srcset="robot image"
      />
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  );
}

export default Card;
