import React, { useState } from 'react';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { RiEdit2Fill } from 'react-icons/ri';
import { SlLike } from 'react-icons/sl';
import "./TodoApp.css";

const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');
  const [editIndex, setEditIndex] = useState(-1);

  const handleInputChange = (event) => {
    setNewTodo(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (newTodo.trim() !== '') {
      if (editIndex !== -1) {
        const updatedTodos = [...todos];
        updatedTodos[editIndex] = newTodo;
        setTodos(updatedTodos);
        setEditIndex(-1);
      } else {
        setTodos([...todos, newTodo]);
      }
      setNewTodo('');
    }
  };

  const handleTodoDelete = (index) => {
    const updatedTodos = todos.filter((_, todoIndex) => todoIndex !== index);
    setTodos(updatedTodos);
  };

  const handleTodoEdit = (index) => {
    setNewTodo(todos[index]);
    setEditIndex(index);
  };

  const handleTodoComplete = (index) => {
    const updatedTodos = [...todos];
    updatedTodos[index] = `✓ ${todos[index]}`;
    setTodos(updatedTodos);
  };

  return (
    <div className='todo'>
      <h1 className='title'>TodoApp</h1>
      <form className='form' onSubmit={handleFormSubmit}>
        <input className='input' type="text" value={newTodo} onChange={handleInputChange} />
        <button className='button' type="submit">{editIndex !== -1 ? 'Edit Todo' : 'Add Todo'}</button>
      </form>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
            <button className='china1'  onClick={() => handleTodoEdit(index)}>Edit<RiEdit2Fill /></button>
            <button className='china2'  onClick={() => handleTodoComplete(index)}>Complete<SlLike /></button>
            <button className='china3'  onClick={() => handleTodoDelete(index)}>Delete<RiDeleteBin6Line /></button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoApp;