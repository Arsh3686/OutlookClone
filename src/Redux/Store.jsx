import { createStore } from "redux";
import { allReducers } from "./Reducers";

// const store = () => {
// 	return ;
// };
export const store = createStore(allReducers);
