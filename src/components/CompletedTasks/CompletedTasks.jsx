import React from "react";
import classes from "./CompletedTasks.module.css";

export default function CompletedTasks({ tasksCompleted }) {
  
  return (
    <div className={tasksCompleted.length > 0 ? classes.div1 : classes.div2}>
      <h1>Completed Tasks</h1>
      {tasksCompleted.length === 0 && <p className={classes.noTasks}>No completed tasks right now..</p>}
      <ul>
        {tasksCompleted.map((task) => {
          return (
            <li key={task.id}>
              <p className={classes.tasks}>{task.toDo}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
