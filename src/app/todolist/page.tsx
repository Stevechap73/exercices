"use client";

import FormData from "@/Components/FormData";
import Header from "@/Components/Header";
import { todoType } from "@/Components/TodoItem";
import Todolist from "@/Components/Todolist";

import React, { useState } from "react";

const Todoliste = () => {
  const [todos, setTodos] = useState<todoType[]>([]);

  return (
    <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden mt-16">
      <Header title={"Todo List"} />
      <FormData setTodos={setTodos} todos={todos} />
      <Todolist todos={todos} />
    </div>
  );
};

export default Todoliste;
