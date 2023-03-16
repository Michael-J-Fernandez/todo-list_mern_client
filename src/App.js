
import {
  RouterProvider,
  createBrowserRouter,
  createRouterFromElements,
  NavLink,
  Link,
  Routes,
  Route
} from 'react-router-dom'
import { useEffect, useState } from 'react'
import './App.css';
import axios from 'axios';

const api = axios.create({
  baseURL: "/api/todos",
});


function App() {

  const [ todos, setTodos ] = useState([]);

  useEffect(() => {
    const getAllTodos = async () => {
      try {
        const res = await api.get("/");
        setTodos(res.data);
      } catch (err) {
        const { data, status, headers } = err;
        console.log(data, status, headers);
      }
    }
    getAllTodos();
  }, []);






  return (
    <div className="App">
        {todos.map(todo => {
          const { title, description } = todo;
          return (
            <div className="todo-card">
              <h1>{title}</h1>
              <p>{description}</p>
            </div>
          )
        })}

    </div>
  );
}

export default App;