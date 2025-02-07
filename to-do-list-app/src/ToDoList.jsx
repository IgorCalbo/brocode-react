import React, { useState } from 'react'

function ToDoList() {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState("");

    function handleInputChange(event) {
        setNewTask(event.target.value);
    }

    function addTask() {
        if (newTask.trim() !== "") {
            setTasks(t => [...t, newTask]);
            setNewTask('')
        }
    }

    function deleteTask(index) {
        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks);
    }

    function moveTaskUp(index) {
        if(index > 0) {
            const uptadedTasks = [...tasks];
            [uptadedTasks[index], uptadedTasks[index - 1]] = [uptadedTasks[index - 1], uptadedTasks[index]];
            setTasks(uptadedTasks);
        }
    }

    function moveTaskDown(index) {
        if(index < tasks.length - 1) {
            const uptadedTasks = [...tasks];
            [uptadedTasks[index], uptadedTasks[index + 1]] = [uptadedTasks[index + 1], uptadedTasks[index]];
            setTasks(uptadedTasks);
        }
    }

    return (<div className='to-do-list'>
        <h1>To-Do-List</h1>
        <div>
            <input type='text' placeholder='Enter a text' value={newTask} onChange={handleInputChange} />
            <button className='add-button' onClick={addTask}>Add</button>
        </div>
        <ol>
            {tasks.map((task, index) =>
                <li key={index}>
                    <span className='text'>{task}</span>
                    <button className='delete-button' onClick={() => deleteTask(index)}>Delete</button>
                    <button className='move-button' onClick={() => moveTaskUp(index)}>☝️</button>
                    <button className='move-button' onClick={() => moveTaskDown(index)}>👇</button>
                </li>)}
        </ol>
    </div>);
}

export default ToDoList