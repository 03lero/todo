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
      <span style={{ width:'130px', marginLeft:'auto', display:'flex' }}>
        <p style={{ fontSize:'25px', fontFamily:"Roboto Slab", color: '#812991', textAlign:'center' }}>{displaytodaysdate}</p>
      </span>
    );
  }

  return (
    <div className="App">
      <div id="header">
        <header style={{ display:'flex', alignItems:'center', backgroundColor: 'white', borderBottom: "4px solid #812991" }}>
          <span style={{ textAlign:'center', width:'130px', marginRight:'auto', display:'flex', alignItems:'center', justifyContent:'center' }} >
            <img src="https://www.fusionacademy.com/wp-content/uploads/2018/12/Fusion-logo.png" alt="header logo" width="123" height="43"/>
          </span>
          <span>
            <h1 style={{ textAlign:'center', fontFamily:"Roboto Slab", color: '#812991' }}>Fusion Planner</h1>
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
