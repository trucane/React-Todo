// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from 'react';
import Todo from './Todo';
import TodoForm from './TodoForm';
import {TodoData} from './TodoData';


class Todolist extends React.Component {

    state = {
       tododata:TodoData,
    }

    addItem = (e, task) => {
        e.preventDefault();
        let randomNum = Math.floor(Math.random() * Math.floor(5000));

        //console.log(this.state.item)

        const newItem = {
            task: task,
            id: randomNum,
            completed: false
        }
        this.setState({
            tododata: [...this.state.tododata, newItem],
            task:'',
            id:'',
            completed:''
        });
    };


    render(){



    
            return(
                (<div>
                    {this.state.tododata.map((todo) => (
                        <Todo props={todo} />
                        
                    ))}
    
                    <TodoForm grub={this.addItem} props={this.state.tododata} />
                </div>)
            )  
    }
    
}


export default Todolist;
