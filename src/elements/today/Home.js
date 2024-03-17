

import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "../../styles/habitHome.css";
import { addHabit } from "../../action";
import HabitCard from "./HabitCard";
import 'bootstrap/dist/css/bootstrap.min.css';
import TopNav from "./TopNav";

const Home = () => {
  const [inputData, setInputData] = useState("");

  const habits = useSelector((state) => state.habitsReducer);
  const dispatch = useDispatch();

  const handleAddHabit = () => {
    if (inputData.length === 0) {
      return window.alert("Please Enter Your Habit");
    }
    dispatch(addHabit(inputData));
    setInputData("");
  };

  return (
    <div className="container-body">
    <TopNav/>
    <div className="container">
      
      <div className="bg-gradient-primary text-white p-3">
        <h2 className="mb-0 head2">My Habit Tracker</h2>
        <p className="mb-0 para"><em>Track your daily habits and reach your goals</em></p>
      </div>
     
      <div className="addHabit">
        <input
          type="text"
          placeholder="Add a new habit"
          value={inputData}
          onChange={(event) => setInputData(event.target.value)}
          required
          className="form-control"
        />
        <button className="btn btn-primary mt-3" onClick={handleAddHabit}>Add Habit</button>
      </div>
      <div className="listHabit">
        {habits.list.map((habit) => (
          <HabitCard habit={habit} key={habit.id} />
        ))}
      </div>
    </div>
    </div>
  );
};

export default Home;
