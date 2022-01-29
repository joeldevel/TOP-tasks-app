import React from 'react';

import Overview from './components/Overview';

import uniqid from 'uniqid';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            task: {
                id: uniqid(),
                text: ''
            },
            tasks: []
        };
    }

    handleChange = (e) => {
        this.setState({
            task: {
                id: this.state.task.id,
                text: e.target.value
            }
        });
    };

    onSubmitTask = (e) => {
        e.preventDefault();
        if(!e.target['task'].value) {
            return;
        }
        this.setState({
            tasks: this.state.tasks.concat(this.state.task),
            task: {
                id: uniqid(),
                text: ''
            }
        });
    };

    deleteTask = (id) => {
        // console.log('task id ', id);
        let newTasks = this.state.tasks.filter(task => task.id !== id);
        this.setState({
            tasks: newTasks
        });
    };

    updateTask = (id, newText) => {
        // console.log('id,', id, 'newText: ', newText);
        let newTasks = this.state.tasks.map(task =>{
            if(task.id === id) {
                return { id: task.id, text: newText}
            } else {
                return task
            }
        });
    };

    render() {
        const {task, tasks} = this.state;
        return(
            <div className="app">
                <h1>Taskinator</h1>
                <form onSubmit={this.onSubmitTask}>
                    <input type="text"
                           name="task"
                           onChange={this.handleChange}
                           value={task.text}
                           id="taskInput"
                           />
                    <button type="submit">Add task</button>
                </form>
                {this.state.tasks.length === 0 ?
                    <h2> There are no tasks</h2> :
                    <Overview tasks={tasks}
                              deleteTask={this.deleteTask}
                              updateTask={this.updateTask}/>
                }
            </div>
        );
    }
}

export default App;
