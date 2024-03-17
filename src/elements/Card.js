
import React, { useState } from 'react';
import EditTask from '../modals/EditTask';

const Card  = ({taskObj, index, deleteTask, updateListArray}) => {
    const [modal, setModel] = useState(false);
   
    const colors = [
        {
            primaryColor : "#5D93E1",
            secondaryColor : "#bbd1EE"
        },
        {
            primaryColor : "#F9D288",
            secondaryColor : "#EDE0C1"
        },
        {
            primaryColor : "#5DC250",
            secondaryColor : " #C8F6C1"
        },
        {
            primaryColor : "#F48687",
            secondaryColor : "#E8C1C1"
        },
        {
            primaryColor : "#B964F7",
            secondaryColor : "#C1B7E1"
        }
    
        
    ]

    const toggle = () => {
        setModel(!modal);
    }

    const updateTask = (obj) => {
        updateListArray(obj, index)
    }

    const handleDelete = () =>{
        deleteTask(index)
    }



    return (
       
        <div class = "card-wrapper mr-5"> 
            <div class = "card-top" style={{"backgroundColor": colors[index%5].primaryColor}}></div>
            <div class = "task-holder">
                <span class = "card-header" style={ {"backgroundColor": colors[index%5].secondaryColor, "border-radius": "20px"}}>
                     {taskObj.Name}    
                </span>
                <p className='mt-3'>{taskObj.Description} </p>

                <div style={{"position": "absolute", "right" : "20px", "bottom": "10px", "margin": "10px"}}>
                    <i class = "far fa-edit mr-3"  style={{"color": colors[index%5].primaryColor, "cursor": "pointer"}} onClick = {() => setModel(true)}></i>
                    <i class = "fas fa-trash-alt" style={{"color": colors[index%5].primaryColor, "cursor": "pointer"}} onClick = {handleDelete}></i>

                </div>
                <EditTask modal = {modal} toggle = {toggle} updateTask = {updateTask} taskObj = {taskObj} />
                 
                </div>
        </div>
    


    );
};

export default Card ;