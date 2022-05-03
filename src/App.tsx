import React, { FC, ChangeEvent, useState } from 'react';
import './App.css';
//@ts-ignore
import Todolist from "./Components/Todolist";
import {ITask} from './Interfaces'
const App: FC = () => {

  const [task, setTask] = useState<string>("");
  const [deadline, setDeadline] = useState<number>(0);
  const [todo, setTodo] = useState<ITask[]>([]);


  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    if (event.target.name === 'task') {
      setTask(event.target.value)
    } else {
      setDeadline(Number(event.target.value))
    }
  };

const addTask = ():void=>{
  const newTask={
    taskName:task,deadline:deadline
  }
setTodo([...todo ,newTask])
console.log(todo)
setDeadline(0)
setTask('')

}


const completeTask = (taskNameToDelete: string): void => {
    setTodo(
      todo.filter((task) => {
        return task.taskName !== taskNameToDelete;
      })
    );
  };



  return (
    <div className="App">
      <div className='header'>
        <div className='inputContainer'>
          <input type="text" value={task} name='task' placeholder='Task..' onChange={handleChange}></input>
          <input type="number" value={deadline} name='deadline' placeholder='deadline (in days)..' onChange={handleChange}></input>
        </div>
        <button onClick={addTask}>Add Task</button>
      </div>
      <div className="todoList">
        {todo.map((task: ITask, key: number) => {
          return <Todolist key={key} task={task} completeTask={completeTask} />;
        })}
      </div>
    </div>
  );
}

export default App;
