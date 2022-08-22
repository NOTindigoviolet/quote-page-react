import React from "react";

function TranslatedScript(props) {
  return (
    <section>
      <h1>{props.text.arb}</h1>
      <h3>{props.text.eng}</h3>
      <h3>{props.text.verse}</h3>
    </section>
  );
}

export default TranslatedScript;
