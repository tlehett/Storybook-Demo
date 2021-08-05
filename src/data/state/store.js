import { createBrowserHistory } from "history";
import { applyMiddleware, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { routerMiddleware } from "connected-react-router";
import createRootReducer from './reducer';

export const history = createBrowserHistory();

const store = createStore(
    createRootReducer(history),
    compose(
        // Middleware to enable asynchronous actions
        applyMiddleware(thunk),
        // Middleware to issue navigation events via Redux actions
        applyMiddleware(
            routerMiddleware(history)
        )
    )
);

export default store;