import React, { useState } from 'react';

const TaskForm = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
  
    // Form submission handler
    const handleSubmit = (e) => {
      e.preventDefault();
  
      // Create a new task object
      const newTask = {
        id: Math.random().toString(36).substr(2, 9), // Generate a random id
        title,
        description,
        done: false,
      };
  
      // Add the new task to the task list (handle this in your main component)
      // Example: pass the new task object to a function prop called onTaskCreate
      onTaskCreate(newTask);
  
      // Reset the form inputs
      setTitle('');
      setDescription('');
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <h2>Create a New Task</h2>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        ></textarea>
        <button type="submit">Add Task</button>
      </form>
    );
  };
  
  export default TaskForm;
  