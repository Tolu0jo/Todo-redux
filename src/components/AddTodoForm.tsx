const AddTodoForm = () => {
  return (
  <>
     <form className="flex space-x-3">
        <input
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