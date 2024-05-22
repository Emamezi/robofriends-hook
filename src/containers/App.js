import "./App.css";
import React, { useState, useEffect } from "react";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
// import Card from "../components/Card";
import CardList from "../components/CardList";
import ErrorBoundary from "../components/ErrorBoundary";

function App() {
  //Use react hooks to declare state at top parent
  //declaring which state to set (roobots and searchfiled) and the functions to set the state
  const [robots, setRobots] = useState([]); //inital state-->empty array
  const [searchField, setSearchField] = useState(""); //init state--empty string

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => setRobots(users));
  }, []);

  // console.log(robots);
  const filteredRobots = robots.filter((robot) =>
    robot.name.toLowerCase().includes(searchField.toLowerCase())
  );

  //set searchfield state to the user input
  const onSearchChange = (event) => {
    setSearchField(event.target.value);
  };

  //condtion to check if robots array exist and display UI
  return !robots.length ? (
    <h1 className="tc">Loading</h1>
  ) : (
    <div className="tc">
      <h1 className="f1">RoboFriends</h1>
      <SearchBox searchChange={onSearchChange} />
      <Scroll>
        <ErrorBoundary>
          <CardList robots={filteredRobots} />
        </ErrorBoundary>
      </Scroll>
    </div>
  );
}

export default App;
