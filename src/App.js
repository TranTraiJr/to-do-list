import { useState } from "react";
import Header from "./components/Header.js";
import TaskList from "./components/TaskList.js";
import AddTaskForm from "./components/AddTaskForm.js";

function App() {
  const [tasks, setTasks] = useState([
    { id: "task_1", title: "Learn JS", status: 0 },
    { id: "task_2", title: "Code a Todo List", status: 0 },
  ]);

  const [showIncomplete, setShowIncomplete] = useState(false);

  const [newTask, setNewTask] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (newTask) {
      const task = {
        id: Date.now(),
        title: newTask,
        status: 0,
      };
      setTasks([...tasks, task]);
    }
  }

  function handleInputChange(e) {
    setNewTask(e.target.value);
  }

  function setTaskStatus(taskId, status) {
    setTasks(
      tasks.map((task) => {
        if (task.id === taskId) {
          return { ...task, status: status ? 1 : 0 };
        }
        return task;
      })
    );
  }
  function removeTask(taskId) {
    setTasks(tasks.filter((task) => task.id !== taskId));
  }
  return (
    <div className="container">
      <Header title="To Do List" subTitle="Get things done, one item at item" />
      <TaskList
        tasks={tasks}
        showIncomplete={showIncomplete}
        setTaskStatus={setTaskStatus}
        removeTask={removeTask}
        setShowIncomplete={setShowIncomplete}
      />
      <AddTaskForm
        handleSubmit={handleSubmit}
        handleInputChange={handleInputChange}
      />
      ;
    </div>
  );
}

export default App;
