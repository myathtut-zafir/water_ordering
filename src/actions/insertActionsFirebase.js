import fbConfig from "../config/fbConfig"
import * as firebase from "firebase";

let fbRefOrders = firebase.database().ref("/orders/");
let fbRefTotalOrder = firebase.database().ref("/total_order/");

export const insert = (data) => dispatch => {
    fbRefOrders.push(data);
};

export const fetchOrder = () => dispatch => {

    fbRefOrders.orderByKey().once("value", snapshot => {
        dispatch({
            type: "FETCH_ORDER",
            payload: snapshot.val()
        });
    });
};

export const fetchOrderCount = () => dispatch => {

    fbRefTotalOrder.orderByKey().once("value", snapshot => {
        console.log(snapshot.val());
        dispatch({
            type: "FETCH_ORDER_COUNT",
            payload: snapshot.val()
        });
    });
};

