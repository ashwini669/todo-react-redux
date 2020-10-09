import { ADD_TODO, DELETE_TODO, UPDATE_TODO} from './actions';
import {todos} from './states'

export let keyVal;
let x=0;
export let reducer=(state=todos,action) => {
    let newTodos;
    
    switch(action.type)
    {  
        case ADD_TODO:  // newTodos=[...state];
                        // newTodos.push(action.payload)

                        let tasks=localStorage.getItem("todo_table");
                        if(tasks==null)
                        {
                          var todo=[];
                         }
                        else{
                             todo=JSON.parse(tasks);
                            }
                          
                            var data=todo.map(item =>{
                                if(item.Key!==action.payload.id)
                                {   
                                    x++;
                                    if(x===(todo.length))
                                    {
                                    todo.push({'Task':action.payload.name,'Key':action.payload.id});
                                    localStorage.setItem("todo_table",JSON.stringify(todo));
                                     x=0;
                                    }
                                }
                                if(item.Key===action.payload.id)
                                {  
                                    item.Task=action.payload.name;
                                    //todo.push({'Task':action.payload.name,'Key':action.payload.id});
                                    localStorage.setItem("todo_table",JSON.stringify(todo));
                                    
                                }
                               
                            });
                        return todo;
                        break;

        case DELETE_TODO:
                        // newTodos=[...state];
                        // newTodos=newTodos.filter(todo=> todo.id !== action.payload);

                        var todo=[];
                        if(localStorage.getItem('todo_table')===null){
                            todo=[];
                        } else{
                            todo= JSON.parse(localStorage.getItem('todo_table'));
                        }
                        todo= todo.filter(function(todo,index) {
                            return todo.Key!==action.payload
                          });
                        localStorage.setItem('todo_table',JSON.stringify(todo));

                        return todo;
                        break; 

        case UPDATE_TODO:
                        var data=[];
                        if(localStorage.getItem('todo_table')===null){
                            data=[];
                        } else{
                            data= JSON.parse(localStorage.getItem('todo_table'));
                        }
                        var updatedVal=data.map(item =>{
                            if(item.Key === action.payload.Key)
                            {
                              document.getElementById('demo').value=action.payload.Task;
                              keyVal=item.Key;
                            }
                          })

                        return data;
                        break;  
                
        default:
                 return state;
    }
   
}

// export default keyVal;