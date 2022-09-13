import React from "react";

function VerseForm(props) {
  async function fetchVerseHandler(event) {
    event.preventDefault();
    console.log(event.target.value);
    // try {
    //   const uri =
    //     "https://api.quran.com/api/v4/quran/verses/uthmani?verse_key=" +
    //     encodeURIComponent(surah);

    //   const response2 = await fetch(uri);
    //   const data2 = await response2.json();
    //   console.log(data2);
    // } catch (error) {
    //   console.log(error);
    // }
  }

  return (
    <form>
      <div className="form-main">
        <label htmlFor="surah">Enter Surah</label>
        <input type="text" id="surah" name="surah"/>
      </div>
      <div className="form-main">
        <label htmlFor="ayah">Enter Ayah</label>
        <input type="text" id="ayah" name="ayah"/>
      </div>
      <div>
        <button onClick={fetchVerseHandler} type="submit">Submit</button>
      </div>
    </form>
  );
}

export default VerseForm;
