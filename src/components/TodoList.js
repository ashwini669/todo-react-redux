import React from 'react'
import { useSelector } from 'react-redux'
import TodoItem from './TodoItem'

function TodoList() {
    let todos= useSelector(state => state)

    var tasks=[];
      if(localStorage.getItem('todo_table')===null){
          tasks=[];
      } else{
          tasks= JSON.parse(localStorage.getItem('todo_table'));
      
      }

    return (
        <div className="my-4 align-items-center">
           {tasks.map(task => {
            return <TodoItem task={task}/>
           })}
        </div>
    )
    
}

export default TodoList
