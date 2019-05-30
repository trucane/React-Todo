import React from 'react';


const Todo = (props) => {
    return (
        //ternary, if task complete and class .complete to line-through task
        <div className={ `${props.props.completed ? 'complete' : ''}`}  onClick={() =>props.completeTask(props.props.id)}>
            <p className="todo">
                    {props.props.task}
            </p>
        </div> )
}

export default Todo;
