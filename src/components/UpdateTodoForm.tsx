const UpdateTodoForm = () => {
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
          className ='bg-orange-400 hover:bg-orange-600 text-white font-bold py-2 px-7 rounded
          focus:outline-none focus:shadow-outline'>
          Update
        </button>
      </form>
    </>
  );
};

export default UpdateTodoForm;
