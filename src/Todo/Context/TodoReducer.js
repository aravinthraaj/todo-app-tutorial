export const initialState = {
  todoList: [
    {
      id: 1,
      task: "obe",
      completed: false,
      isEditable: false,
    },
    {
      id: 2,
      task: "osdfsddsfdsfdffbe",
      completed: false,
      isEditable: false,
    },
  ],
  text: "",
}

const addTodo = (state, text) => ({
  ...state,
  todoList: [
    ...state.todoList,
    {
      id: Math.random(),
      task: text,
      completed: false,
      isEditable: false,
    },
  ],
});

const toggleCompletedTodo = (state, id) => ({
  ...state,
  todoList: state.todoList.map((todo) =>
    todo.id === id ? { ...todo, completed: !todo.completed } : todo
  ),
});

const toggleEditableTodo = (state, id) => ({
  ...state,
  todoList: state.todoList.map((todo) =>
    todo.id === id ? { ...todo, isEditable: !todo.isEditable } : todo
  ),
});

const updateEditedTodo = (state, { event, id }) => ({
  ...state,
  todoList: state.todoList.map((todo) =>
    todo.id === id ? { ...todo, task: event.target.value } : todo
  ),
});

const deleteTodo = (state, id) => ({
  ...state,
  todoList: state.todoList.filter((todo) => todo.id !== id),
});

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return addTodo(state, action.payload);
    case "UPDATE_COMPLETED_TODO":
      return toggleCompletedTodo(state, action.payload);
    case "TOGGLE_EDITABLE":
      return toggleEditableTodo(state, action.payload);
    case "UPDATE_EDITED_TODO":
      return updateEditedTodo(state, action.payload);
    case "DELETE_TODO":
      return deleteTodo(state, action.payload);
    default:
      return state;
  }
};
