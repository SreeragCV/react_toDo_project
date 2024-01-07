import React from "react";
import classes from "./ToDoList.module.css";

function ToDoList({ list, deleteToDo, completedTask }) {
  function handleDelete(id) {
    deleteToDo(id);
  }

  function handleCheck(id, checked){
    completedTask(id, checked)
  }

  return (
    <div className={classes.list}>
      {list.length > 0 && (
        <ul className={classes.ul}>
          {list.map((toDo) => {
            return (
              <li className={classes.li} key={toDo.id}>
                <input type="checkbox" onClick={(e) => handleCheck(toDo.id, e.target.checked)} />
                {toDo.toDo}
                <button
                  onClick={() => handleDelete(toDo.id)}
                  className={classes.delete}
                >
                  X
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}

export default ToDoList;
