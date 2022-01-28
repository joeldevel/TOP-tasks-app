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

    render() {
        return(
            <div className="app">
                <h1>Taskinator</h1>
                <form>
                    <input type="text" name="task"/>
                    <button type="submit">Add task</button>
                </form>
                {this.state.tasks.length === 0 ?
                    <h2> There are no tasks</h2> :
                    this.state.tasks.map(task => <Overview task={task}/>)
                }
            </div>
        );
    }
}

export default App;
