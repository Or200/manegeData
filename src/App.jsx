import { useState } from "react";
import "./App.css";
import Nav from "./components/Nav/Nav";
import Table from "./components/Table/Table";


function App() {
  const [result, setResult] = useState([]);
  const [seach, setSearch] = useState("");

  return (
    <>
      <Nav />
      <br />
      <label>
        😢Search:😢
        <input name="myInput" onChange={setSearch}/>
      </label>
      <Table />
    </>
  );
}

export default App;
