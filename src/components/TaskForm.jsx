import { useState, useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const { createTasks } = useContext(TaskContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    createTasks({
      title,
      description,
    });
    setTitle("");
    setDescription("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-zinc-800 p-10 mb-4 max-w-lg mx-auto"
    >
      <h1 className="text-2xl font-bold mb-3">Add your task</h1>
      <input
        placeholder="Write your task"
        autoFocus
        onChange={(e) => {
          setTitle(e.target.value);
        }}
        value={title}
        className="bg-zinc-700 p-3 w-full mb-2"
      />
      <textarea
        placeholder="Write the description of task"
        onChange={(e) => {
          setDescription(e.target.value);
        }}
        value={description}
        className="bg-zinc-700 p-3 w-full mb-2"
      ></textarea>
      <button className="bg-indigo-800 px-3 py-1 rounded-lg border-solid border-transparent  hover:border-indigo-500">
        Save
      </button>
    </form>
  );
}

export { TaskForm };
