import React from "react";

//import components
import Todo from "./Todo.js";

// array.map() loops through an array and performs a function on each element
//think as if its like this:
// for todo in todos:
//      call the Todo List
function TodoList({ todos, setTodos }) {
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {todos.map((todo) => (
          <Todo
            key={todo.id}
            taskText={todo.text}
            todos={todos}
            // Once you have called todo like above, you can now reference it
            // This means that Todo.js is now able to each todo in todos
            todo={todo}
            setTodos={setTodos}
          />
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
