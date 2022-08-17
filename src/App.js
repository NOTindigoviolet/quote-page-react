import React, { useCallback, useEffect } from "react";
import "./App.css";

function App() {
  const fetchEnglishHandler = useCallback(async () => {
    try {
      const response = await fetch(
        "https://api.quran.com/api/v4/verses/random?language=en&translations=131"
      );
      const data = await response.json();

      console.log("Test");

      const num = data.verse.verse_key;

      const uri =
        "https://api.quran.com/api/v4/quran/verses/uthmani?verse_key=" +
        encodeURIComponent(num);

      const response2 = await fetch(uri);
      const data2 = await response2.json();

      console.log(data.verse.translations[0].text);

      console.log(data2.verses[0].text_uthmani);

      console.log(num);
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    fetchEnglishHandler();
  }, [fetchEnglishHandler]);

  return (
    <React.Fragment>
      <header className="App-header">
        <p>HELLO</p>
      </header>
    </React.Fragment>
  );
}

export default App;
