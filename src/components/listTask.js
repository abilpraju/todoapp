import React from 'react'

const ListTask = ({task,removeTask,index}) => {
    
    return (
        <>
            <div className="list-task" >
                {task.title}
                <button className="del-btn" onClick={()=>{removeTask(index)}}>Delete</button>
            </div>
        </>
    )
}

export default ListTask
