
import React from 'react';
import "../../styles/habitWeekly.css";

const SingleDay = (props) => {
  const { day } = props ;
  console.log(day) ; 
  return (
    <div className="singleDate">
          <span> {day.day} </span>{" "}
          <span>
            {" "}
          </span>{" "}
    </div>
  )
}

export default SingleDay ;