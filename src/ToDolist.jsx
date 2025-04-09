import React, { useState } from "react"

function ToDolist(){

    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTasks] = useState("");

    function handleInputChange(event){

    }

    function AddTask(){

    }

    function deleteTask(index){

    }

    function moveTaskUp(index){

    }

    function moveTaskUp(index){

    }
    
    return(
        <div className="to-do-list">

            <h1>To-Do-List</h1>
            <div>
                <input type="text" 
                placeholder="Enter a task..."
                value={newTask}
                onChange={handleInputChange} />
            </div>
        </div>
    )    
}
