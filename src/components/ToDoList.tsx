import React from 'react'

interface Props{
    toDos: ToDo[];
    setToDos: React.Dispatch<React.SetStateAction<ToDo[]>>;
}

const ToDoList: React.FC = ({toDos, setToDos} : Props) => {
  return (
    <div>
        
    </div>
  )
}

export default ToDoList;