import { createStore } from "redux";
import counterReducer from "../CounterReducer/CounterReducer";

const store = createStore(counterReducer);
export default store;
