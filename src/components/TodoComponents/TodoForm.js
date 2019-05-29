import React from 'react';
import {TodoData} from './TodoData';





export class TodoForm extends React.Component{

    constructor() {
        super();
        this.state = {
          task: '',
          
        };
      } 




    handleInput = (event) =>{
        this.setState({
            [event.target.name]:event.target.value
        });
    };


    render(){

        return(

        <form onSubmit={(e) => this.props.grub(e, this.state.task)}>


            <input 
            placeholder="add task" 
            name="task" 
            value={this.state.task}
            onChange={this.handleInput}/>

            <button>Add Todo</button>
            
        </form>
        )
    }
}


export default TodoForm;


