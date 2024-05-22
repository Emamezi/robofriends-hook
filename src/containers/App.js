import "./App.css";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import Card from "../components/Card";
// import CardList from "./components/CardList";

function App() {
  return (
    <div className="">
      <SearchBox />
      <Scroll>
        <Card />
        {/* <CardList robots={filteredRobots} /> */}
      </Scroll>
    </div>
  );
}

export default App;
