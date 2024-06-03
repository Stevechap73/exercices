import React, { useState } from "react";

const FormData = ({ setTodos, todos }: any) => {
  const [text, setText] = useState("");
  return (
    <form className="w-full max-w-sm mx-auto px-4 py-2">
      <div className="flex items-center border-b-2 border-teal-500 py-2">
        <input
          className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
          type="text"
          placeholder="Add a task"
          onChange={(e) => {
            setText(e.target.value);
          }}
        />
        <button
          className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded"
          type="button"
          onClick={() => {
            setText("");
            setTodos([
              {
                id: "id",
                title: text,
                date: new Date().toLocaleDateString(),
                checked: false,
              },
              ...todos,
            ]);
          }}
        >
          Add
        </button>
      </div>
    </form>
  );
};

export default FormData;
