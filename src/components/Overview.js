/*
 * Receives an array of tasks and returns a list of tags
*/
function Overview({tasks, deleteTask}) {
    return (
        <ul>
            {tasks.map(task => {
                return (
                    <li key={task.id}>{task.text}
                        <button type="button" onClick={()=>deleteTask(task.id)}>X</button>
                    </li>
                )
            })}
        </ul>
    );
}

export default Overview;
