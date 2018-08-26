import { combineReducers } from 'redux'
import Foo from './LibraryReducer'
import data from './LibraryList.json'

const INITIAL_STATE = {
  libraries: data,
  candy: 101
}

function LibReducer(state = INITIAL_STATE, action) {
  console.log('the action is ', action)
  if (action.type == 'changeCandy') {
    //return { ...state, candy: 432}
    return { ...state, candy: 432 }
  } else {
    return state
  }
}

export default combineReducers({
  libraries: LibReducer,
  candy: () => 42
})

// console.log(store.getState())
// {libraries: []}
