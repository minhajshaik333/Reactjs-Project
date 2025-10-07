import {legacy_createStore , applyMiddleware} from "redux"
import logger from "redux-logger"
import CartReducer from "../reducer/CartReducer"

const ReduxStore = legacy_createStore(CartReducer, applyMiddleware(logger))

export default ReduxStore