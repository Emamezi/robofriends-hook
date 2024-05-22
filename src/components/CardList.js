import React from "react";
import Card from "./Card";

function CardList({ robots }) {
  return (
    <>
      {/* Loop over robots arrray, For each i display a card */}
      {robots.map((robot, i) => {
        return (
          <Card
            key={i}
            id={robots[i].id}
            name={robots[i].name}
            email={robots[i].email}
          />
        );
      })}
    </>
  );
}
export default CardList;
