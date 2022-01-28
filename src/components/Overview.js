/*
 * Receives an array of tasks and returns a list of tags
*/
function Overview({tasks, deleteTask}) {
    return (
        <ul>
            {tasks.map((task, i) => {
                return (
                    <li key={task.id}>
                        <span className="task-number">{i+1} </span>
                        <p>{task.text}</p>
                        <button type="button"
                                className="delete-task"
                                onClick={()=>deleteTask(task.id)}>X</button>
                    </li>
                )
            })}
        </ul>
    );
}

export default Overview;
