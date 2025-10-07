import { useSearchParams } from "react-router";
import { useNavigate } from "react-router-dom";
import AddTask from "../components/AddTask";
import Tasks from "../components/Tasks";
import { ChevronLeft, ChevronLeftIcon } from "lucide-react";

function Taskpage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const title = searchParams.get("title");
  const description = searchParams.get("description");
  return (
    <div className="h-screen w-screen bg-slate-500 flex justify-center items-center">
      <div className="w-[500px] bg-slate-400 rounded-md shadow-2xl p-6 text-white flex flex-col gap-4">
        <div className="flex justify-center relative items-center">
          <button onClick={() => navigate(-1)} className="absolute left-0 top-0 bottom-0">
            <ChevronLeftIcon />
          </button>
          <h1 className="text-3xl text-slate-100 font-bold text-center">
            Detalhes da tarefa
          </h1>
        </div>

        <div className="bg-slate-700 p-6 rounded-md flex flex-col gap-4">
          <h2 className="text-2xl font-bold">{title}</h2>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}

export default Taskpage;
