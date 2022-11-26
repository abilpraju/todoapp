import React,{useState} from 'react'
const AddTask = ({addTask}) => {
    const [value,setValue] = useState('');
    const addItem = ()=>{
        addTask(value)
        setValue("");
    }
    return (
        <>
        <div className="input-container">
            <input className="input"  value={value} onChange={(e)=>{setValue(e.target.value)}} type="text" placeholder="Add new task"/>
            <button className="addbutton" onClick={addItem}>Add Task</button>
        </div>
        </>
    )
}

export default AddTask
