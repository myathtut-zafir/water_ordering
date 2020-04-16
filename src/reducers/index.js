import {combineReducers} from "redux";
import orderReducers from "./orderReducers";


export default combineReducers({
    orders: orderReducers,

});
