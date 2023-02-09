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
     <AddTodo todoList = {todoList}/>
    </div>
  );
}

export default App;
