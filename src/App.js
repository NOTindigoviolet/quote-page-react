import React from "react";
import "./App.css";

function App() {
  async function fetchEnglishHandler() {
    const response = await fetch("https://api.quran.com/api/v4/verses/random?language=en&translations=131");
    const data = await response.json();

    console.log("Test")

    const num = data.verse.verse_key

    const uri = 'https://api.quran.com/api/v4/quran/verses/uthmani?verse_key=' + encodeURIComponent(num);

    const response2 = await fetch(uri);
    const data2 = await response2.json()

    // for (let i in data.words){
    //   console.log(data.verse.words[i].translation.te xt);
    // }

    // next try to get full arabic text using ayah number 

    // data.verse.words.forEach((dat) => {
    //   console.log(dat.translation.text);
    // });

    console.log(data.verse.translations[0].text);

    console.log(data2.verses[0].text_uthmani);

    console.log(num);
  }

  return (
    <React.Fragment>
      <button onClick={fetchEnglishHandler}>Get English</button>
      <header className="App-header">
        <p>HELLO</p>
      </header>
    </React.Fragment>
  );
}

export default App;
