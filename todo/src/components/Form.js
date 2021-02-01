import React from "react";

const Form = ({ inputText, todos, setTodos, setInputText, setStatus }) => {
  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  };
  const submitTodoHandler = (e) => {
    e.preventDefault();
    setTodos([
      ...todos, {text: inputText, completed: false, id: Math.random() * 1000 },
    ]);
    setInputText("");
  };
  const statusHandler = (e) => {
    setStatus(e.target.value);
  }

  return (
    <form style={{ paddingTop:'20px'}}>
      <div className="userinput">
        <input onChange={inputTextHandler} value={inputText} type="text" className="todo-input" />
        <button className="todo-button" onClick={submitTodoHandler} type="submit" >
            <i className="fas fa-plus-square"></i>
        </button>
      </div>
      <div className="select" >
        <select onChange={statusHandler} name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
  );
}

export default Form;
