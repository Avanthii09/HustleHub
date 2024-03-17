import React from "react";


function AccButton(props){

    return (
        <a role="button" href={props.link} className="btn btn-dark btn-lg">{props.name}</a>
    );
}

export default AccButton;