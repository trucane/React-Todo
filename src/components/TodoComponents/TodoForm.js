import React from 'react';



export class TodoForm extends React.Component{

    constructor() {
        super();
        this.state = {
          task: '',
          
        };
      } 




    handleInput = (event) =>{
        this.setState({ [event.target.name]:event.target.value });
        localStorage.setItem(event.target.name , event.target.value )
    };


    render(){

        return(

            <div>
                <form onSubmit={(e) => this.props.addTsk(e, this.state.task)}>

                    <input 
                    placeholder="add task" 
                    name="task" 
                    value={this.state.task}
                    onChange={this.handleInput}/>

                    <button id="add">Add Todo</button>
                    
                </form>
            </div>

        )
    }
}


export default TodoForm;


