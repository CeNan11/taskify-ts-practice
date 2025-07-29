import React from 'react'
import type {ToDo} from '../model';
import { FaEdit } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";
import { FaTrash } from "react-icons/fa";

type Props = {
    todos: ToDo;
    toDos: ToDo[];
    setToDos: React.Dispatch<React.SetStateAction<ToDo[]>>
    handleDone: (e: React.FormEvent<HTMLFormElement>) => void;
}

const SingleToDo: React.FC<Props>= ({todos, toDos, setToDos}) => {

    const handleDone = (id: number) => {
        setToDos(prev =>
            prev.map(todo =>
            todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
            )
        );
    };


  return (
    <form className="flex flex-col justify-between px-5 py-4 transition-transform duration-300 bg-yellow-500 rounded-md w-[300px] h-[120px] hover:scale-105 overflow-hidden">
        
        {
            todos.isDone ?
            (
                 <s className="font-medium break-words text-md">{todos.todo}</s>

            ):(
                <span className="font-medium break-words text-md">{todos.todo}</span>

            )
        }
        <div className="flex justify-end gap-3 mr-2">
            <button 
                    onClick={() => handleDone(todos.id)} 
                    type="button"
                    className="transition-transform duration-300 hover:scale-125">
                <FaCheck />
            </button>
            <button className="transition-transform duration-300 hover:scale-125">
                <FaEdit />
            </button>
            <button className="transition-transform duration-300 hover:scale-125">
                <FaTrash />
            </button>
        </div>
    </form>
  )
}

export default SingleToDo