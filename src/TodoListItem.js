// import React, { useState } from 'react';

import React, { Component } from 'react';
import { Grid, Paper, Typography, TextField, Button, List, ListItem, ListItemText, ListItemSecondaryAction, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';


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
  
    handleEditTask = (index, newValue) => {
      const { tasks } = this.state;
      const updatedTasks = [...tasks];
      updatedTasks[index] = newValue;
      this.setState({ tasks: updatedTasks });
    };
  
    handleDeleteTask = (index) => {
      const { tasks } = this.state;
      const updatedTasks = [...tasks];
      updatedTasks.splice(index, 1);
      this.setState({ tasks: updatedTasks });
    };

    render() {
      const { tasks, inputValue } = this.state;
      return (
        <Grid container justifyContent="center" alignItems="center" style={{ height: '100vh' }}>
          <Grid item xs={10} sm={8} md={6} lg={4}>
            <Paper elevation={3} style={{ padding: 20 }}>
              <Typography variant="h5" gutterBottom>
                Todo List
              </Typography>
              <TextField
                fullWidth
                variant="outlined"
                value={inputValue}
                onChange={this.handleInputChange}
                placeholder="Enter task"
                style={{ marginBottom: 10 }}
              />
              <Button variant="contained" onClick={this.handleAddTask} style={{ marginBottom: 20 }}>
                Add Task
              </Button>
              <List>
                {tasks.map((task, index) => (
                  <ListItem key={index} button>
                    <ListItemText primary={task} />
                    <ListItemSecondaryAction>
                      <IconButton edge="end" aria-label="edit" onClick={() => this.handleEditTask(index, prompt('Enter new value', task))}>
                        <EditIcon />
                      </IconButton>
                      <IconButton edge="end" aria-label="delete" onClick={() => this.handleDeleteTask(index)}>
                        <DeleteIcon />
                      </IconButton>
                    </ListItemSecondaryAction>
                  </ListItem>
                ))}
              </List>
            </Paper>
          </Grid>
        </Grid>
      );
    }
  }
  
  export default TodoListItem;