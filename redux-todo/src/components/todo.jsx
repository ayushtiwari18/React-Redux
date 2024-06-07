import { useSelector } from "react-redux";
import AddForm from "./AddForm";
import { useDispatch } from "react-redux";
import { deleteTodo } from "../features/todo/todoSlice";
import { markAsDone } from "../features/todo/todoSlice";

export default function Todo() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  let handleDelete = (id) => {
    dispatch(deleteTodo(id));
  };
  let handleDone = (id) => {
    dispatch(markAsDone(id));
  };
  return (
    <div>
      <AddForm />
      <h2>Todo List App</h2>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.task}
            <button onClick={() => handleDelete(todo.id)}>Delete</button>
            <button onClick={() => handleDone(todo.id)}>Mark as Done</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
