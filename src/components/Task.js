
export const Task = (props) => {
    return (
            <div className={'task'}>
                <h2>{props.taskName}</h2>
                <button onClick={() => props.deleteTask(props.id)}> X </button>
                <button onClick={() => props.completeTask(props.id)}>Complete</button>
            </div>
        )
}