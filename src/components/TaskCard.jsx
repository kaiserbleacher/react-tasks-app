import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";
import PropTypes from "prop-types";

function TaskCard({ task }) {
  const { deleteTask } = useContext(TaskContext);
  return (
    <div className="bg-zinc-800 p-4 rounded-lg">
      <h1 className="text-xl font-bold capitalize">
        {task.title}
      </h1>
      <p className="text-gray-400 text-sm">{task.description}</p>
      <button className="bg-red-800 px-2 py-1 rounded-lg mt-4 border-solid border-transparent hover:border-red-500"
        onClick={() => {
          deleteTask(task.id);
        }}
      >
        Delete
      </button>
    </div>
  );
}

TaskCard.propTypes = {
  task: PropTypes.object.isRequired,
};

export { TaskCard };
