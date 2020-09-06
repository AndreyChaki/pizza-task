import {catalogAPI} from "../api/api";

const SET_CATALOG_ITEMS = 'SET_CATALOG_ITEMS'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'

let initialState = {
  items: [],
  isFetching: false
}

const catalogReducer = (state = initialState, action) => {
  switch (action.type) {

    case SET_CATALOG_ITEMS: {
      return {...state, items: action.items}
    }

    case TOGGLE_IS_FETCHING: {
      return {...state, isFetching: !state.isFetching}
    }


    default:
      return state
  }
}

export default catalogReducer

const toggleIsFetching = () => ({
  type: TOGGLE_IS_FETCHING
})

const setCatalogItems = (items) => ({
  type: SET_CATALOG_ITEMS,
  items
})

export const requestCatalogItems = () => (dispatch) => {
  dispatch(toggleIsFetching())
  catalogAPI.getCatalogItems().then(response => {
    dispatch(setCatalogItems(response.data.items))
  })
  dispatch(toggleIsFetching())
}

