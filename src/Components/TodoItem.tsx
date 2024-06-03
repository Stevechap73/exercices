import React from "react";

export type todoType = {
  id: number;
  title: string;
  date: string;
  checked: boolean;
};

const TodoItem = ({ id, title, date, checked }: todoType) => {
  return (
    <li className="py-4">
      <div className="flex items-center">
        <input
          id={`todo-${id}`}
          name={`todo-${id}`}
          type="checkbox"
          className="h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300 rounded"
        />
        <label htmlFor={`todo-${id}`} className="ml-3 block text-gray-900">
          <span className="text-lg font-medium">{title}</span>
          <span className="text-sm font-light text-gray-500">On {date}</span>
        </label>
      </div>
    </li>
  );
};

export default TodoItem;
