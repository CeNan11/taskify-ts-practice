import React from 'react';
import { useState } from 'react';
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

    const [isEditing, setIsEditing] = useState<boolean>(false);
    const [editText, setEditText] = useState<string>(todos.todo);

    const handleDone = (id: number) => {
        setToDos(prev =>
            prev.map(todo =>
            todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
            )
        );
    };

    const handleDelete = (id: number) => {
        setToDos(prev => prev.filter(todo => todo.id !== id));
    };

    const handleEdit = (id: number) => {
        if (editText.trim() === "") {
            alert("Task cannot be empty!");
            return;
        } else {
            setToDos(prev =>
            prev.map(todo =>
                todo.id === id ? { ...todo, todo: editText } : todo
            )
            );
            setIsEditing(false);
        }
    };
    
  return (
    <form className="flex flex-col justify-between px-5 py-4 transition-transform duration-300 bg-yellow-500 rounded-md w-[300px] h-[120px] hover:scale-105 overflow-hidden">
        
        {
            isEditing ?

            (
                <input
                    value={editText}
                    onChange={(e) => setEditText(e.target.value)}
                    onKeyDown={(e) => {
                        if(e.key === 'Enter'){
                            e.preventDefault();
                            handleEdit(todos.id);
                        }
                    }}
                    className="px-3 py-1 focus:outline-none"
                    //autoFocus
                />
            ):(
                <span className={`font-medium break-words text-md ${
                                todos.isDone ? 'line-through' : ''
                            }`}
          
                >{todos.todo}</span>
            )
        }
        <div className="flex justify-end gap-3 mr-2">
            <button 
                    onClick={() => handleDone(todos.id)} 
                    type="button"
                    className="transition-transform duration-300 hover:scale-125">
                <FaCheck />
            </button>
            <button 
                    type="button"
                    onClick={() => setIsEditing(true)}
                    className="transition-transform duration-300 hover:scale-125">
                <FaEdit />
            </button>
            <button 
                    type="button"
                    onClick= {() => handleDelete(todos.id)}
                    className="transition-transform duration-300 hover:scale-125">
                <FaTrash />
            </button>
        </div>
    </form>
  )
}

export default SingleToDo;