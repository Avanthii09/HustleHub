


import React from "react";
import { useDispatch } from "react-redux";
import { deleteHabit } from "../../action";
import  "../../styles/habitHome.css";
import ActionButton from "./ActionButton";
import 'bootstrap/dist/css/bootstrap.min.css';


const HabitCard = (props) => {
  const { habit } = props;
  const target = 6;
  let progress = 0;

  for (let i = 0; i < 6; i++) {
    if (habit.weekdays[i].doneStatus === "done") {
      progress++;
    }
  }

  const dispatch = useDispatch();

  const handleDeleteHabit = () => {
    dispatch(deleteHabit(habit.id));
  };

  return (
    <div className="habitCardContainer">
      <div className="habitCard">
        <div className="habitCardTitle">
          <div className="habitActionName">
            <span>
              <ActionButton habit={habit} />
            </span>
            <span className="cardName">
              {`${habit.name}`}
            </span>
          </div>
          <div>
            <i
              className="fa-solid fa-trash"
              onClick={handleDeleteHabit}
              style={{ cursor: "pointer", color: "#dc3545" }}
            ></i>
          </div>
        </div>

        <div className="weeklyProgress">
          <span className="targetProgress">
            <span className="progressLabel">Target: </span>
            <span className="progressValue">{target} days per week</span>
          </span>
          <span className="actualProgres">
            <span className="progressLabel">Progress: </span>
            <span className="progressValue">{progress} / {target}</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default HabitCard;