import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";
import PropTypes from "prop-types";

function TaskCard({ task }) {
  const { deleteTask } = useContext(TaskContext);
  return (
    <div className="flex flex-col min-w-30 md:min-w-40 justify-between bg-zinc-800 p-4 rounded-lg">
      <h1 className="text-xl font-bold capitalize">{task.title}</h1>
      <p className="text-gray-400 text-sm">{task.description}</p>
      <button
        className="max-w-20 bg-red-800 px-2 py-1 rounded-lg mt-4 border-[1px] border-solid border-transparent transition-colors hover:border-red-500"
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
