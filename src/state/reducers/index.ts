import { combineReducers } from "redux";
import repositoriesReducer from "./repositoriesReducer";

export type RootState = ReturnType<typeof reducers>;

const reducers = combineReducers({
  repositories: repositoriesReducer,
});

export default reducers;
