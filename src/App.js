import React from "react";
import "./App.css";

function App() {
  async function fetchStuffHanlder() {
    const response = await fetch("https://api.quran.com/api/v4/verses/random?language=en&translations=131");
    const data = await response.json();

    console.log("Test")

    // for (let i in data.words){
    //   console.log(data.verse.words[i].translation.te xt);
    // }

    // data.verse.words.forEach((dat) => {
    //   console.log(dat.translation.text);
    // });

    console.log(data.verse.translations[0].text);
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
