import React from 'react'
import type {ToDo} from '../model';
import { FaEdit } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";
import { FaTrash } from "react-icons/fa";

type Props = {
    todos: ToDo;
    toDos: ToDo[];
    setToDos: React.Dispatch<React.SetStateAction<ToDo[]>>
}

const SingleToDo: React.FC<Props>= ({todos, toDos, setToDos}) => {
  return (
    <form className="flex flex-wrap justify-between px-5 py-6 mt-2 transition-transform duration-300 bg-yellow-500 rounded-md w-[300px] h-[100px] hover:scale-105">
        <span className="pr-16 break-words text-md font-md">{todos.todo}</span>
        <div className="flex self-end gap-3 ml-20">
            <button className="transition-transform duration-300 hover:scale-125">
                <FaCheck/>
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