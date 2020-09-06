
const ADD_TO_CART = 'ADD_TO_CART'
const DEL_ITEM_FROM_CART = 'DEL_ITEM_FROM_CART'
const ITEM_COUNT_DECREASE = 'ITEM_COUNT_DECREASE'
const ITEM_COUNT_INCREASE = 'ITEM_COUNT_INCREASE'


let initialState = {
  items: [],
  totalPrice: 0,
  totalCount: 0,
  deliveryPrice: 10,
  deliveryPriceThreshold: 120
}

const getTotalPrice = (arr) => arr.reduce((sum, item) => sum + (item.price * item.count) , 0);
const getTotalCount = (arr) => arr.reduce((sum, item) => sum + item.count , 0);


const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART: {

      let newItems = [...state.items]
      let findKey = null;

      for (let itemKey in newItems) {
        let currentItem = newItems[itemKey];
        if (currentItem.id === action.payload.id && currentItem.size === action.payload.size) {
          findKey = itemKey;
          break;
        }
      }

      if (findKey !== null) {
        newItems[findKey].count++;
      } else {
        newItems.push({...action.payload, count: 1})
      }

      return {
        ...state,
        items: newItems,
        totalPrice: getTotalPrice(newItems),
        totalCount: getTotalCount(newItems)
      }
    }

    case DEL_ITEM_FROM_CART: {

      let newItems = state.items.filter(item => {
        return (item.id !== action.id) || (item.size !== action.size)
      })

      return {
        ...state,
        items: newItems,
        totalPrice: getTotalPrice(newItems),
        totalCount: getTotalCount(newItems)
      }
    }

    case ITEM_COUNT_DECREASE: {

      let newItems = state.items.map(item => {
        return (item.id === action.id) && (item.size === action.size) ? {...item, count: --item.count } : item
      })

      return {
        ...state,
        items: newItems,
        totalPrice: getTotalPrice(newItems),
        totalCount: getTotalCount(newItems)
      }
    }

    case ITEM_COUNT_INCREASE: {

      let newItems = state.items.filter(item => {
        return (item.id === action.id) && (item.size === action.size) ? {...item, count: ++item.count } : item
      })

      return {
        ...state,
        items: newItems,
        totalPrice: getTotalPrice(newItems),
        totalCount: getTotalCount(newItems)
      }
    }

    default:
      return state
  }
}

export default cartReducer

export const addItemToCart = (obj) => ({
  type: ADD_TO_CART,
  payload: obj,
})

export const delItemFromCart = (id, size) => ({
  type: DEL_ITEM_FROM_CART,
  id, size
})

export const itemCountDecrease = (id, size) => ({
  type: ITEM_COUNT_DECREASE,
  id, size
})

export const itemCountIncrease = (id, size) => ({
  type: ITEM_COUNT_INCREASE,
  id, size
})
