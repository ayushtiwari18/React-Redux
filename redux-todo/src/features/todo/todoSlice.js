import { createSlice, nanoid } from "@reduxjs/toolkit"; //importing createSlice and nanoid from redux toolkit

const initialState = {
  //initial state of the slice
  todos: [{ id: "abc", task: "demo-task", isDone: false }],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    //reducers are functions that modify the state
    addTodo: (state, action) => {
      const newTodo = {
        id: nanoid(),
        task: action.payload,
        isDone: false,
      };
      state.todos.push(newTodo); //direct mutation by redux toolkit
    },

    deleteTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    markAsDone: (state, action) => {
      const todo = state.todos.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.isDone = !todo.isDone;
      }
    },
  },
});
export const { addTodo, deleteTodo, markAsDone } = todoSlice.actions; //exporting the actions
export default todoSlice.reducer; //exporting the reducer
