import React from 'react';


function Intro(props){

    return (
        <div className='intro'>
            <h2>
                {props.head}
            </h2>
            <p>{props.content} </p>
            <img src= {props.image} alt="" className='img-responsive img-fluid'/>
        </div>
    );
}

export default Intro;