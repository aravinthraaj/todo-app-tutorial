import "./App.css"
import Todo from "./Todo/Todo"
import { TodoProvider } from "./Todo/Context/TodoContext"

function App() {
  return (
    <div className="App">
      <TodoProvider>
        <Todo />
      </TodoProvider>
    </div>
  )
}

export default App