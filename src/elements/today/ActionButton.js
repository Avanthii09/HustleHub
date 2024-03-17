
import React from "react";
import { useDispatch } from "react-redux";
import { addHabitStatus } from "../../action";
import 'bootstrap/dist/css/bootstrap.min.css';

import "../../styles/habitHome.css";

const ActionButton = (props) => {
  const { habit } = props;
  const dispatch = useDispatch();

  const handleNoStatus = () => {
    const obj = {
      id: habit.id,
      doneStatus: "",
    };
    dispatch(addHabitStatus(obj));
  };

  const handleDoneStatus = () => {
    const obj = {
      id: habit.id,
      doneStatus: "done",
    };
    dispatch(addHabitStatus(obj));
  };

  const handleNotDoneStatus = () => {
    const obj = {
      id: habit.id,
      doneStatus: "notdone",
    };
    dispatch(addHabitStatus(obj));
  };

  return (
    <div className="habitCardAction">
      {habit.doneStatus === "" && (
        <span className="habitCardCheckIcon">
          <i 
            className="fa-regular fa-square"
            onClick={handleDoneStatus}
            onMouseEnter={e => e.target.classList.add("hovered")}
            onMouseLeave={e => e.target.classList.remove("hovered")}
          ></i>
          <p>Not Done</p>
        </span>
      )}

      {habit.doneStatus === "done" && (
        <span className={"habitCardCheckIcon"}>
          <i
            className="fa-solid fa-check-square"
            onClick={handleNotDoneStatus}
            onMouseEnter={e => e.target.classList.add("hovered")}
            onMouseLeave={e => e.target.classList.remove("hovered")}
          ></i>
          <p>Done</p>
        </span>
      )}

      {habit.doneStatus === "notdone" && (
        <span className={"habitCardCrossIcon"}>
          <i 
            className="fa-solid fa-times-square"
            onClick={handleNoStatus}
            onMouseEnter={e => e.target.classList.add("hovered")}
            onMouseLeave={e => e.target.classList.remove("hovered")}
          ></i>
          <p>Failed</p>
        </span>
      )}
    </div>
  );
};

export default ActionButton;
