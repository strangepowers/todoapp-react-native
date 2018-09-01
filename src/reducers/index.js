import { combineReducers } from 'redux'

function numberReducer(state = 12, action) {
  console.log("state is ", state)
  console.log("action is ", action)
  if(action.type === 'INC_ACTION') {
    return state + 1
  }
  if(action.type === "RESET") {
    return 0
  }
  else {
    return state
  }
}

export default combineReducers({
  count: numberReducer
})
