import { ChevronRight, ChevronRightIcon, TrashIcon } from "lucide-react";
import { useNavigate } from "react-router";

function Tasks(props) {
  const navigate = useNavigate();

  function onSeeDetailsClick(task) {
    const query = new URLSearchParams()
    query.set("title", task.title);
    query.set("description", task.description); 
    navigate(`/task?${query.toString()}`);
  }
  return (
    <ul className="space-y-2 p-6 bg-slate-200 rounded-md mt-4 shadow-2xl">
      {props.tasks.map((task) => (
        <li key={task.id} className="flex gap-2">
          <button
            onClick={() => props.onTaskClick(task.id)}
            className={`bg-slate-400 w-full text-white text-left p-2 rounded-md ${
              task.isCompleted && "line-through"
            }`}
          >
            {task.title}
          </button>
          <button onClick={() => onSeeDetailsClick(task)} className="bg-slate-400 ml-2 p-2 rounded-md text-white">
            <ChevronRight />
          </button>
          <button onClick={() => props.onDeleteTaskClick(task.id)} className="bg-slate-400 ml-2 p-2 rounded-md text-white">
            <TrashIcon />
          </button>
        </li>
      ))}
    </ul>
  );
}

export default Tasks;
