import React from "react";
import "tachyons";

function SearchBox({ searchChange }) {
  return (
    <div>
      <input
        className="pa3 b-light-green bg-light-green ma2"
        type="search"
        placeholder="Search Robots"
        onChange={searchChange} //liisten for user input event
      />
    </div>
  );
}

export default SearchBox;
