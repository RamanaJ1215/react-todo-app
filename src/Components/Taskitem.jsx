import React from "react";

function TaskItem({ taskName, deleteTask, completedTask, isCompleted }) {
    return (
        <>
            <li className='task d-flex justify-content-between '>
                {taskName || "Default Task"}
                {!isCompleted ? (
                    <div className='task-buttons w-50 mr-5 d-flex justify-content-end'>
                        <button className='btn btn-success' onClick={() => {
                            completedTask(taskName)
                        }}>Complete</button>
                        <button className='btn btn-danger' onClick={() => {
                            deleteTask(taskName, false)
                        }}>Delete</button>
                    </div>
                ) : (<button className='btn btn-danger' onClick={() => {
                    deleteTask(taskName, true)
                }}>Delete</button>)}
            </li>
        </>
    );
}

export default TaskItem;