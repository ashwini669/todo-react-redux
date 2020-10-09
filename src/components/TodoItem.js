import React, { useState } from 'react'
import {useDispatch} from 'react-redux'
import { deleteTodo, updateTodo } from '../redux/actions';

function TodoItem({task}) {
    const dispatch = useDispatch();
    return (
        <div>
             <div className="row mx-2">
                        <h4 className='col-md-2 text-left'> {task.Task} </h4>        
                        <button
                        className="btn btn-primary m-2 col-xs-3"
                        onClick={()=> dispatch(updateTodo(task))}>Edit</button>
                        <button
                        className="btn btn-danger m-2 col-xs-3"
                        onClick={()=> dispatch(deleteTodo(task.Key))}>Delete</button>
             </div>
        </div>
    )
}

export default TodoItem
