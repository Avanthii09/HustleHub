import { combineReducers } from "redux";
import { habitsReducer } from "./HabitReducer";

const rootReducer = combineReducers({
  habitsReducer
});

export default rootReducer;