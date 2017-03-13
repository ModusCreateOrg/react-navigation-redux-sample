/**
 * Created by stan229 on 5/27/16.
 */
import { combineReducers } from "redux";
import cars from "./cars";

export default function getRootReducer(navReducer) {
    return combineReducers({
        nav: navReducer,
        cars: cars
    });
}
