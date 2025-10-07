import { useState } from "react";
import Input from "./input";
function AddTask({onAddTaskSubmit}) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
  return (
    <div
      className="space-y-10 bg-slate-700 p-6 bg-whi rounded-md shadow-2xl text-white flex flex-col"
      flex
      flex-col
      gap-2
    >
      <Input
        type="text"
        placeholder="Digite o título da tarefa"
        value={title} 
        onChange={(event) => setTitle(event.target.value)} 
      />
      <Input
        type="text"
        placeholder="Digite a descrição da tarefa" 
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      />
      <button 
      onClick={() => {
        onAddTaskSubmit(title, description);
        setTitle("");
        setDescription("");
      }}
      className="bg-slate-500 text-white px-4 py-2 hover:text-black transition-colors duration-300 hover:bg-amber-50 font-medium">Adicionar
      </button>
    </div>
  );
}

export default AddTask;
