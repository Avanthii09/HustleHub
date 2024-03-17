import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import CreateTask from '../modals/CreateTask';
import Card from './Card';

const TodoList = () => {
    const navigate = useNavigate(); // Initialize useNavigate hook
    const [modal, setModal] = useState(false);
    const [taskList, setTaskList] = useState([])

    useEffect(() => {
        let arr = localStorage.getItem("taskList")
        
        if(arr){
            let obj = JSON.parse(arr) 
            setTaskList(obj)
        }
    },[])

    const deleteTask = (index) => {
        let tempList = taskList
        tempList.splice(index, 1)
        localStorage.setItem("taskList", JSON.stringify(tempList))
        setTaskList(tempList)
    }

    const updateListArray = (obj, index) => {
        let tempList = taskList
        tempList[index] = obj
        localStorage.setItem("taskList", JSON.stringify(tempList))
        setTaskList(tempList)
    }

    const toggle = () => {
        setModal(!modal);
    }

    const saveTask = (taskObj) => {
        let tempList = taskList
        tempList.push(taskObj)
        localStorage.setItem("taskList", JSON.stringify(tempList))
        setTaskList(tempList)
        setModal(false)
    }

    return (
        <div className='container-body-todo'>
            <div className="header text-center">
                <h3 className='mt-3' style={{color: 'white', fontSize: '2rem'}}> TODO LIST </h3>
                <button className='btn btn-primary mt-2' onClick={() => setModal(true)}> Create Task</button>
                {/* Home Button */}
                <button className='btn btn-primary mt-2 ms-2' onClick={() => navigate('/landing')}> Back to Home</button>
            </div>
            <div className='task-container'>
                {taskList && taskList.map((obj, index) => 
                    <Card 
                        key={index} 
                        taskObj={obj} 
                        index={index} 
                        deleteTask={deleteTask} 
                        updateListArray={updateListArray}
                    />
                )}
            </div>
            <CreateTask toggle={toggle} modal={modal} save={saveTask} />
        </div>
     );
}

export default TodoList;
