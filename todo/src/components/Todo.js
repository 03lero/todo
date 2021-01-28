import React from 'react';
import Fetti from './confetti'

const Todo = ({ text, todo, todos, setTodos }) => {
  const deleteHandler = () => {
    setTodos(todos.filter((el) => el.id !== todo.id));
  };
  const completeHandler = () => {
    setTodos(todos.map(item => {
      if (item.id === todo.id){
        item.completed = !item.completed
        return item
      };
      return item;
    }));
  };
  const confetti = () => {
    if(todo.completed) {
      return <Fetti/>;
    }
  }
  return(
    <div className="todo" style={{ borderStyle:'solid', borderColor:'#FF6F47'}}>
      {confetti()}
      <li className={`todo-item ${todo.completed ? "completed" : ""}`}>{text}</li>
      <button onClick={completeHandler} className="complete-btn">
        <i className="fas fa-check">
        </i>
      </button>
      <button onClick={deleteHandler} className="trash-btn">
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
};
export default Todo;
