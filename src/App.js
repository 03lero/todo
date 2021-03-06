import React, { useState, useEffect} from 'react';
import './App.css';
import Form from './components/Form';
import ToDoList from './components/TodoList';
import sizeMe from 'react-sizeme'


function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);

  useEffect(() => {
    filterHandler();
    saveLocalTodos();
  }, [todos, status]);

  useEffect(() => {
    getLocalTodos();
  }, []);

  const filterHandler = () => {
    switch(status) {
      case "completed":
        setFilteredTodos(todos.filter((todo) => todo.completed === true));
        break;
      case "incomplete":
        setFilteredTodos(todos.filter((todo) => todo.completed === false));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  }

  const saveLocalTodos = () => {
      localStorage.setItem("todos", JSON.stringify(todos));
  }

  const getLocalTodos = () => {
    if (localStorage.getItem("todos") === null) {
      localStorage.setItem("todos", JSON.stringify({}));
    } else {
        let todoLocal= JSON.parse(localStorage.getItem("todos"));
        setTodos(todoLocal);
    }
  };

  const Datetime = () => {
    const showdate = new Date();
    const displaytodaysdate=showdate.getDate()+'/'+showdate.getMonth()+1+'/'+showdate.getFullYear();
    return(
      <span className="datespan">
        <p>{displaytodaysdate}</p>
      </span>
    );
  }

  return (
    <div className="App">
      <div id="header">
        <header className="heading">
          <span className="imgspan">
            <img className="fusionimg" src="https://www.fusionacademy.com/wp-content/uploads/2018/12/Fusion-logo.png" alt="header logo" width="123" height="43"/>
          </span>
          <span className="titlename">
            <h1>Fusion Planner</h1>
          </span>
          <Datetime />
      </header>
      </div>
      <Form
        inputText={inputText}
        todos={todos}
        setTodos={setTodos}
        setInputText={setInputText}
        setStatus={setStatus} />
      <ToDoList
        filteredTodos={filteredTodos}
        todos={todos}
        setTodos={setTodos}/>
    </div>
  );
}

export default App;
