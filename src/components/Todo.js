import React from "react";

function Todo({ taskText, todos, setTodos, todo }) {
  //Events
  const deleteHandler = () => {
    // setTodos as all the todos, and filter by elements:
    // arrow function checks if element id does not match the current todo id
    // shows the elements where they dont match ids
    setTodos(todos.filter((el) => el.id !== todo.id));
  };

  const completeHandler = () => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      })
    );
  };

  // Curly brackets allow us to write javascript
  //Backtick ( ` ) allows us to use "", think of it as an f string
  return (
    <div className="div todo">
      <li className={`todo-item ${todo.completed ? "completed" : ""}`}>
        {/* Check if todo is true or false (?). If true, use class todo-item completed, else use todo-item */}
        {taskText}
      </li>
      <button onClick={completeHandler} className="complete-btn">
        <i className="fas fa-check"></i>
      </button>
      <button onClick={deleteHandler} className="trash-btn">
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
}

export default Todo;
