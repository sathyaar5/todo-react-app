import React, { useState } from 'react';

function TodoListItem() {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleAddTask = () => {
    if (inputValue.trim() !== '') {
      setTasks([...tasks, inputValue]);
      setInputValue('');
    }
  };

  return (
    <div class='center'>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Enter task"
      /> 
      <button onClick={handleAddTask}> Add Task </button>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
    </div>
  );
}

export default TodoListItem;
