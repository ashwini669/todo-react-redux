import React from 'react';
import './App.css';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import 'bootstrap/dist/css/bootstrap.css'

function App() {

  return (
    <div className="App m-4">
      <h2 className="text-justify">TODO LIST</h2>
      <TodoInput />
      <TodoList />
    </div>
  );
}

export default App;
