import AddTodoForm from "./AddTodoForm";
import UpdateTodoForm from "./UpdateTodoForm";
import SingleTodo from "./SingleTodo";
import { useSelector,useDispatch } from "react-redux"; // communicate with redux and the state object which contain everythig in the state
import { clearTodo } from "../store/features/todo/todoSlice";
const Card = () => {
  const myTodos = useSelector((state: any) => state.todos.todos);
  const dispatch = useDispatch()
  return (
    <div
      className=" w-1/2 h-3/4 min-h-max bg-slate-50 
    shadow-2xl rounded-lg p-2 items-center flex flex-col 
    space-y-10 justify-between"
    >
      <div className="flex flex-col space-y-10 w-full h-3 4 min-h-max items-center">
        <h1 className="text-3xl font-semibold ">My Todo list</h1>
        <div className="w-3/4 ">
          <AddTodoForm />
          {/* <UpdateTodoForm /> */}
        </div>
        <div className="w-3/4">
          <ul className="w-full max-h-72 overflow-y-scroll">
            {myTodos.map((todo: any) => 
              <li className="mb-3" key={todo.id}>
                <SingleTodo name={todo.name} />
              </li>
            )} 
          </ul>
        </div>
      </div> 
      <button  onClick={()=>dispatch(clearTodo())} 
        className="bg-red-500 hover:bg-red-700
    text-white font-bold py-2 px-10 rounded
    focus:outline-none focus:shadow-outline"
      >
        Clear
      </button>
    </div>
  );
};

export default Card;
