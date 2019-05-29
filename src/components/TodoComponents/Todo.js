import React from 'react';


const Todo = (props) => {

    return(
        <div key={props.props.id}>
            {props.props.task}
        </div>
    )
    
}

export default Todo;
