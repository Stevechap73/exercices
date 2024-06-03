import React from "react";
import TodoItem, { todoType } from "./TodoItem";

export type propsType = { todos: todoType[] };

const Todolist = ({ todos }: propsType) => {
  return (
    <ul className="divide-y divide-gray-200 px-4">
      {todos.map((todo) => (
        <TodoItem key={todo.id} {...todo} />
      ))}
    </ul>
  );
};

export default Todolist;
