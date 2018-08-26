import { combineReducers } from 'redux'
import Foo from './LibraryReducer'

export default combineReducers({
  libraries: Foo
})

// console.log(store.getState())
// {libraries: []}
