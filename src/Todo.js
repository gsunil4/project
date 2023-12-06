import React, { useState} from 'react';
//const App = () => {
//    const [tasks, setTasks] = useState([]);
//    const [newTask, setNewTask] = useState("");

//    const addTask = () => {
//        if ( newTask.trim() !== "") {
//            setTasks([...tasks, newTask]);
//            setNewTask("");

//            console.log(tasks);
//        }
//    };

//    const removeTask =(index) => {
//        const updatedTask = [...tasks];
//        updatedTask.splice(index,1);
//        setTasks(updatedTask);
//    };

//    return(
//        <div>
//            <h1>Todo List App</h1>
//            <div>
//                <input type ="text"
//                value = {newTask}
//                onChange ={(e) => setNewTask(e.target.value)}
//                placeholder ="Add New Task"
//                />
//                <button onClick={addTask}>Add Task</button>
//            </div>

//            <ul>
//                {tasks.map((task,index) =>(
//                    <li key={index}>
//                        {task}
//                        <button onClick={() => removeTask(index)}>remove</button>
//                    </li>
//                ))}
//            </ul>
//        </div>
//    )

//}




const App = () => {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState ("");

    const addTask = () => {
        if (newTask.trim() !== ""){
            setTasks([...tasks, newTask]);
            setNewTask("");

        }
    };
    
    const removeTask = (index) => {
        const updatedTask = [...tasks];
        updatedTask.splice(index, 1);
        setTasks(updatedTask);
    }
    
    
    
    return (
        
        <div>
            <h1>Todo List App</h1>
        <div>
            <input 
            type='text' 
            placeholder='Enter task' 
            value ={newTask} onChange={(e) => setNewTask(e.target.value)}/>
            <button onClick ={addTask}>Add task</button>
         </div>
            
                <ul>
                    {tasks.map((task, index) => (
                        <li>
                            {task} 
                        <button onClick = {() => removeTask(index)}>Remove</button>
                        </li>
                    ))}
                </ul>
        </div>  
    )
}


export default App;