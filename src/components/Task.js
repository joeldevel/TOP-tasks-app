import React from 'react';

class Task extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            newText: props.task.text,
            isReadOnly: true
        }

    }

    makeTaskEditable = () => {
        this.setState({
            newText: this.state.newText,
            isReadOnly: false
        })
    };

    handleChange = (e) => {
        this.setState({
            newText: e.target.value,
            isReadOnly: this.state.isReadOnly
        });
        console.log(e.target.value);
    };

    updatetask = (id, newText) => {
        this.props.updateTask(this.props.task.id, this.state.newText);
        this.setState({
            newText: this.state.newText,
            isReadOnly: true
        });
    };

    render() {
        return (
            <>
            <input value={this.state.newText} readOnly={this.state.isReadOnly}
                   onChange={(e)=>this.handleChange(e)}/>
            <button type="button"
                className="delete-task"
                onClick={()=>this.props.deleteTask(this.props.task.id)}>X
            </button>
            { this.state.isReadOnly ?
                <button type="button"
                    className="edit-task"
                    onClick={()=>this.makeTaskEditable()}
                    >edit
                </button>
                :
                <button type="button"
                    className="update-task"
                    onClick={()=>this.updatetask(this.props.task.id, this.state.newText)}
                    >update
                </button>
            }
            </>
       );
    }
}

export default Task;
