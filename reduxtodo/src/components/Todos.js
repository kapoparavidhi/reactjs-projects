import { React } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo, updateTodo } from "../features/todo/todoSlice";

function Todos({ todo }) {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  return (
    <>
      <div>Todos</div>
      <ul className="list-none">
        {todos.map((todo) => (
          <li
            className="mt-5 flex justify-between items-center bg-zinc-800 px- py-3 rounded"
            key={todo.id}
          >
            <div className="text-white">{todo.text}</div>
            <button
              className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
              onClick={() => dispatch(updateTodo(todo.id, todo.text))}
            >
              📁
            </button>

            <button
              className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
              onClick={() => dispatch(removeTodo(todo.id))}
            >
              ❌
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Todos;
