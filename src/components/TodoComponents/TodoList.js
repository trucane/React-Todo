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
    
            //create new todo item
            const newTodo = {
                task: task,
                id: Date.now(),
                completed: false
            }
    
            //create new array of state, pass in the new state array and add new todo item
    
            this.setState( prevState =>{
                return{
                    tododata:[...prevState.tododata, newTodo],
                }
            });
    
            //localStorage.setItem(this.state.tododata, JSON.stringify(todoList))
            //localStorage.setItem("newTodo", "");
        }
    };


    completeTask = (id) =>{
       console.log(id)
        this.setState( prevState =>{
            return{
                tododata: prevState.tododata.map(task =>{
                    console.log(task)
                    if(task.id === id){
                        console.log(!task.completed)
                        return {
                            ...task,
                            completed:!task.completed
                        };
                    }else{
                        return task
                    }
                })
            }
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
            <div className="container">

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
            </div>
        )  
    }
    
}


export default Todolist;
