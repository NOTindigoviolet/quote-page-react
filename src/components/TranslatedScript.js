import React from "react";

import classes from './TranslatedScript.module.css';

function TranslatedScript(props) {
  return (
    <section className={classes.script}>
      <h1>{props.text.arb}</h1>
      <h3>{props.text.eng}</h3>
      <h3>{props.text.verse}</h3>
    </section>
  );
}

export default TranslatedScript;
