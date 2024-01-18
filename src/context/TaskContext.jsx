import { useState, createContext } from "react";
import { v4 as uuidv4 } from "uuid";
// import { tasks as tasksData } from "../data/tasks";
import PropTypes from "prop-types";

const TaskContext = createContext();

function TaskContextProvider(props) {
  const [tasks, setTasks] = useState(() => {
    const tasksFromStorage = window.localStorage.getItem("tasks");
    return tasksFromStorage ? JSON.parse(tasksFromStorage) : [];
  });

  const createTask = (task) => {
    const newTasks = [
      ...tasks,
      {
        title: task.title,
        id: uuidv4(),
        description: task.description,
      },
    ];
    setTasks(newTasks);
    window.localStorage.setItem("tasks", JSON.stringify(newTasks));
  };

  const deleteTask = (taskId) => {
    const newTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(newTasks);
    window.localStorage.setItem("tasks", JSON.stringify(newTasks));
  };

  return (
    <TaskContext.Provider
      value={{
        tasks,
        createTask,
        deleteTask,
      }}
    >
      {props.children}
    </TaskContext.Provider>
  );
}

TaskContextProvider.propTypes = {
  children: PropTypes.any.isRequired,
};

export { TaskContext, TaskContextProvider };
