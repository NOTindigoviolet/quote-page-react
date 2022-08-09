import React from "react";
import "./App.css";

function App() {
  async function fetchStuffHanlder() {
    const response = await fetch("https://api.quran.com/api/v4/chapters?language=en");
    const data = await response;
    // console.log("Test")
    console.log(data.json());
  }

  return (
    <React.Fragment>
      <button onClick={fetchStuffHanlder}>Fetch</button>
      <header className="App-header">
        <p>HELLO</p>
      </header>
    </React.Fragment>
  );
}

export default App;
