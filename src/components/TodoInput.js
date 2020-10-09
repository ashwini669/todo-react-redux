import React, {useState} from 'react'
import { addTodo, updateTodo } from '../redux/actions'
import { v1 as uuid} from 'uuid';
import { useDispatch } from 'react-redux'
import { keyVal} from '../redux/reducer'

function TodoInput() {
    const [name, setName] = useState(" ")
    const dispatch = useDispatch()
    return (
        <div className="align-items-center">
            <div className="row m-2">
                <input type="text"
                 value={name} 
                 id="demo"
                 onChange={(e)=> setName(e.target.value)}/>
                <button 
                className="btn btn-primary mx-2"
                onClick={() => { 
                 dispatch(addTodo( 
                    {
                    id : uuid(),
                    name:name
                    }) )
                 setName('');  
                }}>ADD TASK</button>
                 <button 
                className="btn btn-primary mx-2"
                onClick={() => { 
                 dispatch(addTodo( 
                    {
                    id :keyVal,
                    name:name
                    }) )
                 setName('');  
                }}>UPDATE</button>
            </div>
        </div>
    )
}

export default TodoInput
