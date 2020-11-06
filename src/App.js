import React,{useState, useEffect} from 'react';
import './App.css';
import Form  from './Component/form';
import TodoList from './Component/todoList';
import Todo from './Component/todo';


export default function App()
{
  const [inputText,setInputText] = useState("");
  const [todos,setTodos] = useState([]);
  const [status,setStatus] = useState("all");
  const[filteredTodos,setFilteredTodos] =useState([]);
  //Run once as the app start
  //  useEffect(()=>{
  //  getLocalTodos();
  //},[]);
  //USE EFFECT

  useEffect(()=>{
  filterHandler();
  //saveLocalTodos();
  },[todos]);

const filterHandler = () =>{
    switch(status){
      case 'completed':
        setFilteredTodos(todos.filter((todo) => todo.completed===true));
        break;
      case 'uncompleted':
        setFilteredTodos(todos.filter((todo) => todo.completed===false));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  };
  //save to local
  //const saveLocalTodos = () =>{
    //  localStorage.setItem('todos',JSON.stringify(todos));

 // };
  //const getLocalTodos =() => {
    //if(localStorage.getItem('todos') === null){
      //localStorage.setItem('todos', JSON.stringify([]));
    //}
    //else{
      //let todoLocal =JSON.parse(localStorage.setItem("todos" ));
      //setTodos(todoLocal);
    //}
  //};

  return (
    <div className="App">
      <header>
      <h1>Todo List</h1>
    </header>
    <Form  inputText={inputText}
           todos ={todos}
           setTodos={setTodos}
           setInputText={setInputText}
           setStatus ={setStatus}
           />
    <TodoList
    setTodos ={setTodos}
     todos={todos}
     filteredTodos={filteredTodos}/>
    </div>
  )
  };
