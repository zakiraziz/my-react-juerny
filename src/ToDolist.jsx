import React, { useState } from "react"

function ToDolist(){

    const [tasks, setTasks] = useState(["Eat Breakfast", "Take a shower", "walkthe dog"]);
    const [newTask, setNewTask] = useState("");

    function handleInputChange(event){
        setNewTask(event.target.value)
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
                <button
                    className="add-button"
                    onClick={AddTask}>
                    Add
                    </button>
            </div>

            <ol>
                {tasks.map((tasks, index) =>
                <li key={index}>
                    <span className="text">{tasks}</span>
                    <button
                    className="delete-butto"
                    onClick={() => deleteTask(index)}>
                        Delete
                    </button>
                    <button 
                    className="move-button"
                    onClick={() => moveTaskUp(index)}>
                        :point_up:
                    </button>
                    <button 
                    className="move-button"
                    onClick={() => moveTaskUp(index)}>
                        down
                    </button>
                </li>
            )}
            </ol>
        </div>
    )    
}
