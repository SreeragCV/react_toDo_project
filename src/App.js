import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header.jsx";
import Input from "./components/Input/Input.jsx";
import ToDoList from "./components/ToDoList/ToDoList.jsx";
import CompletedTasks from "./components/CompletedTasks/CompletedTasks.jsx";

function App() {
  const [addToDolist, setAddToDoList] = useState({
    toDos: [],
  });

  const [completedToDos, setCompletedToDos] = useState({
    tasks: [],
  });

  function handleToDos(toDo) {
    setAddToDoList((prevTodDos) => {
      const id = Math.floor(Math.random() * 1000);
      const newToDo = {
        toDo,
        id,
      };
      return {
        ...prevTodDos,
        toDos: [...prevTodDos.toDos, newToDo],
      };
    });
  }

  function handleDelete(id) {
    setAddToDoList((prevToDos) => {
      const toDos = prevToDos.toDos;
      console.log(toDos);
      const filteredTodo = toDos.filter((toDo) => toDo.id !== id);
      return {
        toDos: filteredTodo,
      };
    });
  }

  function handleComplete(id, checked) {
    const findTask = addToDolist.toDos.find((toDo) => toDo.id === id);
    const alreadyExist = completedToDos.tasks.find(
      (element) => element.id === id
    );
    const newCompletedTask = {
      ...findTask,
      checked,
    };
    if (!alreadyExist && newCompletedTask.checked) {
      setCompletedToDos((prevCompleted) => {
        return {
          tasks: [...prevCompleted.tasks, newCompletedTask],
        };
      });
    } else if (!newCompletedTask.checked) {
      setCompletedToDos((prevCompleted) => {
        const removeCompleted = prevCompleted.tasks.filter(
          (toDo) => toDo.id !== id
        );
        return {
          tasks: removeCompleted,
        };
      });
    }
  }

  // console.log(completedToDos);
  // console.log(addToDolist);

  return (
    <div className="App">
      <Header />
      <Input onSelect={handleToDos} />
      <ToDoList
        list={addToDolist.toDos}
        deleteToDo={handleDelete}
        completedTask={handleComplete}
      />
      <CompletedTasks tasksCompleted={completedToDos.tasks} />
    </div>
  );
}

export default App;
