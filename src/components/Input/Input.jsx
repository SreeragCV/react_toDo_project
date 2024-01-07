import React, { useState } from "react";
import classes from "./Input.module.css";
import Error from "../Error/Error";

function Input({ onSelect }) {
  const [addToDo, setAddToDo] = useState("");
  const [didEdit, setDidEdit] = useState(false);

  const isValid = addToDo.length !== 0;

  async function handleAddToDo(value) {
    setDidEdit(true);
    const newtodo = addToDo
    if (isValid) {
      setDidEdit(false)
      setAddToDo('')
      return onSelect(newtodo);
    }
  }

  console.log(addToDo);

  function handleChange(value) {
    setAddToDo(value);
    setDidEdit(false);
  }

  function onBlur() {
    setDidEdit(false);
  }

  return (
    <>
      <main className={classes.main}>
        <input
          onBlur={onBlur}
          onChange={(e) => handleChange(e.target.value)}
          className={classes.input}
          type="text"
          value={addToDo}
          required
        />
        <button
          onClick={() => handleAddToDo(addToDo)}
          className={classes.button}
        >
          Add
        </button>
      </main>
      {didEdit && !isValid && <Error title="Enter a valid to-do!" />}
    </>
  );
}

export default Input;
