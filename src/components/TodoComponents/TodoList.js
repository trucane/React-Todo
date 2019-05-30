// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from 'react';
import Todo from './Todo';
import TodoForm from './TodoForm';
import {TodoData} from './TodoData';
import './Todo.css';


class Todolist extends React.Component {

//using class object / component....declare state
    state = {
       tododata:TodoData,
    }

    addItem = (e, task) => {
        //prevent default button refresh on click
        e.preventDefault();

        //check if string is empty;
        if(task.trim() === ""){

        }else{

    
            let randomNum = new Date().getTime();
    
            //console.log(this.state.item)
    
            //create new todo item
            const newTodo = {
                task: task,
                id: randomNum,
                completed: false
            }
    
            //create new array of state, pass in the static state array and add new todo item
            const todoList = [...this.state.tododata];
    
            todoList.push(newTodo);
    
            this.setState({
                tododata:todoList,
                task:'',
                id:'',
                completed:''
            });
    
            localStorage.setItem(this.state.tododata, JSON.stringify(todoList))
            //localStorage.setItem("newTodo", "");
        }
    };


    completeTask = (todo) =>{
        //toggle false or true
        todo.props.completed === true ? todo.props.completed = false : todo.props.completed = true;
        console.log(todo.props.completed)

        //reset state and update list
        this.setState({
            tododata: this.state.tododata
        });
    }

    removeTodo = () =>{
        //filter for task and keep that are not completed
        const removed = this.state.tododata.filter(item => item.completed === false);

        //update state with filtered list
        this.setState({
            tododata: removed
        });
    }



    render(){
        return(
            (<div className="container">

                <div className="todo-container">
                    <h2 className="todo-header">Todo List</h2>
                    {this.state.tododata.map((todo) => (
                        <Todo props={todo} key={todo.id}  completeTask={this.completeTask}/>
                    ))}



                    {/* send add Task function to form Component
                    send state list to form component */}
                    <TodoForm addTsk={this.addItem} props={this.state.tododata} />

                    {/* call onclick remove function to remove all completed task */}
                    <button onClick={this.removeTodo}>Complete</button>
                </div>
            </div>)
        )  
    }
    
}


export default Todolist;
