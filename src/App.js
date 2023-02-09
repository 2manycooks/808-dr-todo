import { useState, useEffect } from 'react'
import axios from "axios"
import AddTodo from './AddTodo'

function App() {
  const [todoList, setTodoList] = useState([])

  useEffect(()=> {
    axios
    .get("/api/todos/")
    .then((res) => {
      console.log(res.data)
      setTodoList(res.data)
    })
    .catch((err) => console.log(err))
  }, [])

  return (
    <div className="App">

      {/* let's add browserrouter to this! How will we want to achieve this? Let's maybe think back to our labs. */}
      {/* Probably wrap everything inside of browserrouter, and we'll probably need to refactor AddTodo as well. */}
      {/* We should split this all up into a list of all todos and routes for specific todos. */}
     <AddTodo todoList = {todoList}/>
    </div>
  );
}

export default App;
