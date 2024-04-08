// import React, { useState } from 'react';

import React, { Component } from 'react';

// function TodoListItem() {
//   const [tasks, setTasks] = useState([]);
//   const [inputValue, setInputValue] = useState('');

//   const handleInputChange = (e) => {
//     setInputValue(e.target.value);
//   };

//   const handleAddTask = () => {
//     if (inputValue.trim() !== '') {
//       setTasks([...tasks, inputValue]);
//       setInputValue('');
//     }
//   };

//   return (
//     <div class='center'>
//       <input
//         type="text"
//         value={inputValue}
//         onChange={handleInputChange}
//         placeholder="Enter task"
//       /> 
//       <button onClick={handleAddTask}> Add Task </button>
//       <ul>
//         {tasks.map((task, index) => (
//           <li key={index}>{task}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }
class TodoListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
      inputValue: ''
    };
  }

  handleInputChange = (e) => {
    this.setState({ inputValue: e.target.value });
  };

  handleAddTask = () => {
    const { tasks, inputValue } = this.state;
    if (inputValue.trim() !== '') {
      this.setState({
        tasks: [...tasks, inputValue],
        inputValue: ''
      });
    }
  };

  render() {
    const { tasks, inputValue } = this.state;
    return (
      <div className='center'>
        <input
          type="text"
          value={inputValue}
          onChange={this.handleInputChange}
          placeholder="Enter task"
        /> 
        <button onClick={this.handleAddTask}> Add Task </button>
        <ul class='center'>
          {tasks.map((task, index) => (
            <li key={index}>{task}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default TodoListItem;