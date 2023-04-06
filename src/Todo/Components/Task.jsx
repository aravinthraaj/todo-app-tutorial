import React from "react"
import { handleKeyDown } from "../utils"
import { useTodoContext } from "../Context/TodoContext"

function Task({ todo }) {
  const {
    toggleCompletedTodo,
    toggleEditableTodo,
    updateEditedTodo,
    deleteTodo,
  } = useTodoContext()
  return (
    <div className="task">
      <input
        type="checkbox"
        onChange={() => toggleCompletedTodo(todo.id)}
        checked={todo.completed}
      />
      {!todo.isEditable ? (
        <p
          style={{
            display: "inline",
            textDecoration: todo.completed ? "line-through" : "unset",
          }}
        >
          {todo.task}
        </p>
      ) : (
        <input
          type="text"
          value={todo.task}
          onChange={(e) => updateEditedTodo(e, todo.id)}
          onKeyDown={(e) =>
            handleKeyDown(e, () => toggleEditableTodo(todo.id), "Enter")
          }
        />
      )}

      <button onClick={() => toggleEditableTodo(todo.id)}>
        {!todo.isEditable ? "Edit" : "Save"}
      </button>
      <button onClick={() => deleteTodo(todo.id)}>X</button>
    </div>
  )
}

export default Task
