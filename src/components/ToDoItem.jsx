import React, { useState } from 'react';

function ToDoItem({ todo, onDelete, onToggle, onEdit }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(todo.text);

  function handleEdit() {
    if (editedText.trim() === '') return;
    onEdit(todo.id, editedText);
    setIsEditing(false);
  };

  return (
    <li className={`todo-item ${todo.completed ? 'completed' : ''}`} id={`todo-${todo.id}`}>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => onToggle(todo.id)}
        className="checkbox"
      />
      {isEditing ? (
        <input
          type="text"
          value={editedText}
          onChange={(e) => setEditedText(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') handleEdit();
          }}
          className="edit-input"
        />
      ) : (
        <span className="todo-text">{todo.text}</span>
      )}
      {isEditing ? (
        <button onClick={handleEdit} className="save-button">Save</button>
      ) : (
        <button onClick={() => setIsEditing(true)} className="edit-button">Edit</button>
      )}
      <button onClick={() => onDelete(todo.id)} className="delete-button">Delete</button>
    </li>
  );
}

export default ToDoItem;
