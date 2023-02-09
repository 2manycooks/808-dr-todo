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
     <div>
      <p>
        {todoList.map((e) => {
          return(
            <div style={{color: e.completed ? 'green' : 'red', borderRadius: '1px'}}>
              <h2> {e.title} </h2>
              <p> {e.description} </p>
            </div>
          )
        })}
      </p>
     </div>
     <AddTodo todoList = {todoList}/>
    </div>
  );
}

export default App;
