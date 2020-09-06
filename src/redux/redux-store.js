import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware from 'redux-thunk'
import catalogReducer from "./catalog-reducer";
import cartReducer from "./cart-reducer";
import ordersReducer from "./orders-reducer";

let reducers = combineReducers({
  catalog: catalogReducer,
  cart: cartReducer,
  orders: ordersReducer
})

let store = createStore(reducers, applyMiddleware(thunkMiddleware))

window.store = store

export default store