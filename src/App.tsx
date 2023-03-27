import React, {FC} from 'react' ;
import './App.css';

const App: FC = () => {
  return (
    <div className="App">
      <div className='header'>
        <div className='inputContainer'></div>
          <input type="text" placeholder='Task...' />
          <input type="number" placeholder='Deadline...' />
          <input type="text" placeholder='Description...' />
          <button>Add Task</button>
      </div>
      <div className='todo-list'>
        <h1>Todo List</h1>
        </div>
    </div>
  );
}

export default App;
