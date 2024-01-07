import React from "react";

export default function CompletedTasks({ tasksCompleted }) {
  return (
    <div>
      <ul>
        {tasksCompleted.map((task) => {
          return <li>{task.toDo}</li>;
        })}
      </ul>
    </div>
  );
}
