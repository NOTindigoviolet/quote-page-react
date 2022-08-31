import React from "react";

function VerseForm(props) {
  return (
    <form>
      <div className="form-main">
        <label htmlFor="surah">Enter Surah</label>
        <input type="number" id="surah" />
      </div>
      <div>
        <button>Submit</button>
      </div>
    </form>
  );
}

export default VerseForm;