import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TaskItem from './Components/Taskitem'

function App() {
  const [count, setCount] = useState(0)
  const [newTask, setNewTask] = useState("");
  const [myTasks, SetMyTasks] = useState(["Writing Notes", "Reading Books", "Attending an event", "Recording video", "Editing", "Releasing"]);
  const [completedTasks, SetCompletedTasks] = useState([]);

  function handleInput(e) {
    let newValue = e.target.value;
    setNewTask(newValue);
  }

  function addTask() {
    if (newTask.trim() === "") return; // Prevent adding empty tasks
    SetMyTasks(prev => [...prev, newTask]);
    setNewTask(""); // Clear the input field after adding the task
  }

  function deleteTask(taskName, isCompleted = false) {
    console.log("Task to delete:", taskName, "Completed:", isCompleted);
    if (isCompleted) {
      let completedTask = completedTasks.filter(task => task != taskName);
      SetCompletedTasks(completedTask);
    } else {
      let afterDeletion = myTasks.filter(task => task != taskName);
      SetMyTasks(afterDeletion);
    }

  }

  function completedTask(taskName) {
    let completedTask = myTasks.filter(task => task == taskName);
    let afterFiltering = myTasks.filter(task => task != taskName);
    SetMyTasks(afterFiltering);
    SetCompletedTasks(prev => [...prev, completedTask[0]]);
  }

  return (
    <div className='main-body d-flex justify-content-center align-items-center '>
      <div className='todo-list-mainDiv rounded shadow-sm'>
        <h3>My To do List</h3>
        <div>
          <div className='todo-task-input-div'>
            <div className='form-floating w-50'>
              <input
                type="text"
                className="form-control"
                id="floatingInput"
                placeholder="Todo task"
                onChange={handleInput}
                value={newTask || ""}
              />
              <label htmlFor="floatingInput">Todo Task</label>
            </div>
            <button className='btn btn-primary' id='add-button' onClick={() => { addTask() }}>+</button>
          </div>
          <hr />

          <h6>To be completed tasks</h6>
          <ul className='tasks-list'>
            {
              myTasks.map((task, index) =>
                <TaskItem taskName={task} key={index} deleteTask={deleteTask} completedTask={completedTask} />
              )
            }
          </ul>
          <h6>completed Tasks</h6>
          <ul className='tasks-list'>
            {
              completedTasks.map((task, index) =>
                <TaskItem taskName={task} key={index} deleteTask={deleteTask} completedTask={completedTask} isCompleted={true} />
              )
            }
          </ul>
        </div>
      </div>
    </div>
  )

}

export default App
