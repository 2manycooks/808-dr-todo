import { useState, useEffect } from 'react'
import API from "./API"

export default function AddMovie(props) {

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [completed, setCompleted] = useState(false)
    const [todoList, setTodoList] = useState(props.todoList)


    useEffect(() => {
        refreshTodos()
    }, [])


    const refreshTodos = () => {
        API.get("/")
            .then((res) => {
                setTodoList(res.data)
            })
            .catch(console.error)
    }


    const onSubmit = (e) => {
        e.preventDefault()
        let todo = { title, description, completed }
        API.post("/", todo).then(() => refreshTodos())
    }

    const onUpdate = (id) => {
        let todo = {title}
        API.patch(`/${id}/`, todo).then((res) => refreshTodos())
    }

    const onDelete = (id) => {
        API.delete(`/${id}/`).then((res) => refreshTodos())
    }

    const selectTodo = (id) => {
        let todo = todoList.filter((movie) => todo.id === id)[0]
        setTitle(todo.title)
        setDescription(todo.description)
        setCompleted(todo.completed)
    }

    return (
        <> 
            <form> 
                <input 
                    value={title}
                    onChange={e=> setTitle(e.target.value)}
                    placeholder={'title'}
                    type='text'
                    name='title'
                />
                <input 
                    value={description}
                    onChange={e=> setDescription(e.taget.value)}
                    placeholder={'description'}
                    type='text'
                />
            </form>
            <button > Submit </ button>
        </>
    )


}