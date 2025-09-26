import { useState } from "react";
function AddTask({onAddTaskSubmit}) {
    const [tittle, setTittle] = useState("");
    const [description, setDescription] = useState("");
  return (
    <div
      className="space-y-10 bg-slate-700 p-6 bg-whi rounded-md shadow-2xl text-white flex flex-col"
      flex
      flex-col
      gap-2
    >
      <input
        type="text"
        placeholder="Digite o título da tarefa"
        className="border border-slate-300 outline-slate-400 px-4 py-2 w-full" 
        value={tittle} 
        onChange={(event) => setTittle(event.target.value)} 
      />

      <input
        type="text"
        placeholder="Digite a descrição da tarefa"
        className="border border-slate-300 outline-slate-400 px-4 py-2 w-full" 
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      />
      <button 
      onClick={() => {
        onAddTaskSubmit(tittle, description);
        setTittle("");
        setDescription("");
      }}
      className="bg-slate-500 text-white px-4 py-2 hover:text-black transition-colors duration-300 hover:bg-amber-50 font-medium">Adicionar
      </button>
    </div>
  );
}

export default AddTask;
