import React, { useState } from "react"
import { handleKeyDown } from "../utils"
import { useTodoContext } from "../Context/TodoContext"

const AddTask = ()=> {
  const [text, setText] = useState("")
  const { addTodo } = useTodoContext()

  return (
    <div className="addTodo">
      <input
        type="text"
        onChange={(e) => {
          setText(e.target.value)
        }}
        onKeyDown={(e) => handleKeyDown(e, addTodo, "Enter")}
        value={text}
      />
      <button
        onClick={() => {
          addTodo(text)
          setText("")
        }}
      >
        Add Task
      </button>
    </div>
  )
}

export default AddTask
