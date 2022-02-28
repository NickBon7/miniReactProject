import "./AddTodo.css";
import { useState, useRef } from "react";

function AddTodo() {
  const [todoList, setTodoList] = useState([]);
  const [currentTodo, setCurrentTodo] = useState("");

  const inputTodo = useRef(null);

  const todo = () => {
    setTodoList([...todoList, { todo: currentTodo, done: false }]);
    inputTodo.current.value = "";
    setCurrentTodo("");
  };
  const deleteTodoHandler = (todoDel) => {
    setTodoList(
      todoList.filter((todo) => {
        return todo.todo !== todoDel;
      })
    );
  };

  const doneTodoHandler = (todoDone) => {
    setTodoList(
      todoList.map((todo) => {
        return todo.todo === todoDone
          ? { todo: todoDone, done: true }
          : { todo: todo.todo, done: todo.done ? true : false };
      })
    );
  };

  return (
    <div>
      <h1>Add Todo </h1>
      <div className="add">
        <input
          ref={inputTodo}
          type="text"
          onKeyDown={(event) => {
            if (event.keyCode === 13) todo();
            // 13 = enter
          }}
          placeholder="Tell me something to do..."
          onChange={(event) => {
            setCurrentTodo(event.target.value);
          }}
        />
        <button onClick={todo}>Add Todo</button>
      </div>
      <br />
      <hr />

      <div>
        <h1>Todo List</h1>
        <ul>
          {todoList.map((val, key) => {
            return (
              <div className="del">
                <li key={key}>{val.todo}</li>
                <button onClick={() => doneTodoHandler(val.todo)}>Done</button>
                <button onClick={() => deleteTodoHandler(val.todo)}>
                  Delete
                </button>
                {val.done ? <h2> Todo done!</h2> : <h2>Not done yet..</h2>}
              </div>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default AddTodo;
