import React, { useState } from 'react';
import InputField from "./components/InputField";
import type { ToDo } from "./model";
import ToDoList from "./components/ToDoList";

const App: React.FC = () => {

  const [toDo, setToDo] = useState<string>("");
  const [toDos, setToDos] = useState<ToDo[]>([]);

  const handleAdd = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if(toDo.trim() === "") return;
    setToDos([...toDos, {id: Date.now(), todo: toDo, isDone:false}]);
    setToDo("");
  };

  return (
    <div className="flex flex-col items-center min-h-screen pt-10 bg-blue-800">
      <div>
        <h1 className="text-5xl text-center text-white font-neucha">Taskify</h1>
        <InputField toDo={toDo} setToDo={setToDo} handleAdd={handleAdd}/>
      </div>
      <div>
        <ToDoList toDos={toDos} setToDos={setToDos}/>
      </div>
    </div>
  );
}

export default App;