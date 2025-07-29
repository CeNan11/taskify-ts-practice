import React from 'react';

interface Props{
    toDo: string;
    setToDo: React.Dispatch<React.SetStateAction<string>>;
    handleAdd: (e: React.FormEvent<HTMLFormElement>) => void;
}

const InputField: React.FC<Props> = ({ toDo, setToDo, handleAdd }) => {
  return (
    <form
      className="relative flex items-center justify-center mt-5"
      onSubmit={(e) => handleAdd(e)}
    >
      <input
        type="text"
        value={toDo}
        onChange={(e) => setToDo(e.target.value)}
        placeholder="Enter Task"
        className="rounded-full w-[300px] px-4 py-2 pr-16 focus:outline-none"
      />
      <button
        type="submit" 
        className="absolute bg-blue-500 right-2 py-1.5 px-4 rounded-full text-white transition-transform hover:scale-90 ease-out"
      >
        Go
      </button>
    </form>
  );
};

export default InputField;