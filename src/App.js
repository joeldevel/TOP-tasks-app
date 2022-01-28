import React from 'react';

import Overview from './components/Overview';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            task: {text: ''},
            tasks: [{text: 'finish The odin project'}],
        };
    }

    handleChange = (e) => {
        this.setState({
            task: {
                text: e.target.value,
            }
        });
    };

    onSubmitTask = (e) => {
        e.preventDefault();
        this.setState({
            tasks: this.state.tasks.concat(this.state.task),
            task: {text: ''},
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
                    <Overview tasks={tasks}/>
                }
            </div>
        );
    }
}

export default App;
