import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";

export default function AddForm() {
  const [task, setTask] = useState("");
  const dispatch = useDispatch();
  const handleChange = (e) => {
    setTask(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(task);
    dispatch(addTodo(task));
    setTask("");
  };

  return (
    <div>
      <h2>Add a Todo</h2>
      <form>
        <input type="text" placeholder="Add a todo" onChange={handleChange} />
        <button type="submit" onClick={handleSubmit}>
          Add Task
        </button>
      </form>
    </div>
  );
}
