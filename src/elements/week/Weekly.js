
import React from "react";
import { useSelector  } from "react-redux";
import '../../styles/habitWeekly.css' ; 
import TopNav from "../today/TopNav";
import WeeklyCard from "./WeeklyCard";

const Weekly = () => {
  const habits = useSelector((state) => state.habitsReducer);
  console.log(habits);
  
  return (
    <div className="container-body">
    <TopNav/>
    <div className="container">
    
     { habits.list.map((habit , index)=>(
          <WeeklyCard habit={habit} key={index}   />
        ))
     }
    </div>
    </div>
  );
};

export default Weekly;