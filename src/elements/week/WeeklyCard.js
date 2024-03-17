import React from "react";
import "../../styles/habitWeekly.css";
import ActionDayButton from "./ActionDayButton";
import SingleDay from "./SingleDay";

const WeeklyCard = (props) => {
  const { habit } = props;
  // console.log(habit);

  return (
    <div className="weeklyCard">
      <div className="habitTitle">
        <div className="habitName"> {habit.name} </div>
      </div>
      <div className="weeklyDate">
        {habit.weekdays.map((item, index) => (
          <div className="singleDay">
            <SingleDay day={item} key={index} />
            <ActionDayButton habit={habit} index={index}/>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeeklyCard;