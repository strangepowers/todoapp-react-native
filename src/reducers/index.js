import { combineReducers } from 'redux'
import Foo from './LibraryReducer'
import data from './LibraryList.json'

const INITIAL_STATE = {
  libraries: data,
  candy: 101,
  nextItemId: 4
}

function reduceItem(item, payload) {
  if (item.id != payload.id) return item
  return Object.assign({}, item, { finished: payload.finished })
}

function LibReducer(state = INITIAL_STATE, action) {
  console.log('the action is ', action)
  car = action
  if (action.type == 'changeCandy') {
    //return { ...state, candy: 432}
    return { ...state, candy: 432 }
  }
  if (action.type === 'changedFinishedValue') {
    return {
      ...state,
      libraries: state.libraries.map(item => reduceItem(item, action.payload))
    }
  }
  if (action.type === 'addNewItem') {
    let newItemId = state.nextItemId
    let nextItemId = state.nextItemId + 1
    return {
      ...state,
      nextItemId: nextItemId,
      libraries: [].concat(state.libraries, {
        id: newItemId,
        title: action.payload,
        finished: false
      })
    }
  } else {
    return state
  }
}

function reduceEditing(state = false, action) {
  console.log('the action in reduceEditing is ', action)
  if (action.type == 'editList') {
    return !state
  } else {
    return state
  }
}

export default combineReducers({
  libraries: LibReducer,
  candy: () => 42,
  editing: reduceEditing
})

// console.log(store.getState())
// {libraries: []}
