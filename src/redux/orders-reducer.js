import {clearCart} from "./cart-reducer";

const ADD_NEW_ORDER = 'orders/ADD_NEW_ORDER'
const SET_ORDER_COMPLETE = 'orders/SET_ORDER_COMPLETE'

let initialState = {
  orders: [],
  orderComplete: false
}

const ordersReducer = (state = initialState, action) => {
  switch (action.type) {

    case ADD_NEW_ORDER: {
      return {
        ...state,
        orders: [...state.orders, action.payload]
      }
    }

    case SET_ORDER_COMPLETE: {
      return {
        ...state,
        orderComplete: action.param
      }
    }

    default:
      return state
  }
}

export default ordersReducer

const setNewOrder = (obj) => ({
  type: ADD_NEW_ORDER,
  payload: obj,
})

export const setOrderComplete = (param) => ({
  type: SET_ORDER_COMPLETE,
  param
})


export const addNewOrder = (obj) => (dispatch) => {
  dispatch(setNewOrder(obj))
  dispatch(clearCart())
  dispatch(setOrderComplete(true))
}