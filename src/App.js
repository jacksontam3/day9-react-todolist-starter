import { createContext, useReducer } from "react";
import './App.css';
import TodoList from "./components/TodoList";
import TodoGenerator from "./components/TodoGenerator";
import { initialState, todoReducer } from "./context/todoReducer";

export const TodoContext = createContext();

function App() {
  const [state, dispatch] = useReducer(todoReducer, initialState);

  return (
    <div className="App">
      <TodoContext.Provider value={{ state, dispatch }}>
        <TodoList/>
          <TodoGenerator/>
      </TodoContext.Provider>
    </div>
  );
}

export default App;
