import React from 'react'
import type { ToDo } from '../model';
import SingleToDo  from "./SingleToDo";

interface Props{
    toDos: ToDo[];
    setToDos: React.Dispatch<React.SetStateAction<ToDo[]>>;
}

const ToDoList: React.FC<Props> = ({ toDos, setToDos }) => {
  return (
    <div className="flex flex-wrap items-start justify-start max-w-6xl gap-4 px-4 mx-auto mt-10 ml-40">
      {toDos.map((todos) =>
        <SingleToDo
            key={todos.id}
            todos={todos}
            toDos={toDos}
            setToDos={setToDos}
        />
    )}
    </div>
  );
};


export default ToDoList;