import React, { createContext, useReducer, useContext, useEffect } from "react"
import { initialState, reducer } from "./TodoReducer"
import useLocalStorage from "../hooks/useLocalStorage"

const TodoContext = createContext(initialState)

const TodoProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  const [saved, setSaved] = useLocalStorage("todo", initialState)


  useEffect(()=>{
    
  },[])
  
  useEffect(() => {
    setSaved(state)
  }, [state])

  const addTodo = (text) => {
    dispatch({ type: "ADD_TODO", payload: text })
  }

  const toggleCompletedTodo = (id) => {
    dispatch({ type: "UPDATE_COMPLETED_TODO", payload: id })
  }

  const toggleEditableTodo = (id) => {
    dispatch({ type: "TOGGLE_EDITABLE", payload: id })
  }

  const updateEditedTodo = (event, id) => {
    dispatch({ type: "UPDATE_EDITED_TODO", payload: { event, id } })
  }

  const deleteTodo = (id) => {
    dispatch({ type: "DELETE_TODO", payload: id })
  }

  const todoData = {
    todoList: state.todoList,
    addTodo,
    toggleCompletedTodo,
    toggleEditableTodo,
    updateEditedTodo,
    deleteTodo,
  }

  return (
    <TodoContext.Provider value={todoData}>{children}</TodoContext.Provider>
  )
}

const useTodoContext = () => {
  return useContext(TodoContext)
}

export { TodoContext, TodoProvider, useTodoContext }
