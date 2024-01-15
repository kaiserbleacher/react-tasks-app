import { TaskForm } from "./components/TaskForm";
import { TaskList } from "./components/TaskList";

function App() {
  return (
    <main className="h-screen p-5">
      <div className="container mx-auto p-10">
        <TaskForm />
        <TaskList />
      </div>
    </main>
  );
}

export default App;
