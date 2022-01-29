import Task from './Task';

/*
 * Receives an array of tasks and returns a list of tags
*/
function Overview({tasks, deleteTask, updateTask}) {
    return (
        <ul>
            {tasks.map((task, i) => {
                return (
                    <li key={task.id}>
                        <span className="task-number">{i+1} </span>
                        {/*<p>{task.text}</p>*/}
                        <Task task={task} deleteTask={deleteTask} updateTask={updateTask}/>
                    </li>
                )
            })}
        </ul>
    );
}

export default Overview;
