import React from 'react'
import type {ToDo} from '../model';

type Props ={
    todos: ToDo;
    toDos: ToDo[];
    setToDos: React.Dispatch<React.SetStateAction<ToDo[]>>
}

const SingleToDo: React.FC<Props>= ({todos, toDos, setToDos}) => {
  return (
    <form>
        <span>{todos.todo}</span>
    </form>
  )
}

export default SingleToDo