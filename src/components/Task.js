import '../styles/TodoStyles.css'
import {useState} from "react";

export const Task = (props) => {
    const [hidden, setHidden] = useState(true);

    return (
            <div className={'task-box'}>
                <h2 className={'task-name'}>{`${props.taskName}`}</h2>
                <button className={'open-edit-btn'} onClick={() => setHidden(set => !set)} hidden={!hidden}>Edit</button>
                {!hidden ? <div className={'edit-btn-box'}>
                    <button
                        className={'delete-btn'}
                        onClick={() => props.deleteTask(props.id)}> X
                    </button>
                    <button
                        className={'complete-btn'}
                        onClick={() => props.completeTask(props.id)}
                        hidden={props.completed}>C
                    </button>
                    <button
                        className={'edit-btn'}
                        onClick={() => props.editingTask(props.id)}
                        hidden={props.completed}>E
                    </button>
                </div>
                    : null }
            </div>
        )
}