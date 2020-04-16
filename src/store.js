import {createStore, applyMiddleware, compose} from 'redux';
import {reactReduxFirebase, getFirebase} from "react-redux-firebase";
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import fbConfig from './config/fbConfig'

const initialState = {};

const middleware = [thunk];

const store = createStore(
    rootReducer,
    initialState,
    compose(
        applyMiddleware(thunk.withExtraArgument({getFirebase})),
        reactReduxFirebase(fbConfig), // redux binding for firebase
        // applyMiddleware(...middleware),
    )
);

export default store;
