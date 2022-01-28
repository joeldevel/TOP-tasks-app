/*
 * Receives an array of tasks and returns a list of tags
*/
function Overview({tasks}) {
    return (
        <ul>
            {tasks.map(task => {
                return <li>{task.text}</li>
            })}
        </ul>
    );
}

export default Overview;
