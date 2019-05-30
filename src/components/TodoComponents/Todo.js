import React from 'react';


const Todo = (props) => {

    if(props.props.completed === true){
           return (<div className="todo complete" >{props.props.task}</div> )
        }else{
            return (<div className="todo" onClick={() =>props.completeTask(props)}>{props.props.task}</div> )
        }
    
}

export default Todo;
