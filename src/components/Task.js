import '../styles/TodoStyles.css'

export const Task = (props) => {
    return (
            <div className={'task-box'}>
                <h2>{`${props.taskName}`}</h2>
                <button className={'delete-btn'} onClick={() => props.deleteTask(props.id)}> X </button>
                <button className={'complete-btn'} onClick={() => props.completeTask(props.id)} hidden={props.completed}>Complete</button>
                <button className={'edit-btn'} onClick={() => props.editingTask(props.id)} hidden={props.completed} >Edit</button>
            </div>
        )
}