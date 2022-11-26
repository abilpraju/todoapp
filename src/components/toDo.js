import React,{useState} from 'react'
import AddTask from './addTask'
import ListTask from './listTask'
import './Todo.css'
const ToDo = () => {
    const [task,setTask] = useState([]);

    const addTask=(title)=>{
     const newTask=[...task,{title}]
     setTask(newTask)
    }
    const removeTask=(index)=>{
        const newTask2 = [...task]
        newTask2.splice(index,1)
        setTask(newTask2)
       }
    return (
        <>
        <div className="todo-container">
            <div className="header">TODO APP</div>
            <div className="add-task"><AddTask addTask={addTask} /></div>
            <div className="task">{task.map((tasks,index)=>(<ListTask task={tasks} key={index} removeTask={removeTask} index={index}/>))}</div>
        </div>
        </>
    )
}

export default ToDo
