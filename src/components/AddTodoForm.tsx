import { addTodo } from "../store/features/todo/todoSlice"
import { nanoid } from "@reduxjs/toolkit"
import { useDispatch } from "react-redux"
import { useState } from "react"

const AddTodoForm = () => {
const [input, setInput] = useState("")
const dispatch = useDispatch();
const handleChange = (e: { target: { value: string } }) => {
setInput(e.target.value)
}
const handleSubmit=(e: any)=>{
e.preventDefault();
if(/^\s*$/.test(input)){
    alert("Enter a todo")
    setInput("")
}else{
    dispatch(addTodo({
        id:nanoid(),
        name: input
    }))
    setInput("")
}
}
  return (
  <>
     <form onSubmit={handleSubmit} className="flex space-x-3">
        <input
        value={input}
        onChange={handleChange}
         type="text"
         className="shadow appearance-none border rounded w-full
         px-3 py-2 text-gray-700 leading-tight focus:shadow-outline bg-zinc-200"
         placeholder="Add todo"
        />
        <button
          type='submit'
          className ='bg-blue-400 hover:bg-blue-600 text-white font-bold py-2 px-7 rounded
          focus:outline-none focus:shadow-outline'>
          Add
        </button>
      </form>
  </>
  )
}

export default AddTodoForm