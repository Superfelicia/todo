import '../styles/TodoStyles.css'

export const Task = (props) => {
    return (
            <div className={'task-box'}>
                <h2 className={'task-name'}>{props.taskName}</h2>
                <button className={'delete-btn'} onClick={() => props.deleteTask(props.id)}> X </button>
                <button className={'complete-btn'} onClick={() => console.log(props.completeTask(props.id) !== props.id)}>Complete</button>
            </div>
        )
}