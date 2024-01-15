import { useState, useEffect, createContext } from "react";
import { tasks as tasksData } from "../data/tasks";
import PropTypes from "prop-types";

const TaskContext = createContext();

function TaskContextProvider(props) {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    setTasks(tasksData);
  }, []);

  const createTasks = (task) => {
    setTasks([
      ...tasks,
      {
        title: task.title,
        id: tasks.length,
        description: task.description,
      },
    ]);
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id != taskId));
  };

  return (
    <TaskContext.Provider
      value={{
        tasks,
        createTasks,
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
