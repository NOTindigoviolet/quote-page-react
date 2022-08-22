import React, { useState, useCallback, useEffect } from "react";
import TranslatedScript from "./components/TranslatedScript";
import "./App.css";

function App() {
  const [script, setScript] = useState([]);

  const fetchScriptHandler = useCallback(async () => {
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

      const transformedData = () => {
        return {
          verse: data.verse.verse_key,
          eng: data.verse.translations[0].text,
          arb: data2.verses[0].text_uthmani,
        };
      };

      setScript(transformedData);
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    fetchScriptHandler();
  }, [fetchScriptHandler]);

  let translatedScript = <TranslatedScript text={script}/>;

  return (
    <React.Fragment>
      <header className="App-header">
        <p>HELLO</p>
      </header>
      <section>{translatedScript}</section>
    </React.Fragment>  
  );
}

export default App;
