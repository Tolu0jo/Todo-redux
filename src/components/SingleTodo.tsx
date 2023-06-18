import { useState } from "react"
import {BsCheckSquare,BsTrashFill} from "react-icons/bs"
import{FaEdit} from "react-icons/fa"

interface Props{
    name: string
}
const SingleTodo  = ({name}:Props) => {
    const [done, setDone] = useState()
  return (
    <div className='flex justify-between bg-blue-200 py-2
    rounded shadow'> 
    <div className='px-4'>
    <h1>{name}</h1>
    </div>
    <div className='px-4 flex space-x-4'>
     <BsCheckSquare className = "cursor-pointer text-green-700" size={20}/>
     <FaEdit className ="cursor-pointer text-yellow-700" size={20} />   
     <BsTrashFill className ="cursor-pointer text-red-700" size={20} />   
    </div>
    </div>
  )
}

export default  SingleTodo