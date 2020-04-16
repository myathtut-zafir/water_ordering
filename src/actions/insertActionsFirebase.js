import fbConfig from "../config/fbConfig"
import * as firebase from "firebase";

let fbRef = firebase.database().ref("/messages/");
export const insert = (data) => dispatch => {
    fbRef.push(data);
}
export const fetchOrder = () => dispatch => {

    fbRef.orderByKey().once("value", snapshot => {
        dispatch({
            type: "FETCH_ORDER",
            payload: snapshot.val()
        });
    });
};

