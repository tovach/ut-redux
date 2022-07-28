import {combineReducers} from "redux";
import {customerReducer} from "./customers/customersReducer";
import {cashReducer} from "./cash/cashReducer";

const rootReducer = combineReducers({
    cashReducer,
    customerReducer
});

export {rootReducer};
