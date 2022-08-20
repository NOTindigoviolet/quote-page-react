import React, { useState, useCallback, useEffect } from "react";
import ArabicScript from "./components/ArabicScript";
import EnglishScript from "./components/EnglishScript";
import "./App.css";

function App() {
  const [eng, setEnglish] = useState();
  const [ara, setArabic] = useState([]);

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

      const transformedEnglish = data.verse.translations.map((engData) => {
        return {
          verse: data.verse.verse_key,
          txt: engData.text,
        };
      });

      const transformedArabic = data2.verses.map((araData) => {
        return {
          txt: araData.text_uthmani,
        };
      });

      setEnglish(transformedEnglish);
      setArabic(transformedArabic);
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    fetchEnglishHandler();
  }, [fetchEnglishHandler]);

  let englishTranslation = <EnglishScript eng={eng} />;
  let arabicScript = <ArabicScript ara={ara} />;

  return (
    <React.Fragment>
      <header className="App-header">
        <p>HELLO</p>
      </header>
      <section>{englishTranslation}</section>
      <section>{arabicScript}</section>
    </React.Fragment>
  );
}

export default App;
