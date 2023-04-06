import React from "react";
import Task from "./Task";
import { useTodoContext } from "../Context/TodoContext";

const TaskList = () => {
  const { todoList } = useTodoContext();

  return (
    <div className="taskList">
      {todoList.map((todo) => (
        <Task key={todo.id} todo={todo} />
      ))}
    </div>
  );
};

export default TaskList;