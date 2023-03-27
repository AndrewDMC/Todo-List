import React, {ChangeEvent, FC, useState} from 'react' ;
import './App.css';
import TodoTask from './Components/TodoTask';
import {ITask} from './interface';

const App: FC = () => {

  const [task, setTask] = useState<string>('');
  const [deadline, setDeadline] = useState<number>(0);
  const [description, setDescription] = useState<string>('');
  const [todo, setTodoList] = useState<ITask[]>([]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    if (event.target.name === "task"){
      setTask(event.target.value);
    } 
    else if (event.target.name === "deadline"){
      setDeadline (Number(event.target.value));
    }
    else if (event.target.name === "description"){
      setDescription(event.target.value);
    }
  };

  const addTask = (): void => {

    const newTask = {taskName: task, deadline: deadline, description: description};

    setTodoList([...todo, newTask])
    console.log(todo);
    setTask("");
    setDeadline(0);
    setDescription("");
  }


  return (
    <div className="App">
      <div className='header'>
        <div className='todo-list'>
          <h1>Todo List</h1>
        </div>
        <div className='inputContainer'>
          <input className="inputObject" name="task" type="text" value={task} placeholder='Task...' onChange={handleChange} required/>
          <input className="inputObject" name="deadline" type="number" value={deadline} placeholder='Deadline...' onChange={handleChange}/>
          <input className="inputObject" name="description " type="text" value={description} placeholder='Description...' onChange={handleChange}/>
          <button className="inputObject" onClick={addTask}>Add Task</button>
          </div>
      </div>
      <div className="TodoList">
        {todo.map((task: ITask, key:number)=>{
          return <TodoTask key={key}/>;
        })}
      </div>
      
    </div>
  );
}

export default App;
