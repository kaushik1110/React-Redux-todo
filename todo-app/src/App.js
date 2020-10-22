import React from 'react';
import logo from './logo.svg';
import './App.css';
import AddTodo from './components/AddTodo/AddTodo';
import List from './components/List/List'
function App() {
  return (
    <div className="App">
    <h1>User  </h1>
      <AddTodo/>
      <List/> 
    </div>
  );
}

export default App;
