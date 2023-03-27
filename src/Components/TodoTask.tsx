import React from 'react';
import {ITask} from '../interface';

interface Props{

    task: ITask;

}

function TodoTask = ({task}:Props) => {
    return (
        <div className="todoTask">task</div>

    )
}
export default TodoTask;