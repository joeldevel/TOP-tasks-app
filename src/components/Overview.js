/*
 * Receives an array of tasks and returns a list of tags
*/
function Overview({tasks}) {
    return (
        <ul>
            {tasks.map(task => {
                return <li key={task.id}>{task.text}</li>
            })}
        </ul>
    );
}

export default Overview;
