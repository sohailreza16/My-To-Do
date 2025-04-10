import React, { useState } from 'react';
import Header from './components/Header';
import ToDoList from './components/TodoList';
import './utils/style.css';
function App() {
  const [todos, setTodos] = useState([]);
  const [newTask, setNewTask] = useState('');

  function addTodo() {
    if (newTask.trim() === '') return;
    const newTodo = {
      id: Date.now(),
      text: newTask.trim(),
      completed: false,
    };
    setTodos([...todos, newTodo]);
    setNewTask('');
  };

  function deleteTodo(id) {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  function toggleComplete(id) {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  function editTodo(id, newText) {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, text: newText } : todo
    ));
  };

  return (
    <div className="app-container">
      <Header />
      <div className="input-section">
        <input
          type="text"
          placeholder="What do you need to do?"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') addTodo();
          }}
          className="todo-input"
        />
        <button onClick={addTodo} className="add-button" >Add</button>
      </div>
      <ToDoList
        todos={todos}
        onDelete={deleteTodo}
        onToggle={toggleComplete}
        onEdit={editTodo}
      />
    </div>
  );
}

export default App;